/* ============
 * The routes
 * ============
 *
 * The routes that are being used for the application,
 * are shown here.
 */
export default [
  // Route /repositories
  {
    path: '/repositories',
    name: 'repositories',
    component: require('./../pages/repositories/repositories.vue'),
  },

  // Route /user
  {
    path: '/user',
    name: 'user',
    component: require('./../pages/user/user.vue'),
  },

  // Redirect / to /repositories
  {
    path: '/',
    redirect: '/repositories',
  },

  // Redirect /* to /repositories
  {
    path: '/*',
    redirect: '/repositories'
  }
];
