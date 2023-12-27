import { createRouter, createWebHashHistory } from "vue-router";

import HomeVue from "../Pages/Home.vue";
import QuizStep from "../Pages/QuizStep.vue";
const routes = [
  { path: "/", component: HomeVue },
  { path: "/:quizType/step/:stepId", component: QuizStep },
];

export default createRouter({
  routes,
  history: createWebHashHistory(),
});
