<template>
  <div>

    <Head>
      <Script :src="`https://www.googletagmanager.com/gtag/js?id=${gtm}`" async></Script>
      <Script type="text/javascript" fetchpriority="high">
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', {{ gtm }});
      </Script>
    </Head>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>


<script setup lang="ts">
const gtm = "G-KP1NPLTYX0"

useSeoMeta({
  title: 'Позиции от WotStat',
  description: 'Мод для World of Tanks, который показывает эффективные позиции в бою. От разработчиков сервиса WotStat.',
})

</script>


<style lang="scss">
@use "~/assets/scss/main.scss";
</style>