<style lang="scss">
  .form {
    display: flex;
    flex-direction: column;
  }

  .form--inline {
    flex-direction: row;
  }
</style>
<template>
  <form :class="classNames">
    <slot></slot>
  </form>
</template>
<script>
  export default {
    /**
     * The properties which the component can use.
     */
    props: {
      /**
       * If the form is displayed inline.
       */
      inline: {
        type: Boolean,
        required: false,
      },
    },

    /**
     * The computed properties which the component can use.
     */
    computed: {
      /**
       * The CSS classes of the component.
       *
       * @returns {Array} The array of CSS classes.
       */
      classNames() {
        const classNames = ['form'];

        if (this.inline) {
          classNames.push('form--inline');
        }

        return classNames;
      },
    },
  };
</script>
