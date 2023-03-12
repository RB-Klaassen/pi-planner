import { createStore } from "vuex";
import backlogModule from "./backlog";
import piPlanModule from "./piPlan";
import authModule from "./auth";

const store = createStore({
  modules: {
    backlog: backlogModule,
    piPlan: piPlanModule,
    auth: authModule,
  },
});

export default store;
