
import { apiServices } from "@/services/ApiServices";
import { defineStore } from "pinia";

export let useLoginStore = defineStore('login', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    loading: false,
    error: ''
  }),

  actions: {
    async initialize(payload) {
      if (this.token) return;
      await this.login(payload);
    },

    async login(payload) {
      try {
        this.loading = true;
        let loggedIn = await apiServices.auth.login(payload);
        if (loggedIn && loggedIn.data && loggedIn.data.token) {
          this.token = loggedIn.data.token;
          localStorage.setItem('token', this.token);
        }
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    }

  }
})
