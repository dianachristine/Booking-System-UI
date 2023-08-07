<script lang="ts">
import router from "@/router";
import { RouterLink } from 'vue-router';
import { Options, Vue } from "vue-class-component";
import { useIdentityStore } from "@/stores/identity";
import { useServicesStore } from '@/stores/services.js';
import { ServiceService } from '@/services/ServiceService';
import { useWorkSchedulesStore } from '@/stores/workschedules.js';
import { WorkScheduleService } from '@/services/WorkScheduleService';
import { useClientsStore } from '@/stores/clients.js';
import { ClientService } from '@/services/ClientService';
import { BookingService } from '@/services/BookingService';
import type { IWorkSchedule } from '@/domain/IWorkSchedule';
import type { IClient } from '@/domain/IClient';
import type { IBooking } from '@/domain/IBooking';

@Options({
    components: {
    },
    props: {
        id: String,
        workScheduleid: String,
        date: String,
        time: String
    },
    emits: []
})
export default class BookingClient extends Vue {
    id!: string;
    workScheduleid!: string;
    date!: string;
    dateFormatted: string | null = null;
    time!: string;
    errors: [string] | null = null;
    serviceStartTimeForClientLocal: Date | null = null;
    selectedTimeInEstonianTime: string = "";
    termsAndConditionsAccepted: boolean = false;

    firstName: string | null = null;
    lastName: string | null = null;
    email: string | null = null;
    countryCode: string = "+372";
    phoneNumber: string | null = null;
    comment: string | undefined = undefined;

    identityStore = useIdentityStore();

    servicesStore = useServicesStore();
    ServiceService = new ServiceService();

    workScheduleStore = useWorkSchedulesStore();
    workScheduleService = new WorkScheduleService();

    clientStore = useClientsStore();
    clientService = new ClientService();

    bookingService = new BookingService();

    async created(): Promise<void> {
        this.servicesStore.$state.service = await this.ServiceService.get(this.id);
    }
    mounted(): void {
        let localDateTimeString = `${this.date}T${this.time}:00`
        this.serviceStartTimeForClientLocal = new Date(localDateTimeString);
        this.selectedTimeInEstonianTime = this.serviceStartTimeForClientLocal.toLocaleTimeString("et-EE", { timeZone: "Europe/Tallinn" }).slice(0, -3)

        const dateDate = new Date(this.date);
        this.dateFormatted = `${('0' + dateDate.getDate()).slice(-2)}.${('0' + (dateDate.getMonth() + 1)).slice(-2)}.${dateDate.getFullYear()}`;

        if (this.identityStore.$state.response != null && !this.identityStore.$state.response.isBeautician) {
            this.firstName = this.identityStore.$state.response.firstName;
            this.lastName = this.identityStore.$state.response.lastName;
            this.email = this.identityStore.$state.response.email;
            this.countryCode = this.identityStore.$state.response.countryCode;
            this.phoneNumber = this.identityStore.$state.response.phoneNumber;
        }
    }

    async submitBookingClicked(): Promise<void> {

        if (this.firstName && this.lastName && this.email && this.countryCode && this.phoneNumber && this.termsAndConditionsAccepted) {

            if (typeof(this.phoneNumber) == 'number') {
                this.phoneNumber = String(this.phoneNumber);
            }
            var clientToAdd: IClient = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                countryCode: this.countryCode,
                phoneNumber: this.phoneNumber
            }

            var res = await this.clientService.add(clientToAdd);

            if (res.status >= 300 || res.data == null) {
                this.errors = [res.status + ' ' + res.errorMsg];
            } else {
                let clientId = res.data;

                const startDateStringLocal = new Date(this.serviceStartTimeForClientLocal!.getTime() - this.servicesStore.service?.preparationTimeInMinutes! * 60000);
                const endDateStringLocal = new Date(this.serviceStartTimeForClientLocal!.getTime() + (this.servicesStore.service?.serviceDurationInMinutes! + this.servicesStore.service?.cleaningTimeInMinutes!) * 60000);

                const startUtcString = new Date(startDateStringLocal).toISOString();
                const endUtcString = new Date(endDateStringLocal).toISOString();

                let bookingToAdd: IBooking = {
                    from: startUtcString,
                    to: endUtcString,
                    comment: this.comment,
                    serviceId: this.id,
                    clientId: clientId,
                    workScheduleId: this.workScheduleid
                }

                var res = await this.bookingService.add(bookingToAdd);

                if (res.status >= 300) {
                    this.errors = [res.status + ' ' + res.errorMsg];
                } else {
                    router.push({ name: "bookingconfirmation", params: { id: this.id, date: this.date, time: this.time } })
                }
            }

        } else {
            this.errors = ["Palun täida kõik kohustuslikud väljad"];
        }
    }

}
</script>

