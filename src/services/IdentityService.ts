import type { IJWTResponse } from "@/domain/IJWTResponse";
import httpCLient from "@/http-client";
import { useIdentityStore } from "@/stores/identity";
import type { AxiosError } from "axios";
import { data } from "jquery";
import type { IServiceResult } from "./IServiceResult";

export class IdentityService {
    identityStore = useIdentityStore();

    async login(email: string, password: string): Promise<IServiceResult<IJWTResponse>> {
        try {
            let loginInfo = {
                email,
                password
            }
            let response = await httpCLient.post("/identity/account/login", loginInfo);
            return {
                status: response.status,
                data: response.data as IJWTResponse
            };

        } catch (e) {
            let response = {
                status: (e as AxiosError).response!.status,
              //  errors: (e as AxiosError).response!.data.errors,
            }

            console.log(response);

            console.log((e as AxiosError).response);

            return response;
        }
    }

    async register(
        firstName: string, 
        lastName: string, 
        birthday: string, 
        email: string, 
        countryCode: string, 
        phoneNumber: string, 
        password: string): Promise<IServiceResult<IJWTResponse>> {
        try {
            let registerInfo = {
                email: email,
                countryCode: countryCode,
                phoneNumber: phoneNumber,
                birthday: birthday,
                firstName: firstName,
                lastName: lastName,
                password: password
            }
            
            let response = await httpCLient.post("/identity/account/register", registerInfo);
            return {
                status: response.status,
                data: response.data as IJWTResponse
            };

        } catch (e) {
            let response = {
                status: (e as AxiosError).response!.status,
             //   errors: (e as AxiosError).response!.data.errors,
            }

            console.log(response);

            console.log((e as AxiosError).response);

            return response;
        }
    }

    async refreshIdentity(): Promise<IServiceResult<IJWTResponse>> {
        try {
            console.log(this.identityStore.$state.response);

            let response = await httpCLient.post("/identity/account/refreshtoken",
                {
                    jwt: this.identityStore.$state.response?.token,
                    refreshToken: this.identityStore.$state.response?.refreshToken
                }
            );
            
            return {
                status: response.status,
                data: response.data as IJWTResponse
            };

        } catch (e) {
            let response = {
                status: (e as AxiosError).response!.status,
             //   errorMsg: (e as AxiosError).response!.data.error,
            }

            console.log(response);

            console.log((e as AxiosError).response);

            return response;
        }
    }

    async logout(): Promise<IServiceResult<Object>> {
        
        try {
            let logoutInfo = {
                refreshToken: this.identityStore.$state.response?.refreshToken
            }
            let response = await httpCLient.post("/identity/account/logout", logoutInfo,
                {
                    headers: {
                        "Authorization": "bearer " + this.identityStore.$state.response?.token
                    }
                });

            this.identityStore.$state.response = null;
            localStorage.removeItem("IJWTResponse");

            return {
                status: response.status
            };

        } catch (e) {
            let response = {
                status: (e as AxiosError).response!.status,
            //    errors: (e as AxiosError).response!.data.errors,
            }

            if (response.status == 401) {
                // TODO refresh identity first
                this.identityStore.$state.response = null;
                localStorage.removeItem("IJWTResponse");
            }

            console.log(response);

            console.log((e as AxiosError).response);

            return response;
        }
    }
}

