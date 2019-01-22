import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate'
import router from './router/router.js'

Vue.use(VeeValidate);
Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

// new Vue({
//     template,
//     el: '#app',
//     router,
//     components: {
//
//     }
// });