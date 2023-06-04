<script lang="ts">
import { IdentityService } from "@/services/IdentityService";
import { useIdentityStore } from "@/stores/identity";
import { RouterLink } from 'vue-router';
import { Options, Vue } from "vue-class-component";

@Options({
    components: {
    }
})
export default class Header extends Vue {
    identityStore = useIdentityStore();

    identityService = new IdentityService();

    async logoutClicked(): Promise<void> {
        this.identityService.logout();
    }
}
</script>

<template>
    <header>
        <!-- Navbar -->
        <nav class="container-fluid navbar navbar-expand-lg navbar-light bg-white fixed-top">
            <div class="container-fluid">
                <RouterLink to="/" class="navbar-brand" active-class="active" style="background-image: url('/logo_small.png');
                                        background-size: contain; background-repeat: no-repeat;background-position: center;text-decoration: none;">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </RouterLink>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        &nbsp;&nbsp;
                        <template
                            v-if="identityStore.$state.response != null && identityStore.$state.response.isBeautician">
                            <li class="nav-item">
                                <RouterLink to="/minutoograafik" class="nav-link" active-class="active">Töögraafik
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/minubroneeringud" class="nav-link" active-class="active">Broneeringud
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/minuteenused" class="nav-link" active-class="active">Teenused
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/minukliendid" class="nav-link" active-class="active">Kliendid
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/minusalong" class="nav-link" active-class="active">Salong</RouterLink>
                            </li>
                        </template>
                        <template v-else>
                            <li class="nav-item">
                                <RouterLink to="/broneering/teenused" class="nav-link" active-class="active">Teenused</RouterLink>
                            </li>
                         <!--   <li class="nav-item">
                                <RouterLink to="/meist" class="nav-link" active-class="active">Salongist</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/kontakt" class="nav-link" active-class="active">Kontakt</RouterLink>
                            </li>-->
                        </template>
                    </ul>
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <template v-if="identityStore.$state.response == null">
                            <li class="nav-item">
                                <RouterLink to="/registreeri" class="nav-link" active-class="active">Registreeri
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/login" class="nav-link" active-class="active">Logi sisse</RouterLink>
                            </li>
                        </template>
                        <template v-else>
                            <li v-if="!identityStore.$state.response.isBeautician" class="nav-item">
                                <RouterLink to="/minubroneeringud" class="nav-link" active-class="active">Minu broneeringud
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/" @click="logoutClicked()" class="nav-link" active-class="active">Logi
                                    välja</RouterLink>
                            </li>
                        </template>
                    </ul>
                </div>
            </div>
    </nav>
    <!-- Navbar -->
</header></template>
