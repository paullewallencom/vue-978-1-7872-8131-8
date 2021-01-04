<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { router } from './bootstrap';

export default {
  name: 'GitHubApplication',

  router,
}
</script>
