import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";

// Font Awesome setup
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { 
  faLinkedin, 
  faGithub,
  faVuejs,
  faJs,
  faHtml5,
  faCss3Alt,
  faFigma,
  faGitAlt
} from "@fortawesome/free-brands-svg-icons";
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
  faCode,
  faBolt,
  faUniversalAccess,
  faRobot,
  faGlobe,
  faFilePdf
} from "@fortawesome/free-solid-svg-icons";

// Add icons to the library
library.add(
  // Brand icons
  faLinkedin,
  faGithub,
  faVuejs,
  faJs,
  faHtml5,
  faCss3Alt,
  faFigma,
  faGitAlt,
  // Solid icons
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
  faCode,
  faBolt,
  faUniversalAccess,
  faRobot,
  faGlobe,
  faFilePdf
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
