import Vue from "vue";
import Router from "vue-router";
import Landingspagina from "./components/Landingspagina";
import Pagina1 from "./components/Pagina1";
import Pagina2 from "./components/Pagina2";
import Pagina3 from "./components/Pagina3";
import Pagina4 from "./components/Pagina4";
import Pagina5 from "./components/Pagina5";
import Pagina6 from "./components/Pagina6";
import antwoorden from "./antwoorden.js";
import {
  landingspaginaData,
  pagina1Data,
  pagina2Data,
  pagina3Data,
  pagina4Data,
  pagina5Data,
  pagina6Data,
} from "./data";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: "/Ziggo/",
  routes: [
    {
      path: "/",
      component: Landingspagina,
      props: { ...landingspaginaData },
    },
    {
      path: "/pagina-2",
      component: Pagina2,
      props: { ...pagina2Data },
    },
    {
      path: "/pagina-3",
      component: Pagina3,
      props: { ...pagina3Data },
    },
    {
      path: "/pagina-4",
      component: Pagina4,
      props: { ...pagina4Data },
    },
    {
      path: "/pagina-5",
      component: Pagina5,
      props: { ...pagina5Data },
    },
    {
      path: "/pagina-6",
      component: Pagina6,
      props: { ...pagina6Data },
    },
    {
      path: "*",
      component: Pagina1,
      props: { ...pagina1Data },
    },
  ],
});
