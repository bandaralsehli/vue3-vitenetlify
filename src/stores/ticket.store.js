import { defineStore } from "pinia";
import router from "@/router";
import { useAlertStore } from "@/stores";

export const useTicketStore = defineStore({
  id: "ticket",
  state: () => ({

    ticket: [],
    loading: false,
    error: null
  }),

  getters: {
    getTicketsPerAuthor: (state) => {
      return (state) => state.ticket.filter((ticket) => ticket.userId === authorId)
    },

  },

  actions: {
    async fetchTickets() {

      this.loading = true
      try {
        this.ticket = await fetch('https://parseapi.back4app.com/classes/ticket',
        {
          method: "Get",
          headers: {
            accept: "application/json",
            "X-Parse-Application-Id":
              "faefaVxc667rBCJfBWerLVgwbN8ymX1S9CkceSjh",
            "X-Parse-REST-API-Key":
              "T0Ag23ExRe6UtCQb9KtD7mPFMjtatgWxhUwyZZRI",

          },
        }
      ).then((response) => response.json())

      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async fetchTicket(id) {
      this.ticket = null
      this.loading = true
      try {
        this.ticket =  await fetch('https://parseapi.back4app.com/classes/ticket',
        {
          method: "Get",
          headers: {
            accept: "application/json",
            "X-Parse-Application-Id":
              "faefaVxc667rBCJfBWerLVgwbN8ymX1S9CkceSjh",
            "X-Parse-REST-API-Key":
              "T0Ag23ExRe6UtCQb9KtD7mPFMjtatgWxhUwyZZRI",

          },
        }
      ).then((response) => response.json())
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    }
  }
})