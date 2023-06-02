import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { IService } from '@/domain/IService';
import type { IServiceCategory } from '@/domain/IServiceCategory';

export const useServicesStore = defineStore({
  id: "services",
  state: () => ({
    services: [] as IService[],
    service: null as IService | null,
  }),
  getters: {
    serviceCount: (state) => state.services.length,
   
    serviceCategories: (state) => {
      const uniqueCategories: IServiceCategory[] = [];
      const encounteredCategories: Set<string> = new Set();
    
      for (const service of state.services) {
        if (!encounteredCategories.has(service.categoryName!)) {
          const category: IServiceCategory = {
            categoryName: service.categoryName!,
            description1: service.categoryDescription1,
            description2: service.categoryDescription2,
          };
          uniqueCategories.push(category);
          encounteredCategories.add(service.categoryName!);
        }
      }
    
      return uniqueCategories;
    },
    serviceCategoriesTargetM: (state) => {
      const uniqueCategories: IServiceCategory[] = [];
      const encounteredCategories: Set<string> = new Set();
    
      for (const service of state.services) {
        if ((service.targetGroup === 'M' || service.targetGroup === 'MN') && !encounteredCategories.has(service.categoryName!)) {
          const category: IServiceCategory = {
            categoryName: service.categoryName!,
            description1: service.categoryDescription1,
            description2: service.categoryDescription2,
          };
          uniqueCategories.push(category);
          encounteredCategories.add(service.categoryName!);
        }
      }
    
      return uniqueCategories;
    },
    serviceCategoriesTargetN: (state) => {
      const uniqueCategories: IServiceCategory[] = [];
      const encounteredCategories: Set<string> = new Set();
    
      for (const service of state.services) {
        if ((service.targetGroup === 'N' || service.targetGroup === 'MN') && !encounteredCategories.has(service.categoryName!)) {
          const category: IServiceCategory = {
            categoryName: service.categoryName!,
            description1: service.categoryDescription1,
            description2: service.categoryDescription2,
          };
          uniqueCategories.push(category);
          encounteredCategories.add(service.categoryName!);
        }
      }
    
      return uniqueCategories;
    },
    publicServices: (state) => state.services.filter(service => service.isPublic),
  },
  actions: {
    add(service: IService) {
      this.services.push(service);
    },
  },
});
