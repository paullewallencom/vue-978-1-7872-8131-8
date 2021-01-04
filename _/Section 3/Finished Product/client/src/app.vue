<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import store from './store';
  import { router } from './bootstrap';

  export default {
    /**
     * The name of the application.
     */
    name: 'ChatApplication',

    /**
     * The Vuex store
     */
    store,

    /**
     * The router.
     */
    router,

    /**
     * Fired when the application has been mounted.
     */
    mounted() {
      this.$socket.on('message@create', (message) => {
        store.dispatch('receiveMessage', message);
      });
    },
  };
</script>
