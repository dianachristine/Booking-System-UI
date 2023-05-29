import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { IServiceCategory } from '@/domain/IServiceCategory';

export const useCategoriesStore = defineStore({
  id: "categories",
  state: () => ({
    categories: [] as IServiceCategory[],
    category: null as IServiceCategory | null,
  }),
  getters: {
    categoryCount: (state) => state.categories.length,
  },
  actions: {
    add(category: IServiceCategory) {
      this.categories.push(category);
    },
  },
});
