<script lang="ts">
import { RouterLink } from 'vue-router';
import { Options, Vue } from "vue-class-component";

@Options({
    components: {

    },
    props: {
        infoType: String,
        infoString: String,
        infoNumber: Number
    }
})
export default class InfoRow extends Vue {
    infoType!: string
    infoString!: string
    infoNumber!: number
}
</script>

<template>
    <dt class="col-sm-6">
        {{ infoType }}
    </dt>
    <dd class="col-sm-6">
        <div v-if="infoString">{{ infoString }}</div>
        <div v-else-if="infoNumber">{{ infoNumber }}</div>
        <div v-else>-</div>
    </dd>
</template>

