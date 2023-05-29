import type { IService } from "@/domain/IService";
import httpCLient from "@/http-client";
import { BaseService } from "./BaseService";

export class ServiceService extends BaseService<IService> {
    constructor() {
        super("services");
    }
}

