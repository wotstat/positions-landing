<template>
  <div class="page">

    <div class="main-container">
      <div class="l1 flex">
        <div class="left">
          <h1>{{ $t('main.title') }}</h1>
          <h2 class="mod-description">
            Позиции для эффективного нанесения урона в играх World&nbsp;of&nbsp;Tanks и Мир&nbsp;Танков.
            <!-- {{ $t('main.description') }} -->
          </h2>
        </div>
        <div class="right">
          <ThreeRotationMap />
          <!-- <img src="https://placehold.co/500x500" alt=""> -->
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">


</script>


<style scoped lang="scss">
.page {
  position: relative;
  overflow: hidden;
}

.main-container {
  padding: 20px;

  .l1 {
    height: 90vh;
    align-items: center;
    gap: 40px;

    .left {
      flex: 1;
      margin-bottom: 100px;
    }

    .right {
      flex: 0.8;
      width: 100%;
      height: 100%;
      // background-color: rgba(32, 166, 166, 0.066);

      img {
        width: 100%;
        height: auto;
      }
    }

    h1 {
      font-size: 4em;
      font-weight: 900;
      margin: 0;
    }

    h2 {
      font-size: 1.2em;
      line-height: 1.4;
      color: #cecece;
      margin: 0;
    }

    @media screen and (max-width: 1000px) {
      flex-direction: column-reverse;

      h1,
      h2 {
        text-align: center;
      }
    }

    @media screen and (max-width: 512px) {
      h1 {
        font-size: 3em;
      }
    }
  }

  // h1 {
  //   text-align: left;

  //   @media screen and (max-width: 768px) {
  //     font-size: 2em;
  //   }

  // }

  // h2.mod-description {
  //   text-align: left;
  //   font-size: 1em;
  //   font-weight: 400;
  //   max-width: 80%;
  //   line-height: 1.4;
  //   white-space: pre-wrap;
  // }
}
</style>