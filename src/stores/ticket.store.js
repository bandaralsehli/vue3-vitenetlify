import { defineStore } from "pinia";
import router from "@/router";
import { useAlertStore } from "@/stores";

export const useTicketStore = defineStore({
  id: "ticket",
  state: () => ({

    ticket: [],
    ticketnew: [],
    ticketdel: [],
    ticketend: [],
    ticketpros: [],
    countticket:'',
    countnew:'',
    countdel:'',
    countend:'',
    countpros:'',
    loading: false,
    error: null
  }),

  getters: {
    getTicketsPerAuthor: (state) => {
      return (state) => state.ticket.filter((ticket) => ticket.userId === authorId)
    },

  },

  actions: {
    async fetchTicketswherepros() {

      this.loading = true
      try {
        this.ticketpros = await fetch('https://parseapi.back4app.com/classes/ticket?where={"states":"قيد العمل"}',
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
      this.countpros = this.ticketpros.results.length
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async fetchTicketswhereend() {

      this.loading = true
      try {
        this.ticketend = await fetch('https://parseapi.back4app.com/classes/ticket?where={"states":"تم التنفيذ"}',
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
      this.countend = this.ticketend.results.length
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async fetchTicketswheredelet() {

      this.loading = true
      try {
        this.ticketdel = await fetch('https://parseapi.back4app.com/classes/ticket?where={"states":"ملغى"}',
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
      this.countdel = this.ticketdel.results.length
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async fetchTicketswherenew() {

      this.loading = true
      try {
        this.ticketnew = await fetch('https://parseapi.back4app.com/classes/ticket?where={"states":"جديد"}',
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
      this.countnew = this.ticketnew.results.length

      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
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
      this.countticket = this.ticket.results.length
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async fetchTicket(text) {
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
    },

    async fetchtall() {

      this.loading = true
      try {
        this.countticket = await fetch('https://parseapi.back4app.com/classes/ticket',
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
      ).then((response) => response.json()).then((data)=>data.results.length)

      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
  }
})