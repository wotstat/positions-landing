<template>
  <According>
    <template #header>
      <h4>{{ title }}</h4>
    </template>
    <template #panel>
      <p class="gray" v-if="content">{{ content }}</p>
      <template class="gray" v-if="contentHtml">
        <div v-html="contentHtml"></div>
      </template>
      <slot></slot>
    </template>
  </According>
</template>


<script setup lang="ts">

defineProps<{
  title: string
  content?: string
  contentHtml?: string
}>()

</script>
