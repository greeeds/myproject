// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import routers from './router'
import store from './vuex/store'
import Vuex from 'vuex'
Vue.use(ElementUI)
// Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
const router = new VueRouter({
  routers
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    sessionStorage.removeItem('token')
  }
  if (to.path === '/register') {
    sessionStorage.removeItem('token')
    next()
    return
  }
  let token = sessionStorage.getItem('token')
  if (!token && to.path !== '/login' && to.path !== '/register') {
    next({ path: '/login' })
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
