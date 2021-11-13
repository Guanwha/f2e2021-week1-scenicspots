import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import { MenuItemTypeEnum } from '../utils/enums';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      menuItemType: MenuItemTypeEnum.HOME,
    },
  },
  {
    path: '/search/attractions',
    name: 'searchAttractions',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "searchAttractions" */ '../views/SearchAttractions.vue'),
    meta: {
      menuItemType: MenuItemTypeEnum.SEARCH_ATTRACTIONS,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
