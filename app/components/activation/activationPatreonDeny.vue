<template>
  <div class="error-header">
    {{ $t('activation.result.patreon.deny').toUpperCase() }}
  </div>
  <br>
  <p v-html="$t('activation.page.patreon.denyDescription')"></p>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
@use "~/assets/scss/activation.scss";

a {
  cursor: pointer;
}
</style>