import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showModal: false,
    company: {
      name: '',
      spend: 0,
      ability: '',
      notes: '',
    },
  },
  mutations: {
    showModal: state => (state.showModal = true),
    dismissModal: state => (state.showModal = false),
    updateName: (state, payload) => (state.company.name = payload),
    updateSpend: (state, payload) => (state.company.spend = payload),
    updateAbility: (state, payload) => (state.company.ability = payload),
    updateNotes: (state, payload) => (state.company.notes = payload),
  },
  actions: {},
  modules: {},
});
