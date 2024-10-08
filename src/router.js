import Vue from "vue";
import Router from "vue-router";
import Landingspagina from "./components/Landingspagina";
import Pagina1 from "./components/Pagina1";
import Pagina2 from "./components/Pagina2";
import Pagina3 from "./components/Pagina3";
import Pagina4 from "./components/Pagina4";
import Pagina5 from "./components/Pagina5";
import Pagina6 from "./components/Pagina6";
import bedankt from "./components/bedankt.vue";
import Bedankt2 from "./components/bedankt-img.vue"
import {
  landingspaginaData,
  pagina1Data,
  pagina2Data,
  pagina3Data,
  pagina4Data,
  pagina5Data,
  pagina6Data,
} from "./data";
import Bedankt from "./components/bedankt.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: "/ziggo/", 
  routes: [
    {
      path: "/landingspagina",
      component: Landingspagina,
      props: { ...landingspaginaData },
    },
    {
      path: "/pagina-1",
      component: Pagina1,
      props: { ...pagina1Data },
    },
    {
      path: "/pagina-2",
      component: Pagina2,
      name: 'pagina-2',
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
      path: "/bedankt",
      component: Bedankt,
      props: { ...pagina6Data },
    },

    {
      path: "/bedankt2",
      component: Bedankt2,
      props: { ...pagina6Data },
    },
    

    
    {
      path: "*",
      redirect: "/landingspagina",
    },
  ],
});
