<template>
  <div>
    <md-toolbar class="md-medium">
      <md-button
        class="md-icon-button"
        @click.native="toggleSidenav"
      >
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title">GitHub</h2>

      <md-input-container style="flex: 1">
        <md-input placeholder="Search username"></md-input>
      </md-input-container>
    </md-toolbar>

    <md-sidenav
      class="md-left"
      ref="sidenav"
    >
      <md-toolbar class="md-medium">
        <md-button
          class="md-icon-button"
          @click.native="toggleSidenav"
        >
          <md-icon>menu</md-icon>
        </md-button>
        <h2 class="md-title">GitHub</h2>
      </md-toolbar>
    </md-sidenav>

    <div class="main-content">
      <md-layout>
        <router-view></router-view>
      </md-layout>
    </div>
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
      },
      toggleSidenav() {
        this.$refs.sidenav.toggle();
      },
    },

    mounted() {
      this.fetchUser('petervmeijgaard');
    }
  }
</script>
