<template>
  <div class="success-header">
    {{ $t('activation.result.success').toUpperCase() }}
  </div>
  <br>
  <p v-html="$t('activation.page.successDescription')"></p>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/activation.scss";
</style>