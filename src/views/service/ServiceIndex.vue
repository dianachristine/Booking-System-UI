<script lang="ts">
import { RouterLink } from 'vue-router';
import { Options, Vue } from "vue-class-component";
import { useIdentityStore } from "@/stores/identity";
import { useServicesStore } from '@/stores/services.js';
import { ServiceService } from '@/services/ServiceService';
import ServiceFilters from '@/components/service/ServiceFilters.vue';
import TargetServicesInCategory from '@/components/service/TargetServicesInCategory.vue';
import ServiceInList from '@/components/service/ServiceInList.vue';
import PinkButton from '@/components/PinkButton.vue';

@Options({
    components: {
        ServiceFilters,
        PinkButton,
        TargetServicesInCategory,
        ServiceInList
    },
    props: {},
    emits: []
})
export default class ServiceIndex extends Vue {
    identityStore = useIdentityStore();

    servicesStore = useServicesStore();
    ServiceService = new ServiceService();

    async mounted(): Promise<void> {
        console.log("mounted");
        this.servicesStore.$state.services = await this.ServiceService.getAll();
    }
}
</script>

<template>
    <template v-if="identityStore.$state.response != null && identityStore.$state.response.isBeautician">
        <div style="height: 30px;"></div>
        <br>
        <section class="vh-100% gradient-custom">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col col-xl-10">
                        <div class="card">
                            <div class="card-body p-4">

                                <PinkButton buttonPathName="servicecreate" buttonText="Lisa uus teenus" :onRight="true" />
                                <PinkButton buttonPathName="categoryindex" buttonText="Muuda kategooriaid"
                                    :onRight="true" />

                                <ServiceFilters />

                                <div class="tab-content" id="target-content">
                                    <div class="tab-pane fade show active" id="target-tabs-all" role="tabpanel"
                                        aria-labelledby="target-tab-all">

                                        <!--<TargetServicesInCategory :services="servicesStore.services" :serviceCategories="servicesStore.serviceCategories" targetGroup="MN" ></TargetServicesInCategory>-->

                                        <div class="row pb-3" v-for="category of servicesStore.serviceCategories"
                                            :key="category">
                                            <div class="col-md-12">

                                                <div class="list-group mb-0">
                                                    <div class="list-group-item" style="background-color: #f8c6d3;">{{
                                                        category
                                                    }}</div>

                                                    <div class="list-group-item"
                                                        v-for="service of servicesStore.services.filter(service => service.categoryName === category)"
                                                        :key="service.id" >

                                                        <template v-if="service.isPublic">
                                                            <ServiceInList :service=service servicePath="servicedetails"
                                                            :idParam=service.id showDescription=true></ServiceInList>
                                                        </template>
                                                        <template v-else>
                                                            <RouterLink :to="{ name: 'servicedetails', params: { id: service.id } }" style="text-decoration: none; color:#b9bdc0">
                                                                {{ service.serviceName }}
                                                                <br>
                                                                <small style="color:#b9bdc0">{{ service.description }}</small>
                                                                <br> {{ service.serviceDurationInMinutes }} min
                                                            </RouterLink>
                                                            <span class="float-end" style="color:#b9bdc0">{{ service.finalPrice }}{{ service.currency }}</span>
                                                        </template>

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
                                                    <div class="list-group-item" style="background-color: #f8c6d3;">{{
                                                        category
                                                    }}</div>

                                                    <div class="list-group-item" v-for="service of servicesStore.services.filter(service =>
                                                        service.categoryName === category &&
                                                        (service.targetGroup == 'N' || service.targetGroup == 'MN'))"
                                                        :key="service.id">

                                                        <template v-if="service.isPublic">
                                                            <ServiceInList :service=service servicePath="servicedetails"
                                                            :idParam=service.id showDescription=true></ServiceInList>
                                                        </template>
                                                        <template v-else>
                                                            <RouterLink :to="{ name: 'servicedetails', params: { id: service.id } }" style="text-decoration: none; color:#b9bdc0">
                                                                {{ service.serviceName }}
                                                                <br>
                                                                <small style="color:#b9bdc0">{{ service.description }}</small>
                                                                <br> {{ service.serviceDurationInMinutes }} min
                                                            </RouterLink>
                                                            <span class="float-end" style="color:#b9bdc0">{{ service.finalPrice }}{{ service.currency }}</span>
                                                        </template>

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
                                                    <div class="list-group-item" style="background-color: #f8c6d3;">{{
                                                        category
                                                    }}</div>

                                                    <div class="list-group-item" v-for="service of servicesStore.services.filter(service =>
                                                        service.categoryName === category &&
                                                        (service.targetGroup == 'M' || service.targetGroup == 'MN'))"
                                                        :key="service.id" >

                                                        <template v-if="service.isPublic">
                                                            <ServiceInList :service=service servicePath="servicedetails"
                                                            :idParam=service.id showDescription=true></ServiceInList>
                                                        </template>
                                                        <template v-else>
                                                            <RouterLink :to="{ name: 'servicedetails', params: { id: service.id } }" style="text-decoration: none; color:#b9bdc0">
                                                                {{ service.serviceName }}
                                                                <br>
                                                                <small style="color:#b9bdc0">{{ service.description }}</small>
                                                                <br> {{ service.serviceDurationInMinutes }} min
                                                            </RouterLink>
                                                            <span class="float-end" style="color:#b9bdc0">{{ service.finalPrice }}{{ service.currency }}</span>
                                                        </template>

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
    <template v-else><div style="height: 50px;"></div></template>
</template>
