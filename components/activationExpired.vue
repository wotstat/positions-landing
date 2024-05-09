<template>
  <div class="warning-header">
    ЛИЦЕНЗИЯ ИСТЕКЛА
  </div>
  <br>
  <p>Вы пытались активировать лицензионный ключ: <code>{{ license }}</code></p>
  <br>
  <p>Срок действия этого лицензионного ключа истёк. Вы можете приобрести новый ключ</p>
  <br>
  <a @click="emit('reset')">Попробовать другой код</a>
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