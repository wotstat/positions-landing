<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>


<script setup lang="ts">
const yandexMetrikaId = Number.parseInt(import.meta.env.VITE_YANDEX_METRIKA_ID)

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
    {
      type: 'text/javascript',
      fetchpriority: 'high',
      innerHTML: `
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(${yandexMetrikaId}, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
        });
      `,
    }
  ],
})

</script>


<style lang="scss">
@use "~/assets/scss/main.scss";
</style>