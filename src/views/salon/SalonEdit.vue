<script lang="ts">
import { RouterLink } from 'vue-router';
import { Options, Vue } from "vue-class-component";
import { useIdentityStore } from "@/stores/identity";
import { useSalonStore } from '@/stores/salon';
import { SalonService } from '@/services/SalonService';
import type { ISalon } from '@/domain/ISalon';
import VueDatePicker from '@vuepic/vue-datepicker';

@Options({
    components: {
        VueDatePicker
    },
    props: {},
    emits: []
})
export default class SalonEdit extends Vue {
    textInputOptions = {
        enterSubmit: true,
        tabSubmit: true,
        format: 'dd.MM.yyyy'
    };

    identityStore = useIdentityStore();

    salonStore = useSalonStore();
    salonService = new SalonService();

    salonName: string | undefined = undefined;
    address: string | undefined = undefined;
    from: string | null | undefined= null;

    errors: [string] | null = null;

    format = (from: any) => {
        if (from) {
            const day = ('0' + from.getDate()).slice(-2);
            const month = ('0' + (from.getMonth() + 1)).slice(-2);
            const year = from.getFullYear();

            return `${day}.${month}.${year}`;
        }

    }

    async mounted(): Promise<void> {
        this.salonStore.$state.salon = await this.salonService.getSalon();
        this.salonName = this.salonStore.$state.salon.salonName;
        this.address = this.salonStore.$state.salon.address;
        this.from = this.salonStore.$state.salon.from;
    }

    async editClicked(): Promise<void> {
        if (this.salonName && this.address) {

            let fromString = this.from;

            if (this.from) {
                var fromDate: Date = new Date(this.from);
                fromString = `${fromDate.getFullYear()}-${('0' + (fromDate.getMonth() + 1)).slice(-2)}-${('0' + fromDate.getDate()).slice(-2) + 'T00:00:00.000Z'}`
            }

            var salonToEdit: ISalon = {
                id: this.salonStore.$state.salon?.id!,
                salonName: this.salonName,
                address: this.address,
                from: fromString,
            }

            var res = await this.salonService.editSalon(salonToEdit);

            if (res.status >= 300) {
                this.errors = [res.status + ' ' + res.errorMsg];
            } else {
                this.salonStore.$state.salon =
                    await this.salonService.getSalon();

                this.$router.push('/minusalong');
            }

        } else {
            this.errors = ["Palun täida kõik kohustuslikud väljad"];
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
                                        <h3>Muuda salongi - {{ salonStore.salon?.salonName }}</h3>
                                        <hr />
                                        <div v-if="errors != null" class="text-danger validation-summary-errors"
                                            data-valmsg-summary="true">
                                            <ul v-for="error of errors">
                                                <li>{{ error }}</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <div>
                                                <div class="form-group">
                                                    <label class="control-label" for="SalonName">Salongi nimi *</label>
                                                    <input v-model="salonName" class="form-control" type="text" disabled />
                                                </div>
                                                <div class="form-group">
                                                    <label class="control-label" for="Aadress">Salongi aadress *</label>
                                                    <input v-model="address" class="form-control" type="text" />
                                                </div>
                                                <div class="form-group">
                                                    <label class="control-label" for="From">Alates</label>
                                                    <VueDatePicker v-model="from" text-input auto-apply locale="et-ee"
                                                        :enable-time-picker="false" :format="format"
                                                        :text-input-options="textInputOptions">
                                                    </VueDatePicker>
                                                </div>
                                            </div>
                                            <br>
                                            <div class="form-group">
                                                <input @click="editClicked()" type="submit" value="Muuda"
                                                    class="btn btn-warning" />
                                            </div>
                                            <br>
                                        </div>
                                        <div>
                                            <RouterLink :to="{ name: 'saloninfo' }" class="nav-link" active-class="active"
                                                style="text-decoration: underline;">
                                                Tagasi</RouterLink>
                                        </div>
                                        <br>
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