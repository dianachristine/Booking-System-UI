export interface IService {
    id?: string;
    serviceName: string;
    description?: string;
    targetGroup: string;
    serviceDurationInMinutes: number;
    preparationTimeInMinutes: number;
    cleaningTimeInMinutes: number;
    comment?: string,
    amount: number,
    currency: string,
    discountName?: string,
    discountPercent?: number,
    finalPrice?: string,
    beauticianId?: string,
    salonId: string,
    serviceCategoryId: string,
    categoryName?: string,
    categoryDescription1?: string,
    categoryDescription2?: string,
    isPublic: boolean,
}
