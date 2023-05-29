import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { IWorkSchedule } from '@/domain/IWorkSchedule';

export const useWorkSchedulesStore = defineStore({
  id: "workschedules",
  state: () => ({
    workSchedules: [] as IWorkSchedule[],
    availableTimes: [] as IWorkSchedule[],
    workSchedule: null as IWorkSchedule | null,
  }),
  getters: {
    workSchedulesCount: (state) => state.workSchedules.length,
    workSchedulesInFuture: (state) => state.workSchedules.filter(workschedule => workschedule.from > new Date().toISOString()).sort((a,b) => (a.from > b.from) ? 1 : -1 ),
    workSchedulesInPast: (state) => state.workSchedules.filter(workschedule => workschedule.from <= new Date().toISOString()),
  },
  actions: {
    add(workSchedule: IWorkSchedule) {
      this.workSchedules.push(workSchedule);
    },
  },
});
