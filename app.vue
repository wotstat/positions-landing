<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <button @click="setLocale('en')">en</button>
    <button @click="setLocale('ru')">ru</button>
  </div>
</template>


<script setup lang="ts">

useSeoMeta({
  title: 'Positions WotStat',
  description: 'Мод для World of Tanks, который показывает эффективные позиции в бою. От разработчиков сервиса WotStat.',
})


const { locale, setLocale } = useI18n()
</script>


<style lang="scss">
@use "~/assets/scss/main.scss";
</style>