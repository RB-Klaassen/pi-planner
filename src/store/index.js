import { createStore } from "vuex";
import backlogModule from "./backlog";
import authModule from "./auth";

const store = createStore({
  modules: {
    backlog: backlogModule,
    auth: authModule,
  },
});

export default store;
