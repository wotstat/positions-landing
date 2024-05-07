<template>
  <Activation :requestId="requestId" />
</template>

<script setup lang="ts">

const route = useRoute()

const requestId = computed(() => {
  return route.query.requestId as string
})

</script>