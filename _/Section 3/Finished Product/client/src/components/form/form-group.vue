<style lang="scss">
  .form__group {
    display: flex;
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .form__group--inline {
    margin-bottom: 0;
    margin-left: 16px;

    &:first-child {
      margin-left: 0;
    }
  }

  .form__group--full {
    flex: 1;
    align-self: stretch;
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
       * If the form group is displayed inline.
       */
      inline: {
        type: Boolean,
        required: false,
      },

      /**
       * If the form takes up the full width.
       */
      fullWidth: {
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
        const classNames = ['form__group'];

        if (this.inline) {
          classNames.push('form__group--inline');
        }

        if (this.fullWidth) {
          classNames.push('form__group--full');
        }

        return classNames;
      },
    },
  };
</script>
