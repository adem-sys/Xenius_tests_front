import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import axios from "axios";  // Importez Axios ici
import VueAxios from "vue-axios";  // Importez VueAxios ici
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import ArgonDashboard from "./argon-dashboard";

const appInstance = createApp(App);
appInstance.use(store);
appInstance.use(router);

// Utilisez VueAxios pour configurer Axios comme plugin Vue
appInstance.use(VueAxios, axios);

appInstance.use(ArgonDashboard);
appInstance.mount("#app");
