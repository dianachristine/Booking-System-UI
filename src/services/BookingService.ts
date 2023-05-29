import type { IBooking } from "@/domain/IBooking";
import httpCLient from "@/http-client";
import { BaseService } from "./BaseService";

export class BookingService extends BaseService<IBooking> {
    constructor() {
        super("bookings");
    }
}

