// import { createApp } from "vue";
// import "./assets/main.css";
// import App from "./App.vue";
// import router from "@/router";

// createApp(App).use(router).mount("#app");

import { createApp } from "vue";
import { createPinia } from "pinia";
import VueQrcode from '@chenfengyuan/vue-qrcode';

import App from "./App.vue";
// import {router} from "./router/index.js";
import router from "@/router";
import "./assets/main.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import "flowbite";


// import { useMainStore } from "@/stores/main.js";
// import { useStyleStore } from "@/stores/style.js";
// import { darkModeKey, styleKey } from "@/config.js";



import {
  faCoffee,
  faSpinner,
  faWrench,
  faAmbulance,
  faEdit,
  faCircle,
  faCheck,
  faChessQueen,
  faPlus,
  faEquals,
  faArrowRight,
  faPencilAlt,
  faComment,
  faHeadphones,
  faSquare,
  faCalendar,
  faCertificate,
  faEnvelope,
  faTimes,
  faBookmark,
  faHeart,
  faPlay,
  faSun,
  faMoon,
  faStar,
  faHatWizard,
} from "@fortawesome/free-solid-svg-icons";
import {
  faJs,
  faVuejs,
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText,
} from "@fortawesome/vue-fontawesome";

library.add(
  faCoffee,
  faSpinner,
  faWrench,
  faAmbulance,
  faSquare,
  faEdit,
  faCircle,
  faCheck,
  faChessQueen,
  faHeadphones,
  faPlus,
  faEquals,
  faArrowRight,
  faPencilAlt,
  faComment,
  faCalendar,
  faCertificate,
  faEnvelope,
  faTimes,
  faBookmark,
  faHeart,
  faPlay,
  faSun,
  faMoon,
  faStar,
  faHatWizard,
  faJs,
  faVuejs,
  faFacebookF,
  faInstagram,
  faTwitter
);
const app = createApp(App);
app.use(createPinia());
app.use(router);
app
  .component("font-awesome-icon", FontAwesomeIcon)
  .component(VueQrcode.name, VueQrcode)
  .component("font-awesome-layers", FontAwesomeLayers)
  .component("font-awesome-layers-text", FontAwesomeLayersText);
app.mount("#app");

// /* Init Pinia stores */
// const mainStore = useMainStore(pinia);
// const styleStore = useStyleStore(pinia);

// /* Fetch sample data */
// mainStore.fetch("clients");
// mainStore.fetch("history");

// /* App style */
// styleStore.setStyle(localStorage[styleKey] ?? "basic");

// /* Dark mode */
// if (
//   (!localStorage[darkModeKey] &&
//     window.matchMedia("(prefers-color-scheme: dark)").matches) ||
//   localStorage[darkModeKey] === "1"
// ) {
//   styleStore.setDarkMode(true);
// }

// /* Default title tag */
// const defaultDocumentTitle = "Admin One Vue 3 Tailwind";

// /* Set document title from route meta */
// router.afterEach((to) => {
//   document.title = to.meta?.title
//     ? `${to.meta.title} — ${defaultDocumentTitle}`
//     : defaultDocumentTitle;
// });
