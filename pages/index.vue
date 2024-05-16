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
          <div class="flex buttons tanks">
            <button v-for="tank in tanks" :class="selectedTank == tank ? 'active' : ''" @click="selectedTank = tank">{{
            $t(`tanks.${tank}`) }}</button>
            <button class="hover-disabled">И ещё 684</button>
          </div>

          <div class="flex buttons maps">
            <button v-for="map in maps" :class="selectedMap == map ? 'active' : ''" @click="selectedMap = map">{{
            $t(`maps.${map}`) }}</button>
            <button class="hover-disabled">И ещё 24</button>
          </div>
        </div>
        <div class="right">
          <ThreeRotationMap :tank="selectedTank" :map="selectedMap" />
          <!-- <img src="https://placehold.co/500x500" alt=""> -->
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

const selectedTank = ref<string>('conqueror');
const selectedMap = ref<string>('murovanka');

const tanks = ['conqueror', 'concept', 'jagdPz', 'ob261', 'even']
const maps = ['paris', 'murovanka', 'steppes']


</script>


<style scoped lang="scss">
@import "~/assets/scss/colors.scss";

.page {
  position: relative;
  overflow: hidden;
}

.main-container {
  padding: 0px;

  .l1 {
    height: 90vh;
    padding: 0 50px;
    align-items: center;
    gap: 40px;
    $width-limit: 1000px;

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

    .buttons {
      margin-top: 10px;
      gap: 8px;
      flex-wrap: wrap;

      @media screen and (max-width: $width-limit) {
        justify-content: center;
        font-size: 14px;
      }

      button {
        border-radius: 50px;
        background-color: $background-secondary;
        padding: 7px 20px;

        &.hover-disabled {
          cursor: default;

          &:hover {
            border-color: transparent;
          }
        }

        &.active {
          background-color: $accent-color;
          color: $background-color;
        }
      }
    }

    @media screen and (max-width: $width-limit) {

      height: unset;
      padding: 0 20px;
      flex-direction: column-reverse;

      .left {
        margin-top: -50px;
      }

      .right {
        min-height: 50vh;
        display: grid;
      }

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
}
</style>