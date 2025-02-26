import { createRouter, createWebHistory } from "vue-router";
import BoardList from "../board/BoardList.vue"
import BoardDetail from "../board/BoardDetail.vue"

// Routes Configuration
const routes = [
    {path: "/", component: BoardList,},
    { path: "/board/:idx", component: BoardDetail },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;