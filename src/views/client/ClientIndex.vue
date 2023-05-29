<script lang="ts">
import { RouterLink } from 'vue-router';
import { Options, Vue } from "vue-class-component";
import { useServicesStore } from '@/stores/services';

@Options({
    components: {
    },
    props: {},
    emits: []
})
export default class ClientIndex extends Vue {

}
</script>

<template>
    <div style="height: 50px;"></div>
    <br>
    <section class="vh-100% gradient-custom">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col col-md-10">
                    <div class="card">
                        <div class="card-body p-4">
                            <div class="col-md-2"></div>
                                Kliendid
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
