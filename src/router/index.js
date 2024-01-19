import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import BooksView from "@/views/BooksView.vue";
import ContactView from "@/views/ContactView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:"/",
            name:"home",
            component:HomeView
            
        },{
            path:"/",
            name:"books",
            component:BooksView
            
        },
        {
            path:"/",
            name:"contact",
            component:ContactView
            
        },
        {
            path:"/",
            name:"login",
            component:LoginView
            
        },
        {
            path:"/",
            name:"register",
            component:RegisterView
        },
    ]
});

export default router;