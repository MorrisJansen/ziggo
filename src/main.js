import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "../styleguide.sass"
import "../globals.sass"
import store from './Store'; 


Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
  router
  }).$mount("#app");