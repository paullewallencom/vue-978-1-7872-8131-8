<style lang="scss">
  .text-field {
    color: #fff;
    border: none;
    background-color: transparent;
    outline: none;
    width: 100%;
    padding: 8px 6px 6px;
    font-size: 16px;
    border-bottom: 2px solid #fff;
  }

  .text-field--large {
    padding: 16px 8px 12px;
    font-size: 20px;
    border-bottom: 4px solid #fff;
  }
</style>
<template>
  <input
    :class="classNames"
    type="text"
    :value="value"
    @input="updateInput($event.target.value)"
  >
</template>
<script>
  export default {
    /**
     * The properties which the component can use.
     */
    props: {
      /**
       * The value for the v-model binding.
       */
      value: {
        type: String,
        required: false,
      },

      /**
       * If the text field is large.
       */
      large: {
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
        const classNames = ['text-field'];

        if (this.large) {
          classNames.push('text-field--large');
        }

        return classNames;
      },
    },

    /**
     * The methods which the component can use.
     */
    methods: {
      /**
       * This method will emit an event when the input has been updated.
       *
       * @param {*} value The value to be updated.
       */
      updateInput(value) {
        this.$emit('input', value);
      },
    },
  };
</script>
