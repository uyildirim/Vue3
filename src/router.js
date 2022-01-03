import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import AddPost from "./views/AddPost.vue"
import AddCategory from "./views/Category.vue"
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
        path: "/add-post",
        name: "AddPost",
        component: AddPost
    },
    {
        path: "/add-category",
        name: "AddCategory",
        component: AddCategory
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;