import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
    {
        path: "/board/list",
        component: () => import("@/board/BoardList.vue"),
    },
    {
        path: "/board/:idx",
        component: () => import("@/board/BoardDetail.vue"),
    },
    ],
});
export default router;
