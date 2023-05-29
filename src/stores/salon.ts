import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { ISalon } from '@/domain/ISalon';

export const useSalonStore = defineStore({
  id: "salon",
  state: () => ({
    salon: null as ISalon | null,
  }),
  getters: {
  },
  actions: {
    add(salon: ISalon) {
      this.salon = salon;
    },
  },
});
