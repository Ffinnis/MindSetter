import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuth: false,
    user: null,
  },
  mutations: {
    auth(state) {
      state.isAuth = true;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    auth(context) {
      context.commit("auth");
    },
    setUser(context, user) {
      context.commit("setUser", user);
    },
  },
  modules: {},
  getters: {
    getIsAuth: (state) => {
      return state.isAuth;
    },
    getUser: (state) => {
      return state.user;
    },
  },
});
