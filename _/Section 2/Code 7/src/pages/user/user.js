import UserCard from './../../components/user-card/user-card.vue';

export default {
  /**
   * The computed properties this page can use.
   */
  computed: {
    /**
     * The user from the root.
     *
     * @returns {Object} The user from the root.
     */
    user() {
      return this.$root.user;
    },
  },

  /**
   * The components this page can use.
   */
  components: {
    UserCard,
  },

  /**
   * Fires when the component has been mounted.
   */
  mounted() {
    this.$root.closeSidenav();
  },
};
