import Home from "./components/Home.js";
import Login from "./components/Login.js";
import Dashboard from "./components/Dashboard.js";
import Kategori from "./components/Kategori.js";
import Barang from "./components/Barang.js";

const routes = [

{
path:"/",
component:Home
},

{
path:"/login",
component:Login
},

{
path:"/dashboard",
component:Dashboard,
meta:{requiresAuth:true}
},

{
path:"/kategori",
component:Kategori,
meta:{requiresAuth:true}
},

{
path:"/barang",
component:Barang,
meta:{requiresAuth:true}
}
];

const router = VueRouter.createRouter({

history:VueRouter.createWebHashHistory(),
routes
});

router.beforeEach((to) => {

    if (
        to.meta.requiresAuth &&
        !localStorage.getItem("token")
    ) {
        return "/login";
    }

});

const app = Vue.createApp({});

app.use(router);

app.mount("#app");

window.router = router;