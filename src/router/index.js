import { createRouter, createWebHistory } from "vue-router";
import BoardList from "../board/BoardList.vue"
import BoardDetail from "../board/BoardDetail.vue"
import BoardRegister from "../board/BoardRegister.vue";

// Routes Configuration
const routes = [
    { path: "/", component: BoardList,},
    { path: "/board/:idx", component: BoardDetail },
    { path: "/board/register", component: BoardRegister}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;