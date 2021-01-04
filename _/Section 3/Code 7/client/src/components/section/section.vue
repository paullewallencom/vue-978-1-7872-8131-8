<style lang="scss">
  .section {
    padding: 16px;
    display: flex;
    flex-direction: column;
  }

  .section--black {
    background-color: #000;
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
    props: {
      color: {
        type: String,
        required: false,
      },
      full: {
        type: Boolean,
        required: false,
      },
    },
    computed: {
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
