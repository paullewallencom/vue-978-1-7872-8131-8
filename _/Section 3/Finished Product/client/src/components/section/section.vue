<style lang="scss">
  .section {
    padding: 16px;
    display: flex;
    flex-direction: column;
  }

  .section--black {
    background-color: #000;
  }

  .section--white {
    background-color: #fff;
  }

  .section--full {
    align-items: baseline;
    flex: 1;
    align-self: stretch;
    overflow: auto;
  }
</style>
<template>
  <div :class="classNames">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    /**
     * The properties which the component can use.
     */
    props: {
      /**
       * The color of the section.
       */
      color: {
        type: String,
        required: false,
      },

      /**
       * If the section takes up the full height.
       */
      full: {
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
        const classNames = ['section'];

        if (this.color) {
          classNames.push(`section--${this.color}`);
        }

        if (this.full) {
          classNames.push('section--full');
        }

        return classNames;
      },
    },
  };
</script>
