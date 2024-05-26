<template>
  <div class="container">

    <div class="card">
      <Buy />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>


<style lang="scss" scoped>
@import "~/assets/scss/colors.scss";

$border: 1px solid #505050bd;

.container {
  margin: auto;
  max-width: 900px;

  .card {
    margin: 50px;
    padding: 20px;
    position: relative;


  }

}
</style>