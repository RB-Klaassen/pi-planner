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
          order: 0,
        },
        {
          id: "GRIDICB-002",
          name: "Plan B",
          description: "take over the world again",
          lead: "Brain",
          type: "KLO",
          order: 1,
        },
        {
          id: "GRIDICB-003",
          name: "Beep",
          description: "Narf",
          lead: "Pinky",
          type: "KLO",
          order: 2,
        },
      ],
    };
  },

  getters: {
    fullBacklog(state) {
      return state.backlog;
    },
  },

  mutations: {
    saveBacklog(state, payload) {
      state.backlog = payload;
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
  },
};
