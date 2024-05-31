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
useHead({
  script: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-KP1NPLTYX0',
      async: true,
    },
    {
      type: 'text/javascript',
      fetchpriority: 'high',
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-KP1NPLTYX0');
      `,
    },
  ],
})

</script>


<style lang="scss">
@use "~/assets/scss/main.scss";
</style>