import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { IClient } from '@/domain/IClient';

export const useClientsStore = defineStore({
  id: "clients",
  state: () => ({
    clients: [] as IClient[],
    client: null as IClient | null,
  }),
  getters: {
    clientCount: (state) => state.clients.length,
  },
  actions: {
    add(client: IClient) {
      this.clients.push(client);
    },
  },
});
