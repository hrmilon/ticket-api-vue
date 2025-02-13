import { defineStore } from "pinia";
import { apiServices } from "@/components/tickets/ApiServices";

export let useTicketsStore = defineStore('ticket-pls', {
  state: () => ({
    tickets: [],
    loading: false
  }),

  actions: {
    async initialize() {
      if (this.tickets.length) return;
      await this.fetchTickets();
    },

    async fetchTickets() {
      let ticket = await apiServices.test.get();
      return this.tickets = ticket.data
    },

    check() {
      return this.fetchTickets();
    }
  },
  getters: {
    getTickets(state) {
      return state.tickets;
    }
  }
})
