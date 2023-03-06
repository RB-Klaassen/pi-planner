export default {
  namespaced: true,
  state() {
    return {
      backlog: [
        {
          id: "GRIDICB-001",
          name: "Plan a",
          description: "take over the world",
          lead: "Brain",
          type: "KLO",
          PIPlans: ["2022-Q3", "2022-Q4"],
          order: 0,
        },
        {
          id: "GRIDICB-002",
          name: "Plan B",
          description: "take over the world again",
          lead: "Brain",
          type: "Regulatory",
          PIPlans: ["2022-Q2", "2022-Q4"],
          order: 1,
        },
        {
          id: "GRIDICB-003",
          name: "Beep",
          description: "Narf",
          lead: "Pinky",
          type: "KLO",
          PIPlans: ["2023-Q1"],
          order: 2,
        },
      ],
    };
  },

  getters: {
    fullBacklog(state) {
      return state.backlog;
    },

    getProject: (state) => (id) => {
      return state.backlog.find((c) => c.id === id);
    },
  },

  mutations: {
    saveBacklog(state, payload) {
      state.backlog = payload;
    },
    addProject(state, payload) {
      state.backlog.push(payload);
    },
  },

  actions: {
    saveBacklog(context, payload) {
      // update the order property for all projects, based on the index in the array
      for (let i = 0; i < payload.length; i++) {
        payload[i].order = i;
      }
      context.commit("saveBacklog", payload);
    },
    addProject(context, payload) {
      context.commit("addProject", payload);
    },
  },
};
