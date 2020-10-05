import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      isLoggedIn: false,
      authUser: {},
    };
  },
  mutations: {
    setIsLoggedIn(state) {
      state.isLoggedIn = true;
    },
    setAuthUser(state, payload) {
      state.authUser = payload;
    },
  },
});

export default store;
