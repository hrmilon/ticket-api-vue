import { defineStore } from "pinia";
import { apiServices } from "@/services/ApiServices";

export let useTicketsStore = defineStore('ticket-pls', {
  state: () => ({
    tickets: [],
    loading: false,
    hateos: [],
    totalTicket: null
  }),

  actions: {
    async initialize() {
      if (this.tickets.length) return;
      await this.fetchTickets();
    },

    async fetchTickets() {
      let ticket = await apiServices.tickets.getTickets();
      this.$state.totalTicket = ticket.meta.total
      // console.log(ticket.meta.total);

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
    },

    getTotalTicket(state) {
      return state.totalTicket;
    }
  }
})
