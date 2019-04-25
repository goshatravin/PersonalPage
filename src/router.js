import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import Portfolio from './views/Portfolio.vue'
import Contact from './views/Contact.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'about',
      component: Main
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    }, {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
