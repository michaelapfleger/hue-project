import Vue from "vueCommon";
import Vuex from "vuex";
import VueRouter from "vue-router";
import Home from "./vue/home.vue";
import Today from "./vue/today.vue";
import Diary from "./vue/diary.vue";
import Logout from "./vue/logout.vue";
import App from "./vue/app.vue";
import Detail from "./vue/details.vue";
import Login from "./vue/login.vue";
import Profile from "./vue/profile.vue";
import Store from "./store";
import axios from "axios";

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
    routes: [{
        path: '/',
        name: 'login',
        component: Login
    }, {
        path: '/today',
        name: 'today',
        component: Today
    }, {
        path: '/diary',
        name: 'diary',
        component: Diary
    }, {
        path: '/logout',
        name: 'logout',
        component: Logout
    },
        {
            path: '/diary/:postId/detail',
            name: 'detail',
            component: Detail
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile
        }, { path: '*', redirect: '/' }
    ]
});

var app = new Vue({
    el: '#app',
    router,
    store: new Vuex.Store(Store),
    components:{
        App
    },
    template: '<app></app>',
    mounted: function () {
        console.log("mounted");
    }

});
