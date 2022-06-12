import { RouteRecordRaw } from 'vue-router';

export const guestRoutes: RouteRecordRaw[] = [
  {
    path: '/guest',
    component: () => import('pages/guest/Index.vue'),
    // children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/guest/login',
    component: () => import('pages/guest/login/Index.vue'),
  },
  {
    path: '/guest/signup',
    component: () => import('pages/guest/signup/Index.vue'),
  },
];
