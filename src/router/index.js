import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
]



const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            if (to.hash) {
                if (to.name === from.name) {
                    return {
                        el: to.hash,
                        behavior: "smooth",
                    };
                }
            }
            return { left: 0, top: 0 };
        }
    },
});

export default router
