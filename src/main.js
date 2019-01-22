import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate'
import router from './router/router.js'
// import axios from "axios";

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

// new Vue({
//     el: '#app',
//     router,
//     data () {
//         return {
//             info: null
//         }
//     },
//     mounted () {
//         axios
//             .get('https://api.coindesk.com/v1/bpi/currentprice.json')
//             .then(response => (this.info = response))
//     },
//     render: h => h(App)
// })