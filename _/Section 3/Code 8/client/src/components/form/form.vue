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
    props: {
      inline: {
        type: Boolean,
        required: false,
      },
    },
    computed: {
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
