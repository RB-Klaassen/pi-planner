export default {
  namespaced: false,
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
};
