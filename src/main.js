import Vue from 'vue'
import App from './App.vue'

//connecting store ans route
import store from './store/index'
import router from './router/index'

//plugins
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload, {
  lazyComponent: true
});

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
