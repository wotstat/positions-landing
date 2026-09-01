<template>
  <ContentRenderer v-if="page" :value="page" />
</template>


<script setup lang="ts">
const props = defineProps<{
  part: string;
  preventSeo?: boolean;
}>()

const { locale } = useI18n()
const contentPath = computed(() => `/${locale.value}/${props.part}`)
const contentKey = computed(() => `content:${contentPath.value}`)
const { data: page } = await useAsyncData(
  contentKey,
  () => queryCollection('content').path(contentPath.value).first(),
)

if (props.preventSeo !== true) {
  useSeoMeta({
    title: page.value?.title,
    description: page.value?.description
  })
}
</script>


<style lang="scss" scoped></style>
