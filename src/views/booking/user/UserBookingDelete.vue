<script lang="ts">
import { RouterLink } from 'vue-router';
import { Options, Vue } from "vue-class-component";
import { useIdentityStore } from "@/stores/identity";
import { useBookingStore } from '@/stores/booking.js';
import { BookingService } from '@/services/BookingService';
import InfoRow from '@/components/InfoRow.vue';

@Options({
    components: {
        InfoRow
    },
    props: {
        id: String
    },
    emits: []
})
export default class UserBookingDelete extends Vue {
    id!: string;

    errors: [string] | null = null;

    identityStore = useIdentityStore();

    bookingStore = useBookingStore();
    bookingService = new BookingService();

    async mounted(): Promise<void> {
        this.bookingStore.$state.booking = await this.bookingService.get(this.id);
    }

    getLocalDate(isoDateStr: string): string {
        const dateDate = new Date(isoDateStr);
        return `${('0' + dateDate.getDate()).slice(-2)}.${('0' + (dateDate.getMonth() + 1)).slice(-2)}.${dateDate.getFullYear()}`;
    }

    getLocalTime(isoDateStr: string): string {
        let serviceStartTimeForClientLocal = new Date(isoDateStr);
        return serviceStartTimeForClientLocal.toLocaleTimeString("et-EE", { timeZone: "Europe/Tallinn" }).slice(0, -3);
    }

    getUtcNowPlus24Hours() {
        const now = new Date();
        const nowMinus24h = new Date(now.getTime() + 24 * 60 * 60 * 1000);
        return nowMinus24h.toISOString().substring(0, 20) + '000Z';
    }

    async deleteClicked(): Promise<void> {
        var res = await this.bookingService.delete(this.id);

        if (res.status >= 300) {
            this.errors = [res.status + ' ' + res.errorMsg];
        } else {
           // this.bookingStore.$state.bookings =
             //   await this.bookingService.getAll();

            this.$router.push('/minubroneeringud');
        }
    }
}
</script>

<template>
    <template v-if="identityStore.$state.response != null">
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
                                        <template v-if="bookingStore.booking">
                                            <h3>Tühista broneering - {{ bookingStore.booking.serviceName }}?</h3>
                                            <hr />

                                            <dl class="row">
                                                <InfoRow infoType="Kuupäev"
                                                    :infoString="getLocalDate(bookingStore.booking.fromForClient!)" />
                                                <InfoRow infoType="Kellaeg"
                                                    :infoString="getLocalTime(bookingStore.booking.fromForClient!) + ' - ' + getLocalTime(bookingStore.booking.toForClient!)" />
                                                <InfoRow infoType="Kestus"
                                                    :infoString="bookingStore.booking.serviceDurationInMinutes + ' min'" />
                                                <InfoRow infoType="Lisainfo" :infoString="bookingStore.booking.comment" />
                                            </dl>
                                            <br />
                                            <div>
                                                <div class="form-group">
                                                    <input @click="deleteClicked()" type="submit" value="Jah, tühista"
                                                        class="btn btn-danger" />
                                                </div>
                                                <br/>
                                                <RouterLink to="/minubroneeringud" class="nav-link" active-class="active"
                                                    style="text-decoration: underline;">Tagasi</RouterLink>
                                            </div>
                                            <br>
                                        </template>
                                        <div v-else>
                                            <i class="fa fa-spinner fa-spin"></i> Laeb...
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
  