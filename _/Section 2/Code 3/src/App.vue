<template>
  <div>
    <pre>{{ user }}</pre>
    <router-view></router-view>
  </div>
</template>

<script>
  import { router } from './bootstrap';

  export default {
    name: 'GitHubApplication',

    router,

    data() {
      return {
        user: null,
      };
    },

    methods: {
      fetchUser(username) {
        this.$http.get(`users/${username}`)
          .then((response) => {
            this.user = response.data;
          })
      }
    },

    mounted() {
      this.fetchUser('peter');
    }
  }
</script>
