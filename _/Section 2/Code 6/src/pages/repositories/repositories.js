export default {
  computed: {
    repositories() {
      return this.$root.repositories;
    }
  },
  methods: {
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
  },
  mounted() {
    this.$root.closeSidenav();
  },
};
