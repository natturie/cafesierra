import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: () => import('../views/Welcome.vue')
  },
  {
    path: '/customers',
    name: 'Customers',
    component: () => import('../views/Customers.vue')
  },
  {
    path: '/customers/add',
    name: 'Addcustomer',
    component: () => import('../views/Addcustomer.vue')
  },
  {
    path: '/customers/edit',
    name: 'EditCustomer',
    component: () => import('../views/EditCustomer.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/Products.vue')
  },
  {
    path: '/products/add',
    name: 'Addproduct',
    component: () => import('../views/Addproduct.vue')
  },
  {
    path: '/products/edit',
    name: 'EditProduct',
    component: () => import('../views/EditProduct.vue')
  },
  {
    path: '/orderhidden',
    name: 'Order',
    component: () => import('../views/Order.vue')
  },
  {
    path: '/order',
    name: 'Checkorder',
    component: () => import('../views/Checkorder.vue')
  },
  {
    path: '/order/car',
    name: 'Car',
    component: () => import('../views/Car.vue')
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('../views/Users.vue')
  },
  {
    path: '/pedidos',
    name: 'Pedidos',
    component: () => import('../views/Pedidos.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
