import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* web: "Cart" */ '../views/Cart.vue')
},  
{
  path: '/orders',
  name: 'Orders',
  component: () => import(/* web: "orders" */ '../views/Orders/Orders.vue')
},  
{
  path: '/products/:id',
  name: 'Products',
 
  component: () => import(/* webpackChunkName: "product" */ '../views/Products.vue')
},
{
  path: '/detail/:id',
  name: 'Detail',
 
  component: () => import(/* webpackChunkName: "detail" */ '../views/Product/Detail.vue')
}
]

const router = new VueRouter({
  routes
})


//scroll to top after every route change
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router
