<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>


<script setup lang="ts">

useSeoMeta({
  title: 'Позиции от WotStat',
  description: 'Мод для World of Tanks, который показывает эффективные позиции в бою. От разработчиков сервиса WotStat.',
})


</script>


<style lang="scss">
@use "~/assets/scss/main.scss";
</style>