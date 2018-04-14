import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'

let routers = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }]

export default routers
