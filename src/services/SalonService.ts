import httpClient from "@/http-client";
import { BaseService } from "./BaseService";
import type { ISalon } from "@/domain/ISalon";
import type { IServiceResult } from "./IServiceResult";
import type { AxiosError } from "axios";

export class SalonService extends BaseService<ISalon> {
    constructor() {
        super("salon");
    }

    async getSalon(): Promise<ISalon> {

        let response = await httpClient.get(`/salon`, {
            headers: {
                ...httpClient.defaults.headers.common,
                "Authorization": "bearer " + this.identityStore.$state.response?.token
            }
        });

        let res = response.data as ISalon;
        return res;
    }

    async editSalon(entity: ISalon): Promise<IServiceResult<void>> {
        let response;
        try {
            response = await httpClient.put(`/salon`, entity,
                {
                    headers: {
                        ...httpClient.defaults.headers.common,
                        "Authorization": "bearer " + this.identityStore.$state.response?.token
                    }
                }
            );
        } catch (e) {
            let res = {
                status: (e as AxiosError).response!.status,
               // errorMsg: (e as AxiosError).response!.data.error,
            }
            return res;
        }

        return { status: response.status };
    }
}

