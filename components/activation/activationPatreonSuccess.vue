<template>
  <div class="success-header">
    {{ $t('activation.result.patreon.success').toUpperCase() }}
  </div>
  <br>
  <p v-html="$t('activation.page.patreon.successDescription')"></p>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/activation.scss";
</style>