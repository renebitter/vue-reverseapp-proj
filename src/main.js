import Vue from 'vue'
import App from './App.vue'
// import router from './router'

// import template from './template.html'

Vue.config.productionTip = false

new Vue({
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