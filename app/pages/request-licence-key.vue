<template>
  <header>
    <LanguageSwitcher class="language-switcher" />
  </header>
  <ClientOnly>
    <Activation :requestId />
  </ClientOnly>
</template>

<script setup lang="ts">

const route = useRoute()

const requestId = computed(() => route.query.requestId as string)

</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: flex-end;
  max-width: 800px;
  margin: auto;
  margin-bottom: -50px;
}
</style>
