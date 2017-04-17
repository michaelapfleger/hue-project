import Vue from "vueCommon";
import VueRouter from "vue-router";
import Home from "./vue/home.vue";
import Today from "./vue/today.vue";
import Diary from "./vue/diary.vue";
import About from "./about.vue";
import App from "./vue/app.vue";
import VueFormGenerator from "vue-form-generator";
import axios from "axios";

Vue.use(VueFormGenerator);
Vue.use(VueRouter);
Vue.use(VueFormGenerator);

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
    }, {
        path: '/about',
        component: About
    }]
});

var app = new Vue({
    el: '#app',
    router: router,
    components:{
        App
    },
    template: '<app></app>',
    mounted: function () {
        console.log("mounted");
    }

});
