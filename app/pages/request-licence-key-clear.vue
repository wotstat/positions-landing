<template>
  <ClientOnly>
    <Activation :requestId="requestId" :clear="true" />
  </ClientOnly>
</template>

<script setup lang="ts">

const route = useRoute()

const requestId = computed(() => {
  return route.query.requestId as string
})

</script>
