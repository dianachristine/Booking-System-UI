export interface IBooking {
    id?: string;
    bookingType?: string;
    from: string;
    to: string;
    fromForClient?: string;
    toForClient?: string;
    //image?: byte[];
    comment?: string;
    serviceId: string;
    serviceName?: string;
    serviceDurationInMinutes?: number;
    beauticianName?: string;
    clientId: string;
    clientFirstName?: string;
    clientLastName?: string;
    workScheduleId: string;
} 