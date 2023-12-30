import { createRouter, createWebHashHistory } from "vue-router";

import HomeVue from "../Pages/Home.vue";
import QuizStep from "../Pages/QuizStep.vue";
import FinishVue from "../Pages/Finish.vue";
const routes = [
  { path: "/", component: HomeVue },
  { path: "/:quizType/step/:stepId", component: QuizStep },
  { path: "/finish", component: FinishVue },
];

export default createRouter({
  routes,
  history: createWebHashHistory(),
});
