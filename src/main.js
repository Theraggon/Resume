import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";

// Font Awesome setup
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faSun,
  faMoon,
  faDownload,
  faChevronDown,
  faChevronRight,
  faAngleUp,
  faAngleDown,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

// Add icons to the library
library.add(
  faLinkedin,
  faGithub,
  faEnvelope,
  faPhone,
  faLocationDot,
  faSun,
  faMoon,
  faDownload,
  faChevronDown,
  faChevronRight,
  faAngleUp,
  faAngleDown,
  faPlus,
  faMinus
);

// For a single page resume site, we only need one route
const routes = [{ path: "/", component: App }];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    // Scroll to anchor if present, otherwise to top
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    }
    return { top: 0, behavior: "smooth" };
  },
});

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
