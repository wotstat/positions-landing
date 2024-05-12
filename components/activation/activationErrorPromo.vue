<template>
  <div class="warning-header">
    {{ $t('activation.result.promoAlreadyActivated').toUpperCase() }}
  </div>
  <br>
  <p>
    {{ $t('activation.page.youTryToActivatePromo') }}
    <code>{{ license }}</code>
  </p>
  <br>
  <p>{{ $t('activation.page.promoAlreadyActivatedDescription') }}</p>
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