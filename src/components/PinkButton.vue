<script lang="ts">
import { RouterLink } from 'vue-router';
import { Options, Vue } from "vue-class-component";
import type { IService } from '@/domain/IService';

@Options({
    props: {
        buttonPathName: String,
        buttonText: String,
        onRight: Boolean
    }
})
export default class PinkButton extends Vue {
    buttonPathName!: string
    buttonText!: string
    onRight!: false
}
</script>

<template>
    <button v-if="onRight" type="button" class="btn d-flex mb-4 ms-auto" style="background-color: #fce7ec;">
        <RouterLink :to="{ name: buttonPathName }" class="nav-link" active-class="active" style="text-decoration: none;">
            {{ buttonText }}
        </RouterLink>
    </button>
    <button v-else type="button" class="btn d-flex mb-4" style="background-color: #fce7ec;">
        <RouterLink :to="{ name: buttonPathName }" class="nav-link" active-class="active" style="text-decoration: none;">
            {{ buttonText }}
        </RouterLink>
    </button>
</template>
