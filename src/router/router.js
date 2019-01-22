import Vue from 'vue'
import Router from 'vue-router'
import Content from '../components/Content.vue'
import About from '../components/About.vue'
import Api from '../components/Api.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'content',
            component: Content
        },
        {
            path: '/api',
            name: 'api',
            component: Api
        },
        {
            path: '/about/:name',
            name: 'about',
            component: About
        }
    ]
})