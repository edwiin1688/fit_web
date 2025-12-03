import { createRouter, createWebHistory } from "vue-router";

import DashboardView from "../views/DashboardView.vue";
import ExerciseView from "../views/ExerciseView.vue";
import AnalyticsView from "../views/AnalyticsView.vue";
import HealthView from "../views/HealthView.vue";
import GroupsView from "../views/GroupsView.vue";
import ProfileView from "../views/ProfileView.vue";

const routes = [
  { path: "/", name: "Dashboard", component: DashboardView },
  { path: "/exercise", name: "Exercise", component: ExerciseView },
  { path: "/analytics", name: "Analytics", component: AnalyticsView },
  { path: "/health", name: "Health", component: HealthView },
  { path: "/groups", name: "Groups", component: GroupsView },
  { path: "/profile", name: "Profile", component: ProfileView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
