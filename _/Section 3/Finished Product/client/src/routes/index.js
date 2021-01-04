/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

/**
 * The routes
 *
 * @type {object} The routes
 */
export default [
  // Home
  {
    path: '/home',
    name: 'home.index',
    component: resolve => require(['./../pages/home/index.vue'], resolve),

    // If the user needs to be joined to view this page
    meta: {
      joined: true,
    },
  },
  {
    path: '/join',
    name: 'join.index',
    component: resolve => require(['./../pages/join/index.vue'], resolve),

    // If the user needs to be joined to view this page
    meta: {
      guest: true,
    },
  },

  // Redirects
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/*',
    redirect: '/home',
  },
];
