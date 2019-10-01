import Vue from 'vue'
import Router from 'vue-router'
import LogIn from './components/LogInForm.vue'
import Register from './components/RegisterForm.vue'
import Dashboard from './views/Dashboard.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        children: [{
            path: 'login',
            component: LogIn
        }, {
            path: 'register',
            component: Register
          }]
      }, {
        path: '/home',
        name: 'home',
        component: Home
      }
    ],
    mode: 'history'
})