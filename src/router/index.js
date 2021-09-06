import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

// Register further routes here
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/404',
    name: 'Not Found',
    component: () => import(/* webpackChunkName: "404" */ '../views/404.vue'),
    props: route => ({ redirect: route.query.redirect })
  },
]

// Adjust history here if necessary
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// Catch 404 errs
router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    next({ path: '/404', query: { redirect: from.fullPath } })
  } else {
    next();
  }
})

export default router
