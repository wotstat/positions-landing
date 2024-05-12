<template>
  <div class="warning-header">
    {{ $t('activation.result.expired').toUpperCase() }}
  </div>
  <br>
  <p>
    {{ $t('activation.page.youTryToActivateLicense') }}
    <code>{{ license }}</code>
  </p>
  <br>
  <p>{{ $t('activation.page.expiredDescription') }}</p>
  <br>
  <a @click="emit('reset')">{{ $t('activation.page.tryAnotherKey') }}</a>
</template>

<script setup lang="ts">

defineProps<{
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