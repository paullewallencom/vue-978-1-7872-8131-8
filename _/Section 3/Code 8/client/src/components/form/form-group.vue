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
    align-selft: stretch;
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
      inline: {
        type: Boolean,
        required: false,
      },
      fullWidth: {
        type: Boolean,
        required: false,
      },
    },
    computed: {
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