<template>
    <div style="height: 50px;"></div>
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
                                    <h5>Valitud teenus: {{ servicesStore.service?.serviceName }}</h5>
                                    <h6>Kuupäev ja kellaeg: {{ dateFormatted }}, {{ selectedTimeInEstonianTime }}</h6>
                                    <span class="text-muted">Kestus: {{ servicesStore.service?.serviceDurationInMinutes }}
                                        min</span><br>
                                    <span class="text-muted">Hind: {{ servicesStore.service?.amount }}{{
                                        servicesStore.service?.currency }}</span>

                                    <br />
                                    <br />
                                    <div style="text-align:center;">
                                        <h5>Kliendi andmed</h5>
                                        <hr />
                                        <span>Palun täida väljad</span>
                                    </div>

                                    <br>

                                    <div v-if="errors != null" class="text-danger validation-summary-errors"
                                        data-valmsg-summary="true">
                                        <ul v-for="error of errors">
                                            <li>{{ error }}</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div class="form-group">
                                            <label class="control-label" for="firstName">Eesnimi *</label>
                                            <input v-model="firstName" class="form-control" type="text" />
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label" for="lastName">Perenimi *</label>
                                            <input v-model="lastName" class="form-control" type="text" />
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label" for="email">E-mail *</label>
                                            <input v-model="email" class="form-control" type="email" />
                                        </div>

                                        <label class="control-label" for="phone">Telefoni number *</label>
                                        <div class="form-group d-flex">
                                            <input v-model="countryCode" class="form-control flex-grow-1"
                                                style="width: 4rem" type="text" />
                                            <input v-model="phoneNumber" class="form-control flex-grow-1" type="number" />
                                        </div>

                                        <div class="form-group">
                                            <label class="control-label" for="comment">Lisainfo</label>
                                            <textarea v-model="comment" class="form-control"></textarea>
                                        </div>
                                        <div class="form-group" style="margin-bottom: 10px; margin-top: 10px;">
                                            <div class="form-check form-check-inline">
                                                <label class="form-check-label" for="termsAndConditionsAccepted">Nõustun
                                                    <span style="text-decoration: underline;">kasutustingimustega</span>
                                                    *</label>
                                                <input class="form-check-input pink-checkbox" type="checkbox"
                                                    id="termsAndConditionsAccepted" v-model="termsAndConditionsAccepted">
                                            </div>
                                        </div>
                                        <br />

                                        <div class="form-group">
                                            <input @click="submitBookingClicked()" type="submit" value="Kinnita broneering"
                                                class="btn btn-success" />
                                        </div>
                                        <br>
                                        <RouterLink :to="{ name: 'bookingtime', params: { id: id } }" class="nav-link"
                                            active-class="active" style="text-decoration: underline;">Tagasi</RouterLink>
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

<style scoped>
.pink-checkbox:checked {
    background-color: #f8dae2 !important;
    border-color: #f8dae2 !important;
}

.form-check-input:focus {
    box-shadow: 0 0 0 0.1rem #f8dae2 !important;
}

.form-group {
    margin-bottom: 0.75rem;
}
</style>