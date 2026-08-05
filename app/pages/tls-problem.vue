<template>
  <div class="main-container">
    <ContentDoc part="tls-problem" class="markdown" />
  </div>
</template>


<style lang="scss" scoped>
.main-container {
  padding: 20px;
  max-width: 1200px;

  :deep(.markdown) {
    p {
      margin: 1em 0;
    }
  }
}
</style>