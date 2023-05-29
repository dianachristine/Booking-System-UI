<script lang="ts">
import { RouterLink } from 'vue-router';
import { Options, Vue } from "vue-class-component";
import type { IService } from '@/domain/IService';
import ServiceInList from '@/components/service/ServiceInList.vue';

@Options({
    components: {
        ServiceInList
    },
    props: {
        services: [],
        serviceCategories: [],
        targetGroup: String
    }
})
export default class TargetServicesInCategory extends Vue {
    services!: IService[]
    serviceCategories!: string[]
    targetGroup!: string
}
</script>

<template>
    <div class="row pb-3" v-for="category of serviceCategories" :key="category">
        <div class="col-md-12">

            <div class="list-group mb-0">
                <div class="list-group-item" style="background-color: #f8c6d3;">{{ category }}</div>

                <div class="list-group-item" v-for="service of services.filter(service =>
                    service.categoryName === category &&
                    (service.targetGroup == targetGroup || service.targetGroup == 'MN'))" :key="service.id" v>
                    <ServiceInList :service=service></ServiceInList>
                </div>
            </div>
        </div>
    </div>
</template>

