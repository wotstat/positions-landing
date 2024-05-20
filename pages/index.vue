<template>
  <div class="page">

    <div class="main-container">
      <section class="l1">
        <div class="content flex">
          <div class="left">
            <div class="title">
              <h1>{{ $t('main.title') }}</h1>
              <h3 class="mod-description gray">
                Улучшите свою эффективность с помощью позиций для стрельбы, основанных на данных от лучших игроков.
                <!-- {{ $t('main.description') }} -->
              </h3>
              <div class="flex hor buttons tanks">
                <button v-for="tank in tanks" :class="selectedTank == tank ? 'active' : ''"
                  @click="selectedTank = tank">{{
                    $t(`tanks.${tank}`) }}</button>
                <button class="hover-disabled">И ещё 821</button>
              </div>

              <div class="flex hor buttons maps">
                <button v-for="map in maps" :class="selectedMap == map ? 'active' : ''" @click="selectedMap = map">{{
                  $t(`maps.${map}`) }}</button>
                <button class="hover-disabled">И ещё 40</button>
              </div>
            </div>
          </div>
          <div class="right" ref="rightContainerRef">
            <div class="map" :style="mapContainerStyle">
              <ThreeRotationMap :tank="selectedTank" :map="selectedMap" />
            </div>
          </div>
        </div>
      </section>


      <section class="l2">
        <h2>О модификации</h2>
        <h3 class="gray">Уникальная модификация разработанная для повышения вашей эффективности в бою.</h3>
        <h3 class="gray">
          Использует данные тепловых карт от лучших игроков на каждом танке для определения позиций
          нанесения урона.
        </h3>

        <div class="info-cards">
          <div class="info">
            <SvgoTank class="icon" />
            <h4>Позиции для каждого танка</h4>
            <p class="gray">
              Каждая позиция определяется индивидуально для каждого танка на основе анализа данных лучших игроков.
            </p>
          </div>

          <div class="info">
            <SvgoMap class="icon" />
            <h4>Поддержка всех карт</h4>
            <p class="gray">
              Модификация работает на всех игровых картах, постоянно обновляясь для поддержания актуальности данных.
            </p>
          </div>

          <div class="info">
            <SvgoTarget class="icon" />
            <h4>Понятный интерфейс</h4>
            <p class="gray">Модификация отображает понятный маркер позиции на миникарте и в 3D мире игры.</p>
          </div>
        </div>
      </section>

      <section class="l3">
        <h2>Как это работает</h2>
        <h3 class="gray">
          1. Из базы данных <a href="http://wotstat.info" target="_blank" rel="noopener noreferrer">WotStat</a>
          выбираются 5% лучших игроков* <br>
          2. Строится тепловая карта урона этих игроков.<br>
          3. Отбираются области с наибольшим уроном.<br>
          4. В каждой области
          выбирается наиболее популярная позиция.
        </h3>
        <p class="gray">
          * – лучшие игроки определяются по среднему урону за сессию из более чем 20 боёв. Если данных для
          построения тепловой карты недостаточно, то требуемый процент понижается (в основном это происходит на
          непопулярных танках)
        </p>

        <br>
        <br>

        <div class="demo">
          <div class="card">
            <h3>Наилучшая позиция на миникарте</h3>
            <h4 class="gray">Отображает наиболее эффективную позицию крупным маркером на миникарте</h4>
          </div>

          <div class="card">
            <h3>Наилучшая позиция в 3D</h3>
            <h4 class="gray">Наиболее эффективная позиция отображается прямо в игре крупным зелёным маркером</h4>
          </div>

          <div class="card">
            <h3>Эффективные позиции</h3>
            <h4 class="gray">
              Маленькими зелёными маркерами отображаются менее популярные, но всё ещё эффективные позиции.
              Выбор этих позиций
            </h4>
          </div>

          <div class="card">
            <h3>Эффективные области</h3>
            <h4 class="gray">по нажатию Alt</h4>
          </div>
        </div>

        <br>
        <br>

        <h3>Демонстрация работы</h3>
        <iframe width="560" height="315"
          src="https://www.youtube-nocookie.com/embed/zoDMW87S_kc?si=uxvd9imvf3a0gPA0&amp;controls=1"
          title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


        <div class="flex screenshots">
          <NuxtImg src="/screenshots/screen1.png" />
          <NuxtImg src="/screenshots/screen1.png" />
          <NuxtImg src="/screenshots/screen1.png" />
        </div>
      </section>

      <section class="l4">
        <h2>Инструкция</h2>
      </section>

      <section class="l5">
        <h2>Тарифы</h2>
      </section>

      <section class="l6">
        <h2>Часто задаваемые вопросы</h2>
      </section>

      <footer>
        <hr>
        <p>© 2021 - 2022</p>
      </footer>
    </div>

  </div>
