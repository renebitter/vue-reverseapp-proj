import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate'

import router from './router/router.js'

// import template from './template.html'

// Vue.use(router);
Vue.use(VeeValidate);
Vue.config.productionTip = false

new Vue({
    router,
  render: h => h(App),
}).$mount('#app')

// new Vue({
//     template,
//     el: '#app',
//     router,
//     components: {
//
//     }
// });