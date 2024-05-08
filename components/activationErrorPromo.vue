<template>
  <div class="warning-header">
    УЖЕ АКТИВИРОВАН
  </div>
  <br>
  <p>Вы пытались активировать промо-код: <code>{{ license }}</code></p>
  <br>
  <p>Этот код уже был активирован ранее. Если это Вы активировали его раньше, то вам был предоставлен лицензионный ключ,
    для повторной активации следует использовать его</p>
  <br>
  <a @click="emit('reset')">Попробовать другой код</a>
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
  // color: $color-primary;
  cursor: pointer;
}
</style>