export default [
  {
    path: '/repositories',
    name: 'repositories',
    component: require('./../pages/repositories/repositories.vue'),
  },
  {
    path: '/user',
    name: 'user',
    component: require('./../pages/user/user.vue'),
  },
  {
    path: '/',
    redirect: '/repositories',
  },
  {
    path: '/*',
    redirect: '/repositories'
  }
];
