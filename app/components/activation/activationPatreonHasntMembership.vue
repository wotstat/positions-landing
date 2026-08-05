<template>
  <div class="error-header">
    {{ $t('activation.result.patreon.hasntMembership').toUpperCase() }}
  </div>
  <br>
  <p>{{ $t('activation.page.patreon.hasntMembership') }}</p>
  <br>
  <p v-html="$t('activation.page.patreon.hasntMembershipDescription')"></p>
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