<template>
  <div class="error-header">
    {{ $t('activation.result.patreon.error').toUpperCase() }}
  </div>
  <br>
  <p v-html="$t('activation.page.patreon.error')"></p>
  <br>
  <p v-html="$t('activation.page.patreon.errorDescription')"></p>
  <br>
  <a @click="emit('reset')">{{ $t('activation.page.tryStartOver') }}</a>
</template>

<script setup lang="ts">


const emit = defineEmits<{
  reset: []
}>()

</script>

<style lang="scss" scoped>
@use "~/assets/scss/activation.scss";

a {
  cursor: pointer;
}
</style>