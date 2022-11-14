import { defineStore } from "pinia";
import router from "@/router";
import { useAlertStore } from "@/stores";
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ /* options */ });

export const useTaqemStore = defineStore({
  id: "taqem",
  state: () => ({
   adria:'',
    q1:'',
    q2:'',
    q3:'',
    q4:'',
    q5:'',
  }),

  actions: {
    async send_data() {

      try {
        // const fetvhurl = "https://parseapi.back4app.com/login?username=booshali&password=Bnd102030";
        const res = await fetch(
          'https://parseapi.back4app.com/classes/taqem',
          {
            method: "POST",
            headers: {
              accept: "application/json",
              "X-Parse-Application-Id":
                "faefaVxc667rBCJfBWerLVgwbN8ymX1S9CkceSjh",
              "X-Parse-REST-API-Key":
                "T0Ag23ExRe6UtCQb9KtD7mPFMjtatgWxhUwyZZRI",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              adria: this.adria ,
              q1: this.q1,
              q2: this.q2,
              q3: this.q3,
              q4: this.q4,
              q5: this.q5,
              other: " "})
          }
        );
        // console.log(res.ok);
        if (res.ok) {
          const responer = await res.json();
          // console.table(responer);
          // const alertStore = useAlertStore();
          // alertStore.success("تم حفظ التقييم");
         // toaster.success("تم حفظ التقييم");
          const alertStore = useAlertStore();
          alertStore.success("تم حفظ التقييم بنجاح");
          this.$reset();
          router.push("/endtaqem");

        } else {
          // console.log("error user or passworf");
          const alertStore = useAlertStore();
          alertStore.error("لم يتم حفظ التقييم");
        }
      } catch (error) {
        // console.log("catch error user or passworf");
        const alertStore = useAlertStore();
        alertStore.error("تأكد من اتصالك بالشبكة");
      }
    },

    setq1(param1) {
      this.q1 = param1 ;
    },
    setq2(param1) {
      this.q2=param1 ;

    },
    setq3(param1) {
      this.q3=param1 ;

    },
    setq4(param1) {
      this.q4=param1 ;

    },
    setq5(param1) {
      this.q5=param1 ;

    },
    sethandleChange(param1) {
      this.adria=param1 ;
    },
  },
});
