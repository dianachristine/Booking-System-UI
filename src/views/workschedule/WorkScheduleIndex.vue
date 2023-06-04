<script lang="ts">
import { RouterLink } from 'vue-router';
import { Options, Vue } from "vue-class-component";
import { useIdentityStore } from "@/stores/identity";
import { useWorkSchedulesStore } from '@/stores/workschedules.js';
import { WorkScheduleService } from '@/services/WorkScheduleService';
import BookingFilters from '@/components/booking/BookingFilters.vue';
import PinkButton from '@/components/PinkButton.vue';

@Options({
    components: {
        BookingFilters,
        PinkButton,
    },
    props: {},
    emits: []
})
export default class WorkScheduleIndex extends Vue {
    identityStore = useIdentityStore();

    workSchedulesStore = useWorkSchedulesStore();
    workScheduleService = new WorkScheduleService();

    async mounted(): Promise<void> {
        this.workSchedulesStore.$state.workSchedules = await this.workScheduleService.getAll();
    }

    getLocalDate(isoDateStr: string): string {
        const dateDate = new Date(isoDateStr);
        return `${('0' + dateDate.getDate()).slice(-2)}.${('0' + (dateDate.getMonth() + 1)).slice(-2)}.${dateDate.getFullYear()}`;
    }

    getLocalTime(isoDateStr: string): string {
        let serviceStartTimeForClientLocal = new Date(isoDateStr);
        return serviceStartTimeForClientLocal.toLocaleTimeString("et-EE", { timeZone: "Europe/Tallinn" }).slice(0, -3);
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
                                <br />
                                <PinkButton buttonPathName="workschedulecreate" buttonText="Loo uus töögraafik"
                                    :onRight="true" />

                                <br />
                                <BookingFilters />

                                <div class="tab-content" id="target-content">

                                    <div class="tab-pane fade show active" id="target-tabs-future" role="tabpanel"
                                        aria-labelledby="target-tab-future">

                                        <div class="row pb-3"  v-for="workschedule of workSchedulesStore.workSchedulesInFuture" :key="workschedule.id">
                                            <div class="col-md-12">
                                                <div class="list-group mb-0">
                                                    <div class="list-group-item" >
                                                        <RouterLink
                                                            :to="{ name: 'workscheduleedit', params: { id: workschedule.id } }"
                                                            style="text-decoration: none; color:#191919">
                                                            <b>{{ getLocalDate(workschedule.from!)}}, </b> {{ workschedule.dayOfWeek }}
                                                            <br/>
                                                            {{ getLocalTime(workschedule.from!) }} - {{ getLocalTime(workschedule.to!) }}                                                 
                                                            <br>
                                                            <span v-if="workschedule.comment">
                                                                Kommentaar: {{ workschedule.comment }}
                                                            </span>
                                                        </RouterLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div v-if="workSchedulesStore.workSchedulesInFuture.length == 0">
                                            Tulevasi tööaegu pole.
                                        </div>
                                    </div>

                                    <div class="tab-pane fade show" id="target-tabs-past" role="tabpanel"
                                        aria-labelledby="target-tab-past">

                                        <div class="row pb-3"  v-for="workschedule of workSchedulesStore.workSchedulesInPast" :key="workschedule.id">
                                            <div class="col-md-12">
                                                <div class="list-group mb-0">
                                                    <div class="list-group-item" >
                                                        <RouterLink
                                                            :to="{ name: 'workscheduleedit', params: { id: workschedule.id } }"
                                                            style="text-decoration: none; color:#191919">
                                                            <b>{{ getLocalDate(workschedule.from!)}}, </b> {{ workschedule.dayOfWeek }}
                                                            <br/>
                                                            {{ getLocalTime(workschedule.from!) }} - {{ getLocalTime(workschedule.to!) }}                                                 
                                                            <br>
                                                            <span v-if="workschedule.comment">
                                                                Kommentaar: {{ workschedule.comment }}
                                                            </span>
                                                        </RouterLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div v-if="workSchedulesStore.workSchedulesInPast.length == 0">
                                            Varasemaid tööaegu pole.
                                        </div>
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
  