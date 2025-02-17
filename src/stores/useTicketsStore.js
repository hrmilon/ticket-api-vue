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
    async initialize(page) {
      if (this.tickets.length) return;
      await this.fetchTickets(page);
    },

    async fetchTickets(page) {
      let ticket = await apiServices.tickets.getTickets(page);
      //return total tickets
      this.$state.totalTicket = ticket.meta.total
      //assigning fetched ticket to state=>ticket
      // this.tickets = ticket.data

      // const existingIds = new Set(this.tickets.map(t => t.id));
      // const newTickets = ticket.data.filter(t => !existingIds.has(t.id));

      this.tickets = [...this.tickets, ...ticket.data]
      return this.tickets;
      // this.hateos = ticket.links;
      // console.log(ticket.meta.total);
    },

  },
  getters: {
    getTickets(state) {
      return state.tickets;
    },

    // getHateos(state) {
    //   return state.hateos;
    // },

    getTotalTicket(state) {
      return state.totalTicket;
    }
  }
})
