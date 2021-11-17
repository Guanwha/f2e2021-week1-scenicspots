import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import SearchScenicSpots from '../views/SearchScenicSpots.vue';
import ScenicSpot from '../views/ScenicSpot.vue';
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
    path: '/search/scenicspots',
    name: 'searchScenicSpots',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "searchScenicSpots" */ '../views/SearchScenicSpots.vue'),
    component: SearchScenicSpots,
    meta: {
      menuItemType: MenuItemTypeEnum.SEARCH_SCENICSPOTS,
    },
  },
  {
    path: '/scenicspot/:id',
    name: 'scenicSpot',
    // component: () => import(/* webpackChunkName: "searchScenicSpots" */ '../views/ScenicSpot.vue'),
    component: ScenicSpot,
    meta: {
      menuItemType: MenuItemTypeEnum.SEARCH_SCENICSPOTS,
    },
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
