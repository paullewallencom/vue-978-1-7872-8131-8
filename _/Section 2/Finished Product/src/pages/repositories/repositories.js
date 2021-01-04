import RepositoryTable from '../../components/repository-table/repository-table.vue';

export default {
  /**
   * Computed properties the page can use.
   */
  computed: {
    /**
     * Fetch the repositories from the root.
     *
     * @returns {Array} The repositories.
     */
    repositories() {
      return this.$root.repositories;
    }
  },

  /**
   * The components that are being used in this page.
   */
  components: {
    RepositoryTable,
  },

  /**
   * Fires when the component has been mounted.
   */
  mounted() {
    this.$root.closeSidenav();
  }
};
