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

        <div class="gradient"></div>
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

        <br>
        <br>

        <div class="demo">

          <div class="card">
            <div class="info">
              <h3>Наилучшая позиция в 3D</h3>
              <h4 class="gray">Наиболее эффективная позиция отображается прямо в игре крупным зелёным маркером.</h4>
            </div>

            <div class="image-container">
              <NuxtImg src="/screenshots/demo/marker3d.png" />
            </div>
          </div>

          <div class="card">
            <div class="info">
              <h3>Наилучшая позиция на миникарте</h3>
              <h4 class="gray">Отображает наиболее эффективную позицию крупным маркером на миникарте.</h4>
            </div>

            <div class="image-container">
              <NuxtImg src="/screenshots/demo/best.png" />
            </div>
          </div>

          <div class="card">
            <div class="info">
              <h3>Эффективные позиции</h3>
              <h4 class="gray">
                Маленькими зелёными маркерами отображаются менее популярные, но всё ещё эффективные позиции.
              </h4>
            </div>

            <div class="image-container">
              <NuxtImg src="/screenshots/demo/marker3d.png" />
            </div>
          </div>

          <div class="card">
            <div class="info">
              <h3>Эффективные области</h3>
              <h4 class="gray">
                Иногда оптимальным местом является не конкретная точка, а целая область на карте.
              </h4>
              <p class="gray">Отображается по удержанию Alt</p>
            </div>

            <div class="image-container">
              <NuxtImg src="/screenshots/demo/marker3d.png" />
            </div>
          </div>

          <div class="card">
            <div class="info">
              <h3>Качество рекомендации</h3>
              <h4 class="gray">
                Над миникартой отображается сообщение с описывающее качество рекомендуемых позиций. <a
                  href="/info-message" target="_blank" rel="noopener noreferrer">Подробнее.</a>
              </h4>
            </div>

            <div class="image-container">
              <NuxtImg src="/screenshots/demo/marker3d.png" />
            </div>
          </div>

          <div class="card">
            <div class="info">
              <h3>Настройки</h3>
              <h4 class="gray">
                Мод можно сконфигурировать под себя, настроив отображение всех видов маркеров.
              </h4>
              <p class="gray">Необходим ModSettingsApi</p>
            </div>

            <div class="image-container">
              <NuxtImg src="/screenshots/demo/marker3d.png" />
            </div>
          </div>
        </div>

        <h3 class="margin-top">Демонстрация работы</h3>
        <iframe width="560" height="315"
          src="https://www.youtube-nocookie.com/embed/zoDMW87S_kc?si=uxvd9imvf3a0gPA0&amp;controls=1"
          title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <div class="flex screenshots">
          <NuxtImg format="webp" sizes="sm: 200px md:400px" src="/screenshots/screen1.png" />
          <NuxtImg format="webp" sizes="sm: 200px md:400px" src="/screenshots/screen1.png" />
          <NuxtImg format="webp" sizes="sm: 200px md:400px" src="/screenshots/screen1.png" />
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
        <p class="gray">
          * – лучшие игроки определяются по среднему урону за сессию из более чем 20 боёв. Если данных для
          построения тепловой карты недостаточно, то требуемый процент понижается (в основном это происходит на
          непопулярных танках)
        </p>
        <br>
        <br>
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

  footer {
    padding: 0 50px;

    @media screen and (max-width: $width-limit) {
      padding: 0 20px;
    }
  }

  .l1 {

    .content {
      position: relative;
      z-index: 2;

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

    .gradient {
      user-select: none;
      position: absolute;
      top: 20vh;
      right: 35vw;
      transform: translate(50%, -50%);
      width: 220vh;
      height: 220vh;
      z-index: 0;
      opacity: 0.8;
      mix-blend-mode: screen;
      background-blend-mode: overlay;
      background: url('data:image/png;base64,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'),
        radial-gradient(circle farthest-corner at 0 0, #000 30%, #243c9ac4 65%, #31dd1417 80%, #00000000 110%) no-repeat,
        radial-gradient(closest-side at 60% 50%, #1145439e 20%, #000 100%) no-repeat;

      @media screen and (max-width: $width-limit) {

        right: -10vh;
      }
    }
  }

  .l2 {
    position: relative;
    z-index: 2;

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

      grid-template-columns: 1fr 1fr 1fr;
      gap: 20px;

      @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
      }


      @media screen and (max-width: 700px) {
        grid-template-columns: 1fr;
      }

      .card {
        padding: 1.5rem;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        gap: 2em;

        h4 {
          line-height: 1.25;
        }

        .image-container {
          margin-top: auto;
          display: flex;

          img {
            flex: 1;
            width: 0;
            border-radius: 10px;
            box-shadow: 0 1px 2px 0px rgba(0, 0, 0, 0.1);
          }
        }
      }

    }

    .margin-top {
      margin-top: 40px;
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
      // margin-top: 20px;
      justify-content: center;


      @media screen and (max-width: 700px) {
        flex-direction: column;
      }

      img {
        flex: 1;
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