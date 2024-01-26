import BookDetailViewVue from "@/views/BookDetailView.vue";
import BooksViewVue from "@/views/BooksView.vue";
import ContactViewVue from "@/views/ContactView.vue";
import HomeViewVue from "@/views/HomeView.vue";
import LoginViewVue from "@/views/LoginView.vue";
import RegisterViewVue from "@/views/RegisterView.vue";
import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeViewVue

        }, {
            path: "/books",
            name: "books",
            component: BooksViewVue

        },
        {
            path:'/books/:id',
            name:'books-detail',
            component:BookDetailViewVue
        },
        {
            path: "/contact",
            name: "contact",
            component: ContactViewVue

        },
        {
            path: "/login",
            name: "login",
            component: LoginViewVue

        },
        {
            path: "/register",
            name: "register",
            component: RegisterViewVue
        },
    ],
    linkActiveClass:'active-link',
});

export default router;
