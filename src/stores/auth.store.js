import { defineStore } from "pinia";
import router from "@/router";
import { useAlertStore } from "@/stores";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    user: JSON.parse(localStorage.getItem("user")),
    returnUrl: "/",
  }),
  actions: {
    async login(username, password) {
      try {
        // const fetvhurl = "https://parseapi.back4app.com/login?username=booshali&password=Bnd102030";
        const res = await fetch(
          `https://parseapi.back4app.com/login?username=${username}&password=${password}`,
          {
            method: "Get",
            headers: {
              accept: "application/json",
              "X-Parse-Application-Id":
                "faefaVxc667rBCJfBWerLVgwbN8ymX1S9CkceSjh",
              "X-Parse-REST-API-Key":
                "T0Ag23ExRe6UtCQb9KtD7mPFMjtatgWxhUwyZZRI",
              "X-Parse-Revocable-Session": "1",
            },
          }
        );
        console.log(res.ok);
        if (res.ok) {
          const user_back4apps = await res.json();
          console.table(user_back4apps);
          // update pinia state
          this.user = user_back4apps;
          console.log(" 1 SEND TO HOME");
          // store user details and jwt in local storage to keep user logged in between page refreshes
          localStorage.setItem("user", JSON.stringify(user_back4apps));
          console.log("2 SEND TO HOME");
          const alertStore = useAlertStore();
          alertStore.success("تم تسجيل الدخول بنجاح");
          // redirect to previous url or default to home page
          router.push("/about");
        } else {
          console.log("error user or passworf");
          const alertStore = useAlertStore();
          alertStore.error("error");
        }
      } catch (error) {
        console.log("catch error user or passworf");
        const alertStore = useAlertStore();
        alertStore.error(error);
      }
    },
    logout() {
      this.user = null;
      localStorage.removeItem("user");
      console.log("remove Item tokin");
      router.replace({ path: "/" });
    },
  },
});
