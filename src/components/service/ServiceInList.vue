<script lang="ts">
import { RouterLink } from 'vue-router';
import { Options, Vue } from "vue-class-component";
import type { IService } from '@/domain/IService';

@Options({
    props: {
        service: Object,
        showDescription: Boolean,
        servicePath: String,
        idParam: String
    }
})
export default class ServiceInList extends Vue {
    service!: IService
    showDescription!: false
    servicePath: string | undefined;
    idParam: string | undefined;
}
</script>

<template>
    <div v-if="servicePath">
        <RouterLink :to="{ name: servicePath, params: { id: idParam } }" style="text-decoration: none; color:#191919;">
            {{ service.serviceName }}
            <br v-if="showDescription">
            <small v-if="showDescription" class="text-muted">{{ service.description }}</small>
            <br> {{ service.serviceDurationInMinutes }} min
        </RouterLink>

        <span class="float-end" v-if="service.discountPercent">
            <s>{{ service.amount }}{{ service.currency }}</s>
            &nbsp;
            <b>{{ service.finalPrice }}{{ service.currency }}</b>
        </span>
        <span class="float-end" v-else>
            {{ service.finalPrice }}{{ service.currency }}
        </span>

    </div>
    <div v-else>
        {{ service.serviceName }}
        <br v-if="showDescription">
        <small v-if="showDescription" class="text-muted">{{ service.description }}</small>
        <br> {{ service.serviceDurationInMinutes }} min

        <span class="float-end" v-if="service.discountPercent">
            <s>{{ service.amount }}{{ service.currency }}</s>
            &nbsp;
            <b>{{ service.finalPrice }}{{ service.currency }}</b>
        </span>
        <span class="float-end" v-else>
            {{ service.finalPrice }}{{ service.currency }}
        </span>
        
    </div>
</template>
