<style lang="scss">
  .body {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
  }
</style>
<template>
  <div class="body">
    <slot></slot>
  </div>
</template>
<script>
  export default {};
</script>
