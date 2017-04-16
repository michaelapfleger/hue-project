import Vue from "vueCommon";
import VueRouter from "vue-router";
import Home from "./home.vue";
import Today from "./today.vue";
import Diary from "./diary.vue";
import About from "./about.vue";
import App from "./app.vue";
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
