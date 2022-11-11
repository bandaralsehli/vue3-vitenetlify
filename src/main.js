// import { createApp } from "vue";
// import "./assets/main.css";
// import App from "./App.vue";
// import router from "@/router";

// createApp(App).use(router).mount("#app");

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
// import {router} from "./router/index.js";
import router from "@/router";
import "./assets/main.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import "flowbite";
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
  .component("font-awesome-layers", FontAwesomeLayers)
  .component("font-awesome-layers-text", FontAwesomeLayersText);
app.mount("#app");
