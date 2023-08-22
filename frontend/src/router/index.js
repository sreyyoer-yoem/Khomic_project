import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import Home from "../views/HomeView.vue";
import register from "../views/RegisterView.vue";
import About from "../views/AboutView.vue";
import forgotPass from "../views/ForgotPassView.vue";
import changPassView from "../views/changPassView";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: LoginView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: register,
  },
  {
    path: "/logout",
    name: "logout",
    component: Home,
  },
  {
    path: "/forgotPass",
    name: "forgotPass",
    component: forgotPass,
  },
  {
    path: "/changPass",
    name: "changPass",
    component: changPassView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
