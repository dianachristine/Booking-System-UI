<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { useServicesStore } from '@/stores/services.js';
import { ServiceService } from '@/services/ServiceService';

@Options({
    components: {
    },
    props: {
        id: String,
        date: String,
        time: String
    },
    emits: []
})
export default class BookingConfirmation extends Vue {
    id!: string;
    date!: string;
    dateFormatted: string | null = null;
    time!: string;
    serviceStartTimeForClientLocal: Date | null = null;
    selectedTimeInEstonianTime: string = "";

    servicesStore = useServicesStore();
    serviceService = new ServiceService();

    async created(): Promise<void> {
        this.servicesStore.$state.service = await this.serviceService.get(this.id);
    }

    mounted(): void {
        let localDateTimeString = `${this.date}T${this.time}:00`
        this.serviceStartTimeForClientLocal = new Date(localDateTimeString);
        this.selectedTimeInEstonianTime = this.serviceStartTimeForClientLocal.toLocaleTimeString("et-EE", { timeZone: "Europe/Tallinn" }).slice(0, -3)

        const dateDate = new Date(this.date);
        this.dateFormatted = `${('0' + dateDate.getDate()).slice(-2)}.${('0' + (dateDate.getMonth() + 1)).slice(-2)}.${dateDate.getFullYear()}`;
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
                                <div class="col-md-3"></div>
                                <div class="col-md-6">
                                    <br>
                                    <br>
                                    <br>
                                    <div style="text-align:center;">
                                        <h3>Aitäh! Teie broneering on kinnitatud. </h3>
                                        <br>
                                        <br>
                            
                                        <h5>Valitud teenus: {{ servicesStore.service?.serviceName }}</h5>
                                        <h6>Kuupäev ja kellaeg: {{ dateFormatted }}, {{ selectedTimeInEstonianTime }}</h6>
                                        <br>

                                        <br>
                                        <br>
                                        <br>
                                        <br>
                                    </div>

                                    <br>
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
 