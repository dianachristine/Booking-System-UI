import type { IService } from "@/domain/IService";
import httpCLient from "@/http-client";
import { BaseService } from "./BaseService";
import type { IServiceCategory } from "@/domain/IServiceCategory";

export class ServiceCategoryService extends BaseService<IServiceCategory> {
    constructor() {
        super("servicecategories");
    }
}

