<script lang="ts">
import router from "@/router";
import { IdentityService } from "@/services/IdentityService";
import { useIdentityStore } from "@/stores/identity";
import { Options, Vue } from "vue-class-component";
import { RouterLink } from "vue-router";

@Options({
    components: {
    },
    props: {},
    emits: [],
})
export default class Login extends Vue {
    identityStore = useIdentityStore();

    email: string | null = null;
    password: string | null = null;
    errors: [string] | null = null;


    identityService = new IdentityService();

    async loginClicked(): Promise<void> {
        this.errors = null;
        if (this.email == null || this.password == null) {
            this.errors = ["Palun täida kõik väljad"];

        } else {
            var res = await this.identityService.login(this.email, this.password);

            this.identityStore.$state.response = res.data!;
            localStorage.setItem("IJWTResponse", JSON.stringify(res.data!));

            if (res.status == 200) router.push('/')
        }
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
                                <div class="col-md-2"></div>
                                <div class="col-md-8">
                                    <h3>Logi sisse</h3>
                                    <hr />

                                    <div v-if="errors != null" class="text-danger validation-summary-errors"
                                        data-valmsg-summary="true">
                                        <ul v-for="error of errors">
                                            <li>{{ error }}</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div class="form-group" required="true">
                                            <label class="control-label" for="FirstName" required="true">E-mail *</label>
                                            <input v-model="email" class="form-control" type="email" required="true" maxlength="128"/>
                                        </div>
                                        <div class="form-group" required>
                                            <label class="control-label" for="LastName" required>Parool *</label>
                                            <input v-model="password" class="form-control" type="password" required />
                                        </div>
                                        <br/>
                                        <div class="form-group" >
                                            <input @click="loginClicked" type="submit" value="Logi sisse" style="background-color: #fce7ec;" class="btn" />           
                                        </div>                                      
                                        <br/>
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

<style>
    .form-group {
    margin-bottom: 0.75rem;
    }
</style>
