export default {
  namespaced: true,
  state() {
    return {
      backlog: [
        {
          id: "001",
          projectId: "GRIDICB-001",
          name: "Plan a",
          description: "take over the world",
          lead: "Brain",
          type: "KLO",
          PIPlans: ["2022-Q3", "2022-Q4"],
          status: "New",
          order: 0,
        },
        {
          id: "002",
          projectId: "GRIDICB-002",
          name: "Plan B",
          description: "take over the world again",
          lead: "Brain",
          type: "LTO",
          PIPlans: ["2022-Q2", "2022-Q4"],
          status: "In progress",
          order: 1,
        },
        {
          id: "003",
          projectId: "GRIDICB-003",
          name: "Beep",
          description: "Narf",
          lead: "Pinky",
          type: "MBF",
          PIPlans: ["2023-Q1"],
          status: "Cancelled",
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
    deleteProject(state, id) {
      state.backlog.splice(
        state.backlog.findIndex((e) => e.id === id),
        1
      );
    },
    updateProject(state, payload) {
      state.backlog[state.backlog.findIndex((e) => e.id === payload.id)] =
        payload;
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
    updateProject(context, payload) {
      context.commit("updateProject", payload);
    },
    deleteProject(context, id) {
      context.commit("deleteProject", id);
    },
  },
};
