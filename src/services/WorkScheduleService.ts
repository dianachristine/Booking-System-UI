import httpClient from "@/http-client";
import type { IWorkSchedule } from "@/domain/IWorkSchedule";
import { BaseService } from "./BaseService";
import type { AxiosError } from "axios";

export class WorkScheduleService extends BaseService<IWorkSchedule> {

    constructor() {
        super("workschedules");
    }

    async getAvailabletimes(year: number, month: number, serviceId: string): Promise<IWorkSchedule[]> {

        let response = await httpClient.get(`/workschedules/availabletimes/${year}/${month}/${serviceId}`, {
            headers: {
                ...httpClient.defaults.headers.common,
                "Authorization": "bearer " + this.identityStore.$state.response?.token
            }
        });
        console.log(response);

        let res = response.data as IWorkSchedule[];
        return res;

    }
}
