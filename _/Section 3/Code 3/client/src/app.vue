<template>
  <div id="app">
    Hello World!
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
  };
</script>
