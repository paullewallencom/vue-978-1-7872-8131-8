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
        <md-input
          placeholder="Search username"
          v-model="username"
        ></md-input>
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
      <md-list>
        <md-list-item>
          <router-link :to="{name: 'repositories'}">
            Repositories
          </router-link>
        </md-list-item>

        <md-list-item>
          <router-link :to="{name: 'user'}">
            User
          </router-link>
        </md-list-item>
      </md-list>
    </md-sidenav>

    <div class="main-content">
      <md-layout>
        <router-view></router-view>
      </md-layout>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash';
  import { router } from './bootstrap';

  export default {
    /**
     * The name of the application.
     */
    name: 'GitHubCrawler',

    /**
     * Bind Vue Router to the Vue instance.
     */
    router,

    /**
     * The data that the Vue component can use.
     *
     * @returns {Object} The data.
     */
    data() {
      return {
        user: null,
        username: null,
        repositories: [],
      };
    },

    /**
     * The watchers.
     */
    watch: {
      /**
       * Will watch the username and fetch
       * new data once the username has been updated.
       *
       * @param {String} username The new username.
       */
      username(username) {
        this.setUsername(username);
      },
    },

    /**
     * The methods of this Vue instance.
     */
    methods: {
      /**
       * Method used to toggle the side navigation.
       */
      toggleSidenav() {
        this.$refs.sidenav.toggle();
      },

      /**
       * Method used to close the side navigation.
       */
      closeSidenav() {
        this.$refs.sidenav.close();
      },

      /**
       * Method to fetch the repositories by a given username.
       *
       * @param {String} username The given username.
       */
      fetchRepositories(username) {
        this.$http.get(`users/${username}/repos`)
          .then(({data}) => {
            this.repositories = data;
          });
      },

      /**
       * Method used to fetch the user information by a given username.
       *
       * @param {String} username The given username.
       */
      fetchUser(username) {
        this.$http.get(`users/${username}`)
          .then(({data}) => {
            this.user = data;
          })
      },

      /**
       * Method used to set the username and fetch
       * information on debounce.
       */
      setUsername: _.debounce(function (username) {
        if (username) {
          this.fetchUser(username);
          this.fetchRepositories(username);
        }

        if (!username) {
          this.user = null;
          this.repositories = [];
        }
      }, 500),
    },
  }
</script>
