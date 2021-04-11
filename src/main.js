import Vue from 'vue'
import App from './App.vue'

//connecting store ans route
import store from './store/index'
import router from './router/index'

//plugins
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload, {
  lazyComponent: true
  // preLoad: 1.3,
  // error: "https://www.askc.us/wp-content/uploads/2017/04/default-image-720x530.jpg",
  // loading: "https://www.askc.us/wp-content/uploads/2017/04/default-image-720x530.jpg",
  // attempt: 1
});

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
