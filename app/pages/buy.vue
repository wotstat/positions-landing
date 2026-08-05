<template>
  <div class="container">

    <div class="card">
      <h1>Купить лицензионный ключ</h1>
      <Buy />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>


<style lang="scss" scoped>
@use "~/assets/scss/colors.scss" as *;

$border: 1px solid #505050bd;

.container {
  margin: auto;
  max-width: 900px;

  .card {
    margin: 50px;
    padding: 20px;
    position: relative;

    h1 {
      font-size: 2em;
      margin-top: 0;
      margin-bottom: 10px;
    }
  }

}
</style>