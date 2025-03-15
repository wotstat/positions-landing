<template>
  <ContentRenderer v-if="page" :value="page" />
</template>


<script setup lang="ts">
const props = defineProps<{
  part: string;
}>()

const { locale } = useI18n()
const { data: page } = await useAsyncData(() => queryCollection('content').path(`/${locale.value}/${props.part}`).first())

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description
})
</script>


<style lang="scss" scoped></style>