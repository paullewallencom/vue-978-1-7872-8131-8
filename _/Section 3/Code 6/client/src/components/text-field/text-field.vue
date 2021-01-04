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
    props: {
      value: {
        type: String,
        required: false,
      },

      large: {
        type: Boolean,
        required: false,
      },
    },
    computed: {
      classNames() {
        const classNames = ['text-field'];

        if (this.large) {
          classNames.push('text-field--large');
        }

        return classNames;
      },
    },
    methods: {
      updateInput(value) {
        this.$emit('input', value);
      },
    },
  };
</script>
