import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { IService } from '@/domain/IService';

export const useServicesStore = defineStore({
  id: "services",
  state: () => ({
    services: [] as IService[],
    service: null as IService | null,
  }),
  getters: {
    serviceCount: (state) => state.services.length,
    serviceCategories: (state) => Array.from(new Set(state.services.map(service => service.categoryName))),
    serviceCategoriesTargetM: (state) => Array.from(new Set(state.services
      .filter(service => service.targetGroup == 'M' || service.targetGroup == 'MN')
      .map(service => service.categoryName))),
    serviceCategoriesTargetN: (state) => Array.from(new Set(state.services
      .filter(service => service.targetGroup == 'N' || service.targetGroup == 'MN')
      .map(service => service.categoryName))),
    publicServices: (state) => state.services.filter(service => service.isPublic),
  },
  actions: {
    add(service: IService) {
      this.services.push(service);
    },
  },
});
