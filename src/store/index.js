import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuth: false,
    user: null,
    maps: [],
  },
  mutations: {
    auth(state) {
      state.isAuth = true;
    },
    setUser(state, user) {
      state.user = user;
    },
    pushMap(state, map) {
      state.maps.push(map);
    },
  },
  actions: {
    auth(context) {
      context.commit("auth");
    },
    setUser(context, user) {
      context.commit("setUser", user);
    },
    pushMap(context, map) {
      context.commit("pushMap", map);
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
    getMaps: (state) => {
      return state.maps;
    },
  },
});
