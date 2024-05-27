<template>
  <According>
    <template #header>
      <h4>{{ title }}</h4>
    </template>
    <template #panel>
      <p class="gray">{{ content }}</p>
      <slot></slot>
    </template>
  </According>
</template>


<script setup lang="ts">

defineProps<{
  title: string
  content?: string
}>()

</script>
