<script lang="ts">
import router from "@/router";
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { Options, Vue } from "vue-class-component";
import { useIdentityStore } from "@/stores/identity";
import { useWorkSchedulesStore } from '@/stores/workschedules.js';
import { WorkScheduleService } from '@/services/WorkScheduleService';
import { useSalonStore } from '@/stores/salon';
import { SalonService } from '@/services/SalonService';
import type { IWorkSchedule } from '@/domain/IWorkSchedule';

@Options({
    components: {
    },
    props: {},
    emits: []
})
export default class WorkScheduleCreate extends Vue {
    textInputOptions = {
        enterSubmit: true,
        tabSubmit: true,
        format: 'dd.MM.yyyy'
    };

    format = (date: any) => {
        if (date) {
            const day = ('0' + date.getDate()).slice(-2);
            const month = ('0' + (date.getMonth() + 1)).slice(-2);
            const year = date.getFullYear();

            return `${day}.${month}.${year}`;
        }
    }


    id!: string;
    errors: [string] | null = null;
    date: string | null = null;
    startTime: { hours: number, minutes: number } | null = null;
    endTime: { hours: number, minutes: number } | null = null;
    minDate: Date | string = new Date();

    identityStore = useIdentityStore();

    workSchedulesStore = useWorkSchedulesStore();
    workScheduleService = new WorkScheduleService();
    salonStore = useSalonStore();
    salonService = new SalonService();

    async mounted(): Promise<void> {
        this.salonStore.$state.salon = await this.salonService.getSalon();
    }

    async submitClicked(): Promise<void> {
        this.errors = null;

        if (
            this.date == null || this.startTime == null || this.endTime == null) {

            this.errors = ["Palun täida kõik väljad"];

        } else {
            let dateDate: Date = new Date(this.date);
            let dateString: string = `${dateDate.getFullYear()}-${('0' + (dateDate.getMonth() + 1)).slice(-2)}-${('0' + dateDate.getDate()).slice(-2)}`

            let localStartTimeString = `${dateString}T${('0' + this.startTime.hours).slice(-2)}:${('0' + this.startTime.minutes).slice(-2)}:00`
            let localEndTimeString = `${dateString}T${('0' + this.endTime.hours).slice(-2)}:${('0' + this.endTime.minutes).slice(-2)}:00`

            const startUtcString = new Date(localStartTimeString).toISOString(); // NB! this is utc from browser's local time
            const endUtcString = new Date(localEndTimeString).toISOString(); // NB! this is utc from browser's local time

            let workScheduleToCreate: IWorkSchedule = {
                id: this.id,
                from: startUtcString,
                to: endUtcString,
                salonId: this.salonStore.$state.salon?.id!
            }

            var res = await this.workScheduleService.add(workScheduleToCreate);
            if (res.status >= 300) {
                this.errors = [res.status + ' ' + res.errorMsg];
            } else {
                router.push({ name: "workscheduleindex" })
            }

        }
    }
}
</script>

<template>
    <template v-if="identityStore.$state.response != null && identityStore.$state.response.isBeautician">
        <div style="height: 50px;"></div>
        <br>
        <section class="vh-100% gradient-custom">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col col-md-10">
                        <div class="card">
                            <div class="card-body p-4">
                                <div class="col-md-2"></div>
                                <div class="row">
                                    <div class="col-md-2"></div>
                                    <div class="col-md-8">
                                        <br>
                                        <h4>Töögraafiku loomine </h4>
                                        NB! Loob uue tööaja kohaliku aja järgi
                                        <hr />

                                        <div v-if="errors != null" class="text-danger validation-summary-errors"
                                            data-valmsg-summary="true">
                                            <ul v-for="error of errors">
                                                <li>{{ error }}</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <div class="form-group">
                                                <label class="control-label" for="date">Vali kuupäev *</label>
                                                <VueDatePicker v-model="date" text-input auto-apply locale="et-ee"
                                                    :enable-time-picker="false" :format="format"
                                                    highlight-week-days="[1, 2, 3, 4, 5]"
                                                    :text-input-options="textInputOptions" :min-date="minDate">
                                                </VueDatePicker>

                                                <br />
                                                <label class="control-label" for="startTime">Vali algusaeg *</label>
                                                <VueDatePicker v-model="startTime" text-input auto-apply locale="et-ee"
                                                    time-picker>
                                                </VueDatePicker>

                                                <br />
                                                <label class="control-label" for="endTime">Vali lõppaeg *</label>
                                                <VueDatePicker v-model="endTime" text-input auto-apply locale="et-ee"
                                                    time-picker>
                                                </VueDatePicker>

                                            </div>
                                            <div class="form-group">

                                            </div>


                                            <br />
                                            <br>
                                            <div class="form-group">
                                                <input @click="submitClicked()" type="submit" value="Lisa"
                                                    class="btn btn-success" />
                                            </div>
                                            <br>
                                            <RouterLink :to="{ name: 'workscheduleindex' }" class="nav-link"
                                                active-class="active" style="text-decoration: underline;">
                                                Tagasi</RouterLink>
                                        </div>
                                        <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </template>
    <template v-else>
        <div style="height: 50px;"></div>
    </template>
</template>
  