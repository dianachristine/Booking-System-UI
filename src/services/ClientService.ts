import httpCLient from "@/http-client";
import { BaseService } from "./BaseService";
import type { IClient } from "@/domain/IClient";

export class ClientService extends BaseService<IClient> {
    constructor() {
        super("clients");
    }
}

