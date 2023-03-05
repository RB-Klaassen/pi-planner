import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      userProfile: {
        userName: "Remko Klaassen",
        role: "admin",
      },
    };
  },
  getters: {
    getUserProfile(state) {
      return state.userProfile;
    },
  },
});

export default store;
