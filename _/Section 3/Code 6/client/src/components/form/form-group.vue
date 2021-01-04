<style lang="scss">
  .form__group {
    display: flex;
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
<template>
  <div class="form__group">
    <slot></slot>
  </div>
</template>
<script>
  export default {};
</script>
