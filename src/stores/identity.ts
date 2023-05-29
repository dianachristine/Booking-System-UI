import type { IJWTResponse } from "@/domain/IJWTResponse";
import { defineStore } from "pinia";

export const useIdentityStore = defineStore({
  id: "identity",
  state: () => ({
    response: localStorage.getItem("IJWTResponse")
      ? JSON.parse(localStorage.getItem("IJWTResponse")!)
      : null,
   // response: null as IJWTResponse | null
  }),
  getters: {
  },
  actions: {
  },
});
