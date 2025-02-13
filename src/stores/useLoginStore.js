/* eslint-disable no-unused-vars */
import { apiServices } from "@/services/ApiServices";
import { defineStore } from "pinia";

export let useLoginStore = defineStore('login', {
  state: () => ({
    token: null,
    loading: false
  }),

  actions: {
    async initialize(payload) {
      if (this.token) return;
      // console.log(payload);
      await this.login(payload);
    },

    async login(payload) {
      this.loading = true;
      let loggedIn = await apiServices.auth.login(payload);
      console.log(loggedIn);
    }

  }
})
