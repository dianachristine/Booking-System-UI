import httpClient from "@/http-client";
import { useIdentityStore } from "@/stores/identity";
import type { AxiosError } from "axios";
import { IdentityService } from "./IdentityService";
import type { IServiceResult } from "./IServiceResult";

export class BaseService<TEntity> {
    identityStore = useIdentityStore();

    constructor(private path: string) {
    }

    async getAll(): Promise<TEntity[]> {
        try {
            let response = await httpClient.get(`/${this.path}`, {
                headers: {
                    ...httpClient.defaults.headers.common,
                    "Authorization": "bearer " + this.identityStore.$state.response?.token
                }
            });
            console.log(response);

            let res = response.data as TEntity[];
            return res;
        } catch (e) {
            let response = (e as AxiosError).response!;
            if (response.status == 401 && this.identityStore.response) {
                let identityService = new IdentityService();
                let refreshResponse = await identityService.refreshIdentity();
                this.identityStore.$state.response = refreshResponse.data!;
                localStorage.setItem("IJWTResponse", JSON.stringify(refreshResponse.data!));

                if (!this.identityStore.$state.response) return [];


                let response = await httpClient.get(`/${this.path}`, {
                    headers: {
                        ...httpClient.defaults.headers.common,
                        "Authorization": "bearer " + this.identityStore.$state.response?.token
                    }
                });
                console.log(response);

                let res = response.data as TEntity[];
                return res;

            }
        }

        return [];
    }

    async get(id: string): Promise<TEntity> {
        try {
            let response = await httpClient.get(`/${this.path}/${id}`,
                {
                    headers: {
                        ...httpClient.defaults.headers.common,
                        "Authorization": "bearer " + this.identityStore.$state.response?.token
                    }
                }
            );
            console.log(response);
            let res = response.data as TEntity;
            return res;
        } catch (e) {
            let response = (e as AxiosError).response!;
            if (response.status == 401 && this.identityStore.response) {
                let identityService = new IdentityService();
                let refreshResponse = await identityService.refreshIdentity();
                this.identityStore.$state.response = refreshResponse.data!;
                localStorage.setItem("IJWTResponse", JSON.stringify(refreshResponse.data!));

                if (!this.identityStore.$state.response) return {} as TEntity;


                let response = await httpClient.get(`/${this.path}/${id}`,
                    {
                        headers: {
                            ...httpClient.defaults.headers.common,
                            "Authorization": "bearer " + this.identityStore.$state.response?.token
                        }
                    }
                );
                console.log(response);

                let res = response.data as TEntity;
                return res;

            }
        }

        return {} as TEntity;



    }

    async add(entity: TEntity): Promise<IServiceResult<void>> {
        let response;
        try {
            response = await httpClient.post(`/${this.path}`, entity,
                {
                    headers: {
                        ...httpClient.defaults.headers.common,
                        "Authorization": "bearer " + this.identityStore.$state.response?.token
                    }
                }
            );
            console.log(response)
        } catch (e) {
            let res = {
                status: (e as AxiosError).response!.status,
                // errorMsg: (e as AxiosError).response!.data.error,
            }

            if (res.status == 401 && this.identityStore.response) {
                let identityService = new IdentityService();
                let refreshResponse = await identityService.refreshIdentity();
                this.identityStore.$state.response = refreshResponse.data!;
                localStorage.setItem("IJWTResponse", JSON.stringify(refreshResponse.data!));


                response = await httpClient.post(`/${this.path}`, entity,
                    {
                        headers: {
                            ...httpClient.defaults.headers.common,
                            "Authorization": "bearer " + this.identityStore.$state.response?.token
                        }
                    }
                );
                console.log(response);

                return { status: response.status, data: response.data.id };

            }
            return res;
        }

        return { status: response.status, data: response.data.id };
    }

    async edit(entity: TEntity, id: string): Promise<IServiceResult<void>> {
        let response;
        try {
            response = await httpClient.put(`/${this.path}/${id}`, entity,
                {
                    headers: {
                        ...httpClient.defaults.headers.common,
                        "Authorization": "bearer " + this.identityStore.$state.response?.token
                    }
                }
            );
            console.log(response)
        } catch (e) {
            let res = {
                status: (e as AxiosError).response!.status,
                // errorMsg: (e as AxiosError).response!.data.error,
            }

            if (res.status == 401 && this.identityStore.response) {
                let identityService = new IdentityService();
                let refreshResponse = await identityService.refreshIdentity();
                this.identityStore.$state.response = refreshResponse.data!;
                localStorage.setItem("IJWTResponse", JSON.stringify(refreshResponse.data!));


                response = await httpClient.put(`/${this.path}/${id}`, entity,
                    {
                        headers: {
                            ...httpClient.defaults.headers.common,
                            "Authorization": "bearer " + this.identityStore.$state.response?.token
                        }
                    }
                );
                console.log(response);

                return { status: response.status, data: response.data.id };
            }

            return res;
        }

        return { status: response.status };
    }

    async delete(id: string): Promise<IServiceResult<void>> {
        let response;
        try {
            response = await httpClient.delete(`/${this.path}/${id}`,
                {
                    headers: {
                        ...httpClient.defaults.headers.common,
                        "Authorization": "bearer " + this.identityStore.$state.response?.token
                    }
                }
            );
            console.log(response);
        } catch (e) {
            let res = {
                status: (e as AxiosError).response!.status,
                // errorMsg: (e as AxiosError).response!.data.error,
            }
            if (res.status == 401 && this.identityStore.response) {
                let identityService = new IdentityService();
                let refreshResponse = await identityService.refreshIdentity();
                this.identityStore.$state.response = refreshResponse.data!;
                localStorage.setItem("IJWTResponse", JSON.stringify(refreshResponse.data!));


                response = await httpClient.delete(`/${this.path}/${id}`,
                {
                    headers: {
                        ...httpClient.defaults.headers.common,
                        "Authorization": "bearer " + this.identityStore.$state.response?.token
                    }
                }
            );
                console.log(response);

                return { status: response.status, data: response.data.id };
            }
            return res;
        }
        return { status: response.status };
    }
}
