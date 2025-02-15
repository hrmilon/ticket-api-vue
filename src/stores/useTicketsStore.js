import { defineStore } from "pinia";
import { apiServices } from "@/services/ApiServices";

export let useTicketsStore = defineStore('ticket-pls', {
  state: () => ({
    tickets: [],
    loading: false,
    hateos: []
  }),

  actions: {
    async initialize() {
      if (this.tickets.length) return;
      await this.fetchTickets();
    },

    async fetchTickets() {
      let ticket = await apiServices.tickets.getTickets();
      // console.log(ticket.links);
      this.hateos = ticket.links;
      return this.tickets = ticket.data
    },

  },
  getters: {
    getTickets(state) {
      return state.tickets;
    },

    getHateos(state) {
      return state.hateos;
    }
  }
})
