<template>
  <div>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">

    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="description" />
      <Meta property="og:title" :content="title" />
      <Meta property="og:description" :content="description" />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://positions.wotstat.info" />
      <Meta property="og:image" :content="`https://positions.wotstat.info/og/${locale}.jpg`" />

      <Link rel="icon" type="image/png" href="/favicon.png" />

      <template v-for="link in head.link" :key="link.id">
        <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
      </template>

    </Head>

    <Body>
      <slot></slot>
    </Body>

    </Html>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { t, locale } = useI18n()
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})
const title = computed(() => t(route.meta.title ? `${route.meta.title}` : 'meta.title'))
const description = computed(() => t(route.meta.description ? `${route.meta.description}` : 'meta.description'))


</script>