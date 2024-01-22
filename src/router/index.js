import { createRouter, createWebHistory } from "vue-router";


import HomeView from "@/views/HomeView.vue";
import BooksView from "@/views/BooksView.vue";
import LoginView from "@/views/LoginViews.vue";
import RegisterView from "@/views/RegisterViews.vue";
import ContactView from "@/views/ContactViews.vue";

const router = createRouter({
<<<<<<< HEAD
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/",
      name: "books",
      component: BooksView,
    },
    {
      path: "/",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/",
      name: "register",
      component: RegisterView,
    },
  ],
=======
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView

        }, {
            path: "/books",
            name: "books",
            component: BooksView

        },
        {
            path: "/contact",
            name: "contact",
            component: ContactView

        },
        {
            path: "/login",
            name: "login",
            component: LoginView

        },
        {
            path: "/register",
            name: "register",
            component: RegisterView
        },
    ],
    linkActiveClass:'active-link',
>>>>>>> 96e804b62cdcf32bed4dd631b2802bea9ee40d46
});

export default router;