</template>

<script setup lang="ts">

// import Map from '~/assets/icons/map.svg';

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

$large-color: #b5b5b5;
$width-limit: 1000px;

.page {
  position: relative;
  overflow: hidden;
}

.main-container {
  padding: 0px;

  section {
    padding: 0 50px;

    @media screen and (max-width: $width-limit) {
      padding: 0 20px;
    }
  }

  .l1 {

    .content {

      min-height: 100vh;

      .left {
        flex: 1;
        display: flex;
        align-items: center;
        margin-bottom: 0px;

        .mod-description {
          margin: 0.8em 0 1em 0;
        }

        h1 {
          white-space: nowrap;

          @media screen and (max-width: $width-limit) {
            white-space: normal;
            text-align: center;
          }
        }

        h2 {
          @media screen and (max-width: $width-limit) {
            text-align: center;
          }
        }
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
        flex-direction: column;

        .left {
          flex: 0;
          text-align: center;
        }

        .right {
          order: -1;
          min-height: 200px;
          max-height: 500px;
        }
      }
    }
  }

  .l2 {
    .info-cards {
      margin-top: 40px;
      display: flex;
      gap: 80px;

      @media screen and (max-width: $width-limit) {
        flex-direction: column;
        gap: 40px;
      }

      .info {
        flex: 1;

        .icon {
          color: $accent-color;
          height: 30px;
          width: auto;
        }
      }
    }
  }

  .l3 {
    margin-top: 200px;

    @media screen and (max-width: $width-limit) {
      margin-top: 100px;
    }


    .demo {
      display: grid;

      grid-template-columns: 1fr 1fr;
      gap: 20px;

      @media screen and (max-width: 700px) {
        grid-template-columns: 1fr;
      }

      .card {
        padding: 1.5rem;

        h4 {
          line-height: 1.25;
        }
      }

      // .card {
      //   padding: 20px;
      //   x
      //   box-shadow: 0 1px 2px 0px rgba(0, 0, 0, 0.1);
      //   background-color: $background-secondary;
      //   text-align: center;

      //   h3 {
      //     margin: 0;
      //   }

      //   h3.gray {
      //     color: $large-color;
      //   }
      // }
    }

    iframe {
      width: 100%;
      height: auto;
      aspect-ratio: 16 / 9;
      border-radius: 20px;
      margin: 20px 0;
      box-shadow: 0 1px 2px 0px rgba(0, 0, 0, 0.1);
    }

    .screenshots {
      gap: 20px;
      margin-top: 20px;
      justify-content: center;

      img {
        min-width: 0;
        border-radius: 20px;
        box-shadow: 0 1px 2px 0px rgba(0, 0, 0, 0.1);
      }

    }
  }
}

.gray {
  color: $large-color;
}

h1 {
  font-size: 4em;
  font-weight: 900;
  margin: 0;

  @media screen and (max-width: $width-limit) {
    font-size: 2.8em;
  }

  @media screen and (max-width: 512px) {
    font-size: 2.5em;
  }
}

h2 {
  font-size: 3em;
  line-height: 1.4;
  margin: 1em 0 0.4em 0;

  @media screen and (max-width: $width-limit) {
    font-size: 2em;
  }

  @media screen and (max-width: 512px) {
    font-size: 1.8em;
  }
}

h3 {
  font-size: 1.5em;
  line-height: 1.5em;
  font-weight: bold;
  margin: 0;

  @media screen and (max-width: $width-limit) {
    font-size: 1.2em;
  }

  @media screen and (max-width: 512px) {
    font-size: 1.1em;
  }
}

h4 {
  font-size: 1.3em;
  font-weight: bold;
  margin: 0.5em 0 0.2em 0;

  @media screen and (max-width: $width-limit) {
    font-size: 1.1em;
  }

  @media screen and (max-width: 512px) {
    font-size: 1em;
  }
}

p {
  font-size: 1.2em;
  line-height: 1.25em;
  margin: 0;

  @media screen and (max-width: 512px) {
    font-size: 1em;
  }
}
</style>