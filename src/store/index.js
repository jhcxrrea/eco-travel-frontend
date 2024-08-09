import { createStore } from 'vuex';

export default createStore({
  state: {
    user: null,
    destinations: [],
    // outros estados
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setDestinations(state, destinations) {
      state.destinations = destinations;
    },
    // outras mutações
  },
  actions: {
    fetchDestinations({ commit }) {
      // exemplo de ação para buscar destinos
      // depois de obter dados, faça commit da mutação
    },
    // outras ações
  },
  getters: {
    isAuthenticated: state => !!state.user,
    // outros getters
  },
});
