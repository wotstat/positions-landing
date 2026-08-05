<template>
  <Activation :requestId isPatreonRedirect />
</template>


<script setup lang="ts">

const route = useRoute();
const requestId = computed(() => route.query.state as string);
</script>


<style lang="scss" scoped></style>