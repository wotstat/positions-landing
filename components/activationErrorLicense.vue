<template>
  <div class="error-header">
    НЕВЕРНЫЙ КЛЮЧ
  </div>
  <br>
  <p>Вы пытались активировать ключ: <code>{{ license }}</code></p>
  <br>
  <p>Такого ключа не существует или его срок лицензии уже истёк. Убедитесь, что вводите верный ключ.</p>
  <br>
  <a @click="emit('reset')">Попробовать другой ключ</a>
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