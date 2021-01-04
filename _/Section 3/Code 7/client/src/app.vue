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

    mounted() {
      this.$socket.on('newMessage', (message) => {
        store.dispatch('newMessage', message);
      });
    },
  };
</script>
