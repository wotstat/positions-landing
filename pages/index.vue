<template>
  <div class="main-container">
    <h1>{{ $t('main.title') }}</h1>
    <h2 class="mod-description">
      {{ $t('main.description') }}
    </h2>
  </div>
</template>

<script setup lang="ts">


</script>


<style scoped lang="scss">
.main-container {
  padding: 20px;

  h1 {
    text-align: center;
    margin-top: 200px;

    @media screen and (max-width: 768px) {
      font-size: 2em;
    }

  }

  h2.mod-description {
    margin: auto;
    text-align: center;
    font-size: 1em;
    font-weight: 400;
    max-width: 80%;
    line-height: 1.4;
    white-space: pre-wrap;

    @media screen and (max-width: 768px) {
      text-align: left;
      max-width: 100%;
    }

  }
}
</style>