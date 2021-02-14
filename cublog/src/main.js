import Vue from "vue";
import App from "./App.vue";
import "./quasar";
import router from "./router";
import VueCookies from "vue-cookies";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueCookies, VueAxios, axios);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
