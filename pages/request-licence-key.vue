<template>
  <Activation :requestId />
</template>

<script setup lang="ts">

const route = useRoute()

const requestId = computed(() => route.query.requestId as string)

</script>