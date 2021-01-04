/* ============
 * Vuex Store
 * ============
 *
 * The store of the application
 *
 * http://vuex.vuejs.org/en/index.html
 */

import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import state from './state';
import * as actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  /**
   * The actions to be used by the Vuex store.
   */
  actions,

  /**
   * The mutations to be used by the Vuex store.
   */
  mutations,

  /**
   * The state of the Vuex store.
   */
  state,

  /**
   * If strict mode should be enabled.
   */
  strict: debug,

  /**
   * Plugins used in the store.
   */
  plugins: debug ? [createLogger()] : [],
});
