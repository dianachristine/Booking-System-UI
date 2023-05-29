<script lang="ts">
import router from "@/router";
import { IdentityService } from "@/services/IdentityService";
import { useIdentityStore } from "@/stores/identity";
import { Options, Vue } from "vue-class-component";
import { RouterLink } from "vue-router";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

@Options({
    components: {
        VueDatePicker
    },
    props: {},
    emits: [],
})

export default class Register extends Vue {
    textInputOptions = {
        enterSubmit: true,
        tabSubmit: true,
        format: 'dd.MM.yyyy'
    };

    identityStore = useIdentityStore();

    firstName: string | null = null;
    lastName: string | null = null;
    birthday: string | null = null;
    email: string | null = null;
    countryCode: string = "+372";
    phoneNumber: string | null = null;
    password: string | null = null;
    passwordValidation: string | null = null;
    errors: [string] | null = null;

    identityService = new IdentityService();

    format = (birthday: any) => {
        const day = ('0' + birthday.getDate()).slice(-2);
        const month = ('0' + (birthday.getMonth() + 1)).slice(-2);
        const year = birthday.getFullYear();

        return `${day}.${month}.${year}`;
    }


    async registerClicked(): Promise<void> {
        this.errors = null;

        if (
            this.firstName == null || 
            this.lastName == null || 
            this.birthday == null || 
            this.email == null || 
            this.countryCode == null || 
            this.phoneNumber == null || 
            this.password == null ||
            this.passwordValidation == null) {

            this.errors = ["Palun täida kõik väljad"];

        } else {

            if (this.password != this.passwordValidation) {
                this.errors = ["Paroolid on erinevad"];
            } else {
                var birthdayDate: Date = new Date(this.birthday);
                var birthdayString: string = `${birthdayDate.getFullYear()}-${('0' + (birthdayDate.getMonth() + 1)).slice(-2)}-${('0' + birthdayDate.getDate()).slice(-2)}`

                var res = await this.identityService.register(this.firstName, this.lastName, birthdayString, this.email, this.countryCode, this.phoneNumber, this.password);

                this.identityStore.$state.response = res.data!;
                localStorage.setItem("IJWTResponse", JSON.stringify(res.data!));

                if (res.status == 200) router.push('/')
            }
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
                                    <h3>Registreeri</h3>
                                    <hr />

                                    <div v-if="errors != null" class="text-danger validation-summary-errors"
                                        data-valmsg-summary="true">
                                        <ul v-for="error of errors">
                                            <li>{{ error }}</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div class="form-group">
                                            <label class="control-label" for="firstName">Eesnimi *</label>
                                            <input v-model="firstName" class="form-control" type="text" />
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label" for="lastName">Perenimi *</label>
                                            <input v-model="lastName" class="form-control" type="text" />
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label" for="birthday">Sünnikuupäev *</label>
                                            <VueDatePicker v-model="birthday" text-input auto-apply locale="et-ee"
                                                :enable-time-picker="false" :format="format" :text-input-options="textInputOptions">
                                            </VueDatePicker>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label" for="email">E-mail *</label>
                                            <input v-model="email" class="form-control" type="email" />
                                        </div>
                                        <label class="control-label" for="phone">Telefoni number *</label>
                                        <div class="form-group d-flex">
                                            <input v-model="countryCode" class="form-control flex-grow-1" style="width: 4rem"
                                                type="text" />
                                            <input v-model="phoneNumber" class="form-control flex-grow-1" 
                                                type="text"  />
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label" for="password">Parool *</label>
                                            <input v-model="password" class="form-control" type="password" />
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label" for="password">Kinnita parool *</label>
                                            <input v-model="passwordValidation" class="form-control" type="password" />
                                        </div>
                                        <br />
                                        <div class="form-group">
                                            <input @click="registerClicked()" type="submit" value="Registreeri"
                                                style="background-color: #fce7ec;" class="btn" />
                                        </div>
                                    </div>
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

<style>
    .form-group {
    margin-bottom: 0.75rem;
    }
</style>
