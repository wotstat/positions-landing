<template>
  <div class="page">

    <div class="main-container">
      <div class="l1 flex">
        <div class="left">
          <div class="title">
            <h1>{{ $t('main.title') }}</h1>
            <h2 class="mod-description">
              Позиции для эффективного нанесения урона в играх World&nbsp;of&nbsp;Tanks и Мир&nbsp;Танков.
              <!-- {{ $t('main.description') }} -->
            </h2>
            <div class="flex hor buttons tanks">
              <button v-for="tank in tanks" :class="selectedTank == tank ? 'active' : ''"
                @click="selectedTank = tank">{{
              $t(`tanks.${tank}`) }}</button>
              <button class="hover-disabled">И ещё 684</button>
            </div>

            <div class="flex hor buttons maps">
              <button v-for="map in maps" :class="selectedMap == map ? 'active' : ''" @click="selectedMap = map">{{
              $t(`maps.${map}`) }}</button>
              <button class="hover-disabled">И ещё 24</button>
            </div>
          </div>
        </div>
        <div class="right" ref="rightContainerRef">
          <div class="map" :style="mapContainerStyle">
            <ThreeRotationMap :tank="selectedTank" :map="selectedMap" />
          </div>
        </div>
      </div>


      <div class="l2">

      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

const rightContainerRef = ref<HTMLElement | null>(null);
const { width, height } = useElementBounding(rightContainerRef);
const mapContainerStyle = computed(() => ({
  width: Math.min(width.value, height.value) + 'px',
  height: Math.min(width.value, height.value) + 'px',
}))

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
    min-height: 90vh;
    padding: 0 50px;
    $width-limit: 1000px;

    .left {
      flex: 1;
      display: flex;
      align-items: center;
      margin-bottom: 0px;

      // background-color: rgba(70, 157, 234, 0.219);
    }

    .right {
      flex: 0.8;
      width: 100%;
      position: relative;


      // background-color: rgba(201, 70, 234, 0.219);

      .map {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        // background-color: rgba(63, 197, 11, 0.293);
      }
    }

    h1 {
      font-size: 4em;
      font-weight: 900;
      margin: 0;
    }

    h2 {
      font-size: 1.4em;
      line-height: 1.4;
      color: #cecece;
      margin: 0.8em 0 1em 0;
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
        white-space: nowrap;

        @media screen and (max-width: 512px) {
          flex: 1;
        }

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
      flex-direction: column;

      .left {
        flex: 0;
      }

      .right {
        order: -1;
        min-height: 200px;
        max-height: 500px;
      }

      h1,
      h2 {
        text-align: center;
      }

      h1 {
        font-size: 2.8em;
      }

      h2 {
        font-size: 1.2em;
      }
    }

    @media screen and (max-width: 512px) {
      h1 {
        font-size: 2.5em;
      }

      h2 {
        font-size: 1em;
      }
    }


  }
}
</style>