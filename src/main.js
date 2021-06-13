import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import { GiphyFetch } from "@giphy/js-fetch-api";

Vue.prototype.$gf = new GiphyFetch("8U6667clrHWWdivUOVCdp5v1UzvGCdj9");
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
