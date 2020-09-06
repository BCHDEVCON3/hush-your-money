import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Analyst from '../views/Analyst.vue'
import Search from '../views/Search.vue'
import Shuffler from '../views/Shuffler.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
}, {
    path: '/analyst',
    name: 'Analyst',
    component: Analyst
}, {
    path: '/shuffler',
    name: 'Shuffler',
    component: Shuffler
}, {
    path: '/search',
    name: 'Search',
    component: Search
}]

const router = new VueRouter({
    routes
})

export default router
