<script lang="ts">
import { RouterLink } from 'vue-router';
import { Options, Vue } from "vue-class-component";
import { useIdentityStore } from "@/stores/identity";
import { useBookingStore } from '@/stores/booking.js';
import { BookingService } from '@/services/BookingService';
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
export default class UserBookings extends Vue {
    identityStore = useIdentityStore();

    bookingsStore = useBookingStore();
    bookingService = new BookingService();

    async mounted(): Promise<void> {
        this.bookingsStore.$state.bookings = await this.bookingService.getAll();
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
    <template v-if="identityStore.$state.response != null">
        <div style="height: 30px;"></div>
        <br>
        <section class="vh-100% gradient-custom">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col col-xl-10">
                        <div class="card">
                            <div class="card-body p-4">

                                <br />
                                <PinkButton buttonPathName="bookingservices" buttonText="Tee uus broneering"
                                    :onRight="true" />

                                <br />
                                <BookingFilters />

                                <div class="tab-content" id="target-content">

                                    <div class="tab-pane fade show active" id="target-tabs-future" role="tabpanel"
                                        aria-labelledby="target-tab-future">

                                        <div class="row pb-3"  v-for="booking of bookingsStore.bookingsInFuture" :key="booking.id">
                                            <div class="col-md-12">
                                                <div class="list-group mb-0">
                                                    <div class="list-group-item" >
                                                        <RouterLink
                                                            :to="{ name: 'userbookinginfo', params: { id: booking.id } }"
                                                            style="text-decoration: none; color:#191919">
                                                            <b>{{ booking.serviceName }}</b>
                                                            <br/>
                                                            {{ getLocalDate(booking.fromForClient!) }}, &nbsp; {{ getLocalTime(booking.fromForClient!) }} - {{ getLocalTime(booking.toForClient!) }}
                                                          
                                                            <span v-if="identityStore.$state.response.isBeautician" class="text-muted float-end">
                                                            Aeg kokku: &nbsp; {{ getLocalTime(booking.from) }} - {{ getLocalTime(booking.to) }}
                                                            </span>
                                                            <br>
                                                            <span v-if="identityStore.$state.response.isBeautician">
                                                                Klient: {{ booking.clientFirstName }} {{ booking.clientLastName }}
                                                            </span>
                                                        </RouterLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div v-if="bookingsStore.bookingsInFuture.length == 0">
                                            Tulevasi broneeringuid pole.
                                        </div>
                                    </div>

                                    <div class="tab-pane fade show" id="target-tabs-past" role="tabpanel"
                                        aria-labelledby="target-tab-past">

                                        <div class="row pb-3"  v-for="booking of bookingsStore.bookingsInPast" :key="booking.id">
                                            <div class="col-md-12">
                                                <div class="list-group mb-0">
                                                    <div class="list-group-item" >
                                                        <RouterLink
                                                            :to="{ name: 'userbookinginfo', params: { id: booking.id } }"
                                                            style="text-decoration: none; color:#191919">
                                                            <b>{{ booking.serviceName }}</b>
                                                            <br>
                                                            {{ getLocalDate(booking.fromForClient!) }}, &nbsp; {{ getLocalTime(booking.fromForClient!) }} - {{ getLocalTime(booking.toForClient!) }}

                                                            <span v-if="identityStore.$state.response.isBeautician" class="text-muted float-end">
                                                            Aeg kokku: &nbsp; {{ getLocalTime(booking.from) }} - {{ getLocalTime(booking.to) }}
                                                            </span>
                                                            <br>
                                                            <span v-if="identityStore.$state.response.isBeautician">
                                                                Klient: {{ booking.clientFirstName }} {{ booking.clientLastName }}
                                                            </span>
                                                        </RouterLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div v-if="bookingsStore.bookingsInPast.length == 0">
                                            Varasemaid broneeringuid pole.
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
