export interface IWorkSchedule {
    id?: string;
    workScheduleId?: string;
    from: string;
    to: string;
    dayOfWeek?: string;
    comment?: string;
    beauticianId?: string;
    salonId: string;
}