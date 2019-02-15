import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import SpellDirectory from './components/SpellDirectory.vue'

Vue.use(VueRouter)

// Define routes
const routes = [
  { path: '/', component: Home },
  { path: '/spell-directory', component: SpellDirectory }
]

//Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes // short for `routes: routes`
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
