<template>
  <div class="error-header">
    {{ $t('activation.result.incorrect').toUpperCase() }}
  </div>
  <br>
  <p>
    {{ $t('activation.page.youTryToActivateLicense') }}
    <code>{{ license }}</code>
  </p>
  <br>
  <p>{{ $t('activation.page.incorrectDescription') }}</p>
  <br>
  <a @click="emit('reset')">{{ $t('activation.page.tryAnotherKey') }}</a>
</template>

<script setup lang="ts">

const props = defineProps<{
  license: string
}>()

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