export default {
  namespaced: true,
  state() {
    return {
      piPlans: [
        {
          id: "00101",
          name: "2022-Q1",
          start: "2022-01-01",
          end: "2022-03-31",
          status: "Closed",
        },
        {
          id: "00102",
          name: "2022-Q2",
          start: "2022-04-01",
          end: "2022-06-30",
          status: "Closed",
        },
      ],
    };
  },
  getters: {
    listPi(state) {
      return state.piPlans;
    },
    getPi: (state) => (id) => {
      return state.piPlans.find((c) => c.id === id);
    },
  },
};
