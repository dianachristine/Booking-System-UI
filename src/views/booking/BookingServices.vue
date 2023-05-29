<script lang="ts">
import { RouterLink } from 'vue-router';
import { Options, Vue } from "vue-class-component";
import { useServicesStore } from '@/stores/services.js';
import { ServiceService } from '@/services/ServiceService';
import ServiceFilters from '@/components/service/ServiceFilters.vue';
import TargetServicesInCategory from '@/components/service/TargetServicesInCategory.vue';
import ServiceInList from '@/components/service/ServiceInList.vue';

@Options({
    components: {
        ServiceFilters,
        TargetServicesInCategory,
        ServiceInList
    },
    props: {},
    emits: []
})
export default class BookingServices extends Vue {
    id: string = '';

    servicesStore = useServicesStore();
    ServiceService = new ServiceService();

    async mounted(): Promise<void> {
        console.log("mounted");
        this.servicesStore.$state.services =
            await this.ServiceService.getAll();
    }
}
</script>

<template>
    <div style="height: 30px;"></div>
    <br>
    <section class="vh-100% gradient-custom">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col col-xl-10">
                    <div class="card">
                        <div class="card-body p-4">

                            <ServiceFilters />

                            <div class="tab-content" id="target-content">
                                <div class="tab-pane fade show active" id="target-tabs-all" role="tabpanel"
                                    aria-labelledby="target-tab-all">

                                    <!--<TargetServicesInCategory :services="servicesStore.services" :serviceCategories="servicesStore.serviceCategories" targetGroup="MN" ></TargetServicesInCategory>-->

                                    <div class="row pb-3" v-for="category of servicesStore.serviceCategories"
                                        :key="category">
                                        <div class="col-md-12">

                                            <div class="list-group mb-0">
                                                <div class="list-group-item" style="background-color: #f8c6d3;">{{ category
                                                }}</div>

                                                <div class="list-group-item"
                                                    v-for="service of servicesStore.services.filter(service => 
                                                    service.categoryName === category && service.isPublic)"
                                                    :key="service.id" v>
                                                    <ServiceInList :service=service servicePath="bookingtime" :idParam=service.id></ServiceInList>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="target-tabs-n" role="tabpanel"
                                    aria-labelledby="target-tab-n">
                                    <div class="row pb-3" v-for="category of servicesStore.serviceCategoriesTargetN"
                                        :key="category">
                                        <div class="col-md-12">

                                            <div class="list-group mb-0">
                                                <div class="list-group-item" style="background-color: #f8c6d3;">{{ category
                                                }}</div>

                                                <div class="list-group-item" v-for="service of servicesStore.services.filter(service =>
                                                    service.categoryName === category && service.isPublic &&
                                                    (service.targetGroup == 'N' || service.targetGroup == 'MN'))"
                                                    :key="service.id" v>
                                                    <ServiceInList :service=service servicePath="bookingtime" :idParam=service.id></ServiceInList>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="target-tabs-m" role="tabpanel"
                                    aria-labelledby="target-tab-m">
                                    <div class="row pb-3" v-for="category of servicesStore.serviceCategoriesTargetM"
                                        :key="category">
                                        <div class="col-md-12">

                                            <div class="list-group mb-0">
                                                <div class="list-group-item" style="background-color: #f8c6d3;">{{ category
                                                }}</div>

                                                <div class="list-group-item" v-for="service of servicesStore.services.filter(service =>
                                                    service.categoryName === category && service.isPublic &&
                                                    (service.targetGroup == 'M' || service.targetGroup == 'MN'))"
                                                    :key="service.id" v>
                                                    <ServiceInList :service=service servicePath="bookingtime" :idParam=service.id></ServiceInList>
                                                </div>
                                            </div>
                                        </div>
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
