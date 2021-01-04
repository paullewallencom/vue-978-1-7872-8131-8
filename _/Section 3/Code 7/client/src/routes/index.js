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
  {
    path: '/join',
    name: 'join.index',
    component: resolve => require(['./../pages/join/index.vue'], resolve),
    meta: {
      guest: true,
    },
  },
  {
    path: '/room',
    name: 'room.index',
    component: resolve => require(['./../pages/room/index.vue'], resolve),
    meta: {
      joined: true,
    },
  },
  {
    path: '/',
    redirect: '/room',
  },
  {
    path: '/*',
    redirect: '/room',
  },
];
