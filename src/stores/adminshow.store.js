import { defineStore } from "pinia";


export const useAdminshowStore = defineStore({
  id: "adminshow",
  state: () => ({
    navbar: false,
    all: true,
    new: true,
    process: true,
    end: true,
    delete: true
  }),

  actions: {

    cheekurl(dataurl) {
      if(dataurl == ''){
        this.navbar = true
      }
    },
    setall() {
      this.all =!this.all  ;
    },
    setnew() {
      this.new=!this.new ;
    },
    setprocess() {
      this.process=!this.process ;
    },
    setend() {
      this.end=!this.end ;
    },
    setdelete() {
      this.delete=!this.delete ;
    },



  }
})