/* ============
 * Bootstrap File
 * ============
 *
 * Will configure and bootstrap the application.
 */


/* ============
 * Vue
 * ============
 *
 * Vue.js is a library for building interactive web interfaces.
 * It provides data-reactive components with a simple and flexible API.
 *
 * http://rc.vuejs.org/guide/
 */
import Vue from 'vue';

Vue.config.debug = process.env.NODE_ENV !== 'production';


/* ============
 * Socket.IO
 * ============
 *
 * Socket.IO enables real-time bidirectional event-based communication.
 * It works on every platform, browser or device, focusing equally on
 * reliability and speed.
 *
 * http://socket.io/
 */
import io from 'socket.io-client';

const socket = io(process.env.SOCKET_ENDPOINT);
Object.defineProperty(Vue.prototype, '$socket', {
  get() {
    return socket;
  },
});
Vue.socket = socket;

/* ============
 * Vuex Router Sync
 * ============
 *
 * Effortlessly keep vue-router and vuex store in sync.
 *
 * https://github.com/vuejs/vuex-router-sync/blob/master/README.md
 */
import VuexRouterSync from 'vuex-router-sync';
import store from './store';


/* ============
 * Vue Router
 * ============
 *
 * The official Router for Vue.js. It deeply integrates with Vue.js core
 * to make building Single Page Applications with Vue.js a breeze.
 *
 * http://router.vuejs.org/en/index.html
 */
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

export const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.joined) && !store.state.hasJoined) {
    next({
      name: 'join.index',
    });
  } else if (to.matched.some(m => m.meta.guest) && store.state.hasJoined) {
    next({
      name: 'room.index',
    });
  } else {
    next();
  }
});
VuexRouterSync.sync(store, router);

Vue.router = router;


/* ============
 * Styling
 * ============
 *
 * Require the application styling.
 */
import './assets/sass/app.scss';


export default {
  router,
};
