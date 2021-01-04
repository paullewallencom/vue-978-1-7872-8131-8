export default {
  /**
   * The properties this component can receive.
   */
  props: {
    repositories: {
      type: Array,
      required: true,
    }
  },

  /**
   * The methods this component can use.
   */
  methods: {
    /**
     * Method used to sort the items.
     *
     * @param {Object} sorting The sorting data.
     */
    sortRepositories(sorting) {
      this.repositories.sort((a, b) => {
        if(a[sorting.name] > b[sorting.name]) {
          return sorting.type === 'asc' ? 1 : -1;
        }

        if(a[sorting.name] < b[sorting.name]) {
          return sorting.type === 'asc' ? -1 : 1;
        }

        return 0;
      });
    }
  }
};
