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
 * Axios
 * ============
 *
 * Promise based HTTP client for the browser and node.js.
 * Because Vue Resource has been retired, Axios will now been used
 * to perform AJAX-requests.
 *
 * https://github.com/mzabriskie/axios
 */
import Axios from 'axios';

Axios.defaults.baseURL = process.env.API_LOCATION;
Axios.defaults.headers.common.Accept = 'application/vnd.github.v3+json';
Object.defineProperty(Vue.prototype, '$http', {
  get() {
    return Axios;
  }
});


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


/* ============
 * Vue Material
 * ============
 *
 * Vue Material is lightweight framework built exactly
 * according to the Material Design specs.
 *
 * https://vuematerial.github.io
 */
import VueMaterial from 'vue-material';

Vue.use(VueMaterial);
Vue.material.registerTheme('default', {
  primary: 'deep-orange',
  accent: 'blue',
});

/* ============
 * Styling
 * ============
 *
 * Require the application styling.
 *
 * http://sass-lang.com/
 */
import './assets/sass/app.scss';

export default {
  router,
};
