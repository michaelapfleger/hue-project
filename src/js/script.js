import Vue from "vueCommon";
import VueRouter from "vue-router";
import Home from "./home.vue";
import Today from "./today.vue";
import Diary from "./diary.vue";
import App from "./app.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
        path: '/',
        component: Home
    }, {
        path: '/today',
        component: Today
    }, {
        path: '/diary',
        component: Diary
    }]
});

var app = new Vue({
    el: '#app',
    router: router,
    components:{
        App
    },
    template: '<app></app>'

});
