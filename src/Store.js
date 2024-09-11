// antwoorden.js
// let antwoorden = [];

// export function addAntwoord(answer) {
//   antwoorden.push(answer);
// }

// export function getAntwoorden() {
//   return antwoorden;
// }



// store.js
// store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    antwoorden: {}, // Gebruik een object om antwoorden op te slaan
  },
  mutations: {
    ADD_ANTWOORD(state, { vraag, antwoord }) {
      state.antwoorden[vraag] = antwoord; // Sla het antwoord op onder de juiste vraag
    },
  },
  getters: {
    getAntwoorden(state) {
      return state.antwoorden; // Haal de antwoorden op
    },
  },
});

export default store; // Vergeet niet om de store te exporteren



