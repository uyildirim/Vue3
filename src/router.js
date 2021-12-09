import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Register from "./views/Register.vue";
import RegisterEdit from "./views/RegisterEdit.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,

    },
    {
        path: "/register/:id",
        name: "RegisterEdit",
        component: RegisterEdit,
    },  

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;