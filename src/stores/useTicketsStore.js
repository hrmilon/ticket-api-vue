import { defineStore } from "pinia";
import { apiServices } from "@/services/ApiServices";

export let useTicketsStore = defineStore('ticket-pls', {
  state: () => ({
    tickets: [],
    loading: false,
    hateos: [],
    totalTicket: null,
    pageTrack: 1,
    queryParams: '',
    filterTrack: 1
  }),

  actions: {
    async initialize(page) {
      if (this.tickets.length) return;
      await this.fetchTickets(page);
    },

    async fetchTickets() {
      if (this.queryParams) {
        this.makeBlank()
        let ticket = await apiServices.tickets.getTickets(this.filterTrack + `&${this.queryParams}`);

        this.$state.tickets = [...this.tickets, ...ticket.data]
        this.filterTrack++
        return this.tickets;
      }

      else {
        let ticket = await apiServices.tickets.getTickets(this.pageTrack);
        //return total tickets
        this.$state.totalTicket = ticket.meta.total

        this.tickets = [...this.tickets, ...ticket.data]
        this.pageTrack++
        return this.tickets;
      }

      // {
      //   let tickets = await apiServices.tickets.getTicketsFilter(param)
      //   return this.$state.tickets = tickets.data
      // }
    },

    async fetchTicketsQueryString(param, pageCount) {

      this.$state.queryParams = param;

      let tickets = await apiServices.tickets.getTicketsFilter(param)
      return this.$state.tickets = tickets.data

      // filter[status]=X?page=2
      // let paramwithPage = `${param}?page=${pageCount}`
      // let tickets = await apiServices.tickets.getTicketsFilter(paramwithPage)
      // return this.$state.tickets = tickets.data

    },

    makeBlank() {
      this.tickets = [],
        this.pageTrack = 1
    }
  },
  getters: {
    getTickets(state) {
      return state.tickets;
    },

    getTotalTicket(state) {
      return state.totalTicket;
    },

    getQueryString(state) {
      return state.queryParams
    }
  }
})
