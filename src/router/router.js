import {createRouter, createWebHistory} from 'vue-router'
import site_routes from "@/router/routes";

const router = createRouter({
        history: createWebHistory(),
        routes: site_routes,
    }
);

export default router

