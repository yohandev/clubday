import Vue from 'vue';
import VueRouter from 'vue-router';
//@ts-ignore
import Home from './components/Home';
//@ts-ignore
import Select from './components/Select';
//@ts-ignore
import Clubs from './components/Clubs';
//@ts-ignore
import App from './App';

const routes =
[
    { path: '/', component: Home },
    { path: '/survey', component: Select },
    { path: '/clubs', component: Clubs },
];

const router = new VueRouter
({
    routes
})

new Vue
({
    el: '#app',
    router,
    render: h => h(App)
});