import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "../styleguide.sass"
import "../globals.sass"



import store from './antwoorden'; 

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
  }).$mount("#app");