<style lang="scss">
  .button {
    background-color: #fff;
    border: none;
    color: #000;
    cursor: pointer;
    font-size: 16px;
    outline: none;
    padding: 8px 10px;
  }

  .button--reversed {
    background-color: #000;
    border: 2px solid #fff;
    color: #fff;
    padding: 6px 8px;

    &:hover {
      background-color: #fff;
      color: #000;
    }
  }

  .button--large {
    font-size: 20px;
    padding: 16px 32px;
  }

  .button--disabled {
    cursor: not-allowed;
    opacity: .5;
  }
</style>
<template>
  <button :class="classNames">
    <slot></slot>
  </button>
</template>
<script>
  export default {
    /**
     * The properties which the component can use.
     */
    props: {
      /**
       * If the button is large.
       */
      large: {
        type: Boolean,
        required: false,
      },

      /**
       * If the button is disabled.
       */
      disabled: {
        type: Boolean,
        required: false,
      },

      /**
       * If the button is reversed.
       */
      reversed: {
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
        const classNames = ['button'];

        if (this.large) {
          classNames.push('button--large');
        }

        if (this.reversed) {
          classNames.push('button--reversed');
        }

        if (this.disabled) {
          classNames.push('button--disabled');
        }

        return classNames;
      },
    },
  };
</script>
