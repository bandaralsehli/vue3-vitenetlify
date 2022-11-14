import { defineStore } from "pinia";
import router from "@/router";
import { useAlertStore } from "@/stores";
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ /* options */ });

export const useTaqemStore = defineStore({
  id: "taqem",
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    user: JSON.parse(localStorage.getItem("user")),
    adria:localStorage.getItem('adria'),
    q1:localStorage.getItem('q1'),
    q2:localStorage.getItem('q2'),
    q3:localStorage.getItem('q3'),
    q4:localStorage.getItem('q4'),
    q5:localStorage.getItem('q5'),
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
              adria: localStorage.getItem('adria') ,
              q1: localStorage.getItem('q1'),
              q2: localStorage.getItem('q2'),
              q3: localStorage.getItem('q3'),
              q4: localStorage.getItem('q4'),
              q5: localStorage.getItem('q5'),
              other: " "})
          }
        );
        // console.log(res.ok);
        if (res.ok) {
          const responer = await res.json();
          // console.table(responer);
          // const alertStore = useAlertStore();
          // alertStore.success("تم حفظ التقييم");
          toaster.success("تم حفظ التقييم");
          localStorage.removeItem("adria");
          localStorage.removeItem("q1");
          localStorage.removeItem("q2");
          localStorage.removeItem("q3");
          localStorage.removeItem("q4");
          localStorage.removeItem("q5");


          router.push("/about");
          //setTimeout(function(){router.push("/about")}, 150)
        } else {
          // console.log("error user or passworf");
          const alertStore = useAlertStore();
          alertStore.error("التاكد من الاختيار في جميع البنود");
        }
      } catch (error) {
        // console.log("catch error user or passworf");
        const alertStore = useAlertStore();
        alertStore.error("التاكد من الاختيار في جميع البنود");
      }
    },
    logout() {
      this.user = null;
      localStorage.removeItem("user");
      // console.log("remove Item tokin");
      router.replace({ path: "/" });
    },
    q1(text) {
      localStorage.setItem("q1",text );
      // console.log('from pinin q1');
      // console.log(localStorage.getItem('q1'));
    },
    q2(text) {
      localStorage.setItem("q2",text );
      // console.log('from pinin q2');
      // console.log(localStorage.getItem('q2'));
    },
    q3(text) {
      localStorage.setItem("q3",text );
      // console.log('from pinin q3');
      // console.log(localStorage.getItem('q3'));
    },
    q4(text) {
      localStorage.setItem("q4",text );
      // console.log('from pinin q4');
      // console.log(localStorage.getItem('q4'));
    },
    q5(text) {
      localStorage.setItem("q5",text );
       // console.log('from pinin q5');
      // console.log(localStorage.getItem('q5'));
    },
    handleChange(text) {
      localStorage.setItem("adria",text );
      // console.log('from pinin mm and adria');
      // console.log(localStorage.getItem('adria'));
    },
  },
});
