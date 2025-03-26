<template>
  <div class="page" id="top">

    <header>
      <div class="content" :class="[mounted && scrollY > 2 ? '' : 'top', burgerMenuOpen ? 'menu-opened' : '']">
        <div class="header-container large">
          <div class="left">
            <a @click="scrollTo('top')" class="logo">
              <img src="/favicon_128.png" alt="favicon" />
              {{ $t('main.header.title') }}
            </a>
          </div>
          <div class="center">
            <a @click="scrollTo('info')">{{ $t('main.header.description') }}</a>
            <a @click="scrollTo('how-to')">{{ $t('main.header.howToUse') }}</a>
            <a @click="scrollTo('demo')">{{ $t('main.header.demo') }}</a>
            <a @click="scrollTo('pricing')">{{ $t('main.header.price') }}</a>
            <a @click="scrollTo('instruction')">{{ $t('main.header.instructions') }}</a>
          </div>
          <div class="right">
            <LanguageSwitcher class="language-switcher" />
            <a class="buy" @click="buy">{{ $t('main.header.buy') }}</a>
            <a :href="discordUrl" target="_blank" rel="noopener noreferrer">
              <SvgoDiscordMarkWhite class="icon" />
            </a>
          </div>
        </div>

        <div class="header-container small">
          <div class="left">
            <a @click="scrollTo('top')" class="logo">
              <NuxtPicture src="/favicon.png" />
              {{ $t('main.header.title') }}
            </a>
          </div>
          <div class="right">
            <LanguageSwitcher class="language-switcher" />
            <a class="buy" @click="buy">{{ $t('main.header.buy') }}</a>
            <SvgoBurgerMenu class="burger-menu" @click="openModal" v-if="!burgerMenuOpen" />
            <SvgoX class="burger-menu" @click="closeModal" v-else />
          </div>
        </div>
      </div>
    </header>

    <div class="menu" v-if="burgerMenuOpen" :class="mounted && scrollY > 2 ? '' : 'top'">
      <a @click="clickMenu('info')">{{ $t('main.header.description') }}</a>
      <a @click="clickMenu('how-to')">{{ $t('main.header.howToUse') }}</a>
      <a @click="clickMenu('demo')">{{ $t('main.header.demo') }}</a>
      <a @click="clickMenu('pricing')">{{ $t('main.header.price') }}</a>
      <a @click="clickMenu('instruction')">{{ $t('main.header.instructions') }}</a>
      <hr>
      <a :href="discordUrl" target="_blank" rel="noopener noreferrer">
        {{ $t('main.header.connectToDiscord') }}
        <SvgoDiscordMarkWhite class="icon" />
      </a>
      <hr>
      <br>
      <a class="buy" @click="buy">{{ $t('main.header.buy') }}</a>
      <div class="flex-1" />


    </div>

    <div class="main-container">
      <section class="l1">
        <div class="content flex">
          <div class="left">
            <div class="title">
              <h1>{{ $t('main.l1.title') }}
                <SvgoV2Badge class="v2-badge" />
              </h1>
              <h3 class="mod-description gray">
                {{ $t('main.l1.description') }}
              </h3>
              <div class="flex hor buttons tanks">
                <button v-for="tank in tanks" :class="selectedTank == tank ? 'active' : ''"
                  @click="selectedTank = tank">{{
                    $t(`tanks.${tank}`) }}</button>
                <button class="hover-disabled"> {{ $t('main.l1.andMoreTanks') }}</button>
              </div>

              <div class="flex hor buttons maps">
                <button v-for="map in maps" :class="selectedMap == map ? 'active' : ''" @click="selectedMap = map">
                  {{ $t(`maps.${map}`) }}
                </button>
                <button class="hover-disabled">{{ $t('main.l1.andMoreMaps') }}</button>
              </div>

              <div class="update-info">
                <p>{{ $t('main.l1.update2.title') }}
                  <SvgoV2Badge class="v2-badge" />. {{ $t('main.l1.update2.description') }}
                  <RouterLink to="/whats-new-2" target="_blank">{{ $t('main.l1.update2.more') }}
                  </RouterLink>
                </p>
              </div>
            </div>
          </div>
          <div class="right" ref="rightContainerRef">
            <div class="map" :style="mapContainerStyle">
              <ThreeRotationMap :tank="selectedTank" :map="selectedMap" @on-ready="onRender" />
            </div>
            <div class="placeholder" v-if="!loaded">
              <img src="/public/minimap/map.webp">
            </div>
          </div>
        </div>

        <div class="gradient"></div>
      </section>


      <section class="l2">
        <h2 id="info">{{ $t('main.l2.title') }}</h2>
        <h3 class="gray">{{ $t('main.l2.description') }}</h3>
        <h3 class="gray">{{ $t('main.l2.description2') }}</h3>

        <div class="info-cards">
          <div class="info">
            <SvgoTank class="icon" />
            <h4>{{ $t('main.l2.info1.title') }}</h4>
            <p class="gray">{{ $t('main.l2.info1.description') }}</p>
          </div>

          <div class="info">
            <SvgoMap class="icon" />
            <h4>{{ $t('main.l2.info2.title') }}</h4>
            <p class="gray">{{ $t('main.l2.info2.description') }}</p>
          </div>

          <div class="info">
            <SvgoTarget class="icon" />
            <h4>{{ $t('main.l2.info3.title') }}</h4>
            <p class="gray">{{ $t('main.l2.info3.description') }}</p>
          </div>
        </div>
      </section>


      <section class="l3">
        <h2 id="how-to">{{ $t('main.l3.title') }}</h2>
        <h3 class="gray" v-html="$t('main.l3.description')"></h3>

        <br>
        <br>

        <div class="demo">

          <div class="card">
            <div class="info">
              <h4>{{ $t('main.l3.card1.title') }}</h4>
              <p class="gray">{{ $t('main.l3.card1.description') }}</p>
            </div>

            <div class="image-container">
              <p class="info">{{ $t('main.l3.card1.tank') }}</p>
              <NuxtPicture src="/screenshots/demo/ideal3d.png" loading="lazy" />
            </div>
          </div>

          <div class="card">
            <div class="info">
              <h4>{{ $t('main.l3.card2.title') }}</h4>
              <p class="gray">{{ $t('main.l3.card2.description') }}</p>
            </div>

            <div class="image-container">
              <p class="info">{{ $t('main.l3.card2.tank') }}</p>
              <NuxtPicture src="/screenshots/demo/mini-r.png" loading="lazy" />
            </div>
          </div>

          <div class="card">
            <div class="badge new">{{ $t('main.l3.updated') }}</div>

            <div class="info">
              <h4>{{ $t('main.l3.card3.title') }}</h4>
              <p class="gray">{{ $t('main.l3.card3.description') }}</p>
            </div>

            <div class="image-container">
              <p class="info left">{{ $t('main.l3.card3.tank') }}</p>
              <div class="info-line-heatmap">
                <p><img src="/content/wn2/heatmapE.png">{{ $t('main.l3.card3.effective') }}</p>
                <p><img src="/content/wn2/heatmapP.png">{{ $t('main.l3.card3.popular') }}</p>
              </div>
              <NuxtPicture src="/screenshots/demo/heatmap.png" loading="lazy" />
            </div>
          </div>

          <div class="card">
            <div class="badge new">{{ $t('main.l3.new') }}</div>
            <div class="info">
              <h4>{{ $t('main.l3.card4.title') }}</h4>
              <p class="gray">{{ $t('main.l3.card4.description') }}</p>
            </div>

            <div class="image-container">
              <p class="info">{{ $t('main.l3.card4.tank') }}</p>
              <NuxtPicture format="webp" src="/screenshots/demo/spot-points-demo.png" loading="lazy" />
            </div>
          </div>

          <div class="card">
            <div class="badge new">{{ $t('main.l3.new') }}</div>

            <div class="info">
              <h4>{{ $t('main.l3.card5.title') }}</h4>
              <p class="gray" v-html="$t('main.l3.card5.description')"></p>
            </div>

            <div class="image-container">
              <p class="info">{{ $t('main.l3.card5.tank') }}</p>
              <NuxtPicture format="webp" src="/screenshots/demo/eye-marker.png" loading="lazy" />
            </div>
          </div>

          <div class="card">
            <div class="info">
              <h4>{{ $t('main.l3.card6.title') }}</h4>
              <p class="gray">{{ $t('main.l3.card6.description') }}</p>
            </div>

            <div class="image-container">
              <NuxtPicture src="/screenshots/demo/settings.png" loading="lazy" />
            </div>
          </div>
        </div>
      </section>


      <section class="l7">
        <h2 id="demo">{{ $t('main.l7.title') }}</h2>
        <h3 class="gray">{{ $t('main.l7.description') }}</h3>
        <br>
        <div class="carousel-container">
          <Carousel :items-to-show="1.1" :wrap-around="true">
            <!-- <Slide :key="'yt'">
              <div class="carousel-item">
                <iframe width="560" height="315"
                  src="https://www.youtube-nocookie.com/embed/zoDMW87S_kc?si=uxvd9imvf3a0gPA0&amp;controls=1"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; web-share"
                  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </Slide> -->

            <Slide v-for="slide in screenshots" :key="slide">
              <div class="carousel-item">
                <NuxtPicture sizes="600px xl:1200px" :src="slide" loading="lazy" />
              </div>
            </Slide>

            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>
      </section>


      <section class="l5">
        <h2 id="pricing">{{ $t('main.l5.title') }}</h2>
        <div class="card">
          <div class="container">
            <div class="price">
              <div class="month">
                <div class="header">
                  <p>{{ $t('main.l5.monthly') }}</p>
                  <div class="badge">{{ $t('main.l5.monthlyBadge') }}</div>
                </div>
                <hr>
                <p class="amount" v-if="locale == 'ru'">
                  100
                  <sup>
                    <SvgoRub class="rub" />
                  </sup>
                </p>
                <p class="amount" v-else>
                  $3
                </p>
              </div>

              <div class="year" v-if="locale == 'ru'">
                <div class="header">
                  <p>{{ $t('main.l5.yearly') }}</p>
                  <div class="badge">{{ $t('main.l5.yearlyBadge') }}</div>
                </div>
                <hr>
                <p class="amount">
                  1000
                  <sup>
                    <SvgoRub class="rub" />
                  </sup>
                </p>
              </div>

            </div>
            <div class="features">
              <ul>
                <li>
                  <p v-html="$t('main.l5.features.f1')"></p>
                </li>

                <li>
                  <p v-html="$t('main.l5.features.f2')"></p>
                </li>

                <li>
                  <p v-html="$t('main.l5.features.f3')"></p>
                </li>

                <li>
                  <p v-html="$t('main.l5.features.f4')"></p>
                </li>

                <li>
                  <p v-html="$t('main.l5.features.f5')"></p>
                </li>

                <li>
                  <p v-html="$t('main.l5.features.f6')"></p>
                </li>

                <li>
                  <p v-html="$t('main.l5.features.f7')"></p>
                </li>
              </ul>
            </div>

            <button @click="buy">{{ $t('main.l5.buy') }}</button>
          </div>
        </div>
        <div class="gradient"></div>
      </section>


      <section class="l4">
        <h2 id="instruction">{{ $t('main.l4.title') }}</h2>

        <div class="steps">

          <div class="step">
            <div class="text">
              <h3>{{ $t('main.l4.install.title') }}</h3>
              <ul class="gray">
                <i18n-t keypath="main.l4.install.steps.s1" tag="li">
                  <a @click="download">{{ $t('main.l4.install.steps.s1Download') }}</a>
                </i18n-t>
                <li>{{ $t('main.l4.install.steps.s2') }}</li>
                <li v-html="$t('main.l4.install.steps.s3')"></li>
                <li v-html="$t('main.l4.install.steps.s4')"></li>
                <li>
                  <p>{{ $t('main.l4.install.steps.s5') }}</p>
                  <ul class="m-0">
                    <li>Lesta: <code>{{ latest.lesta.replace('./mods/', '') }}</code></li>
                    <li>Wargaming: <code>{{ latest.wg.replace('./mods/', '') }}</code></li>
                  </ul>
                </li>
                <li v-html="$t('main.l4.install.steps.s6')"></li>
              </ul>

              <button class="download" @click="download">{{ $t('main.l4.install.steps.s1Download') }}</button>
            </div>
            <div class="image">
              <VideoLazy src="/instruction/install.webm" type="video/webm" poster="/instruction/install.webp" />
            </div>
          </div>


          <div class="step">
            <div class="text">
              <h3>{{ $t('main.l4.activation.title') }}</h3>
              <p class="gray" v-html="$t('main.l4.activation.description')"></p>
              <button @click="buy">{{ $t('main.l4.activation.buy') }}</button>
              <hr>
              <p class="gray" v-html="$t('main.l4.activation.cannot')"></p>
            </div>
            <div class="image">
              <VideoLazy src="/instruction/activation.webm" type="video/webm" poster="/instruction/activation.webp" />
            </div>
          </div>


          <div class="step">
            <div class="text">
              <h3 id="instruction-format">{{ $t('main.l4.usage.title') }}</h3>
              <p class="gray" v-html="$t('main.l4.usage.description')"></p>

              <ul class="gray">
                <li v-html="$t('main.l4.usage.steps.s1')"></li>
                <li v-html="$t('main.l4.usage.steps.s2')"></li>
                <li v-html="$t('main.l4.usage.steps.s3')"></li>
                <li v-html="$t('main.l4.usage.steps.s4')"></li>
                <li v-html="$t('main.l4.usage.steps.s5')"></li>
              </ul>
            </div>
            <div class="image">
              <VideoLazy src="/instruction/play.webm" type="video/webm" poster="/instruction/play.webp" />
            </div>
          </div>


          <div class="step">
            <div class="text">
              <h3>{{ $t('main.l4.configure.title') }}</h3>
              <p class="gray">{{ $t('main.l4.configure.description') }}</p>

              <ul class="gray">
                <li v-html="$t('main.l4.configure.setting')"></li>
                <li v-html="$t('main.l4.configure.list')"></li>
              </ul>

              <p class="gray"><i>{{ $t('main.l4.configure.sub') }}</i></p>

            </div>
            <div class="image">
              <VideoLazy src="/instruction/configuration.webm" type="video/webm"
                poster="/instruction/configuration.webp" />
            </div>
          </div>
        </div>

      </section>


      <section class="l6">
        <h2 id="faq">{{ $t('main.l6.title') }}</h2>

        <ContentDoc part="faq" class="content" :preventSeo="true" />

      </section>
    </div>

    <footer>
      <hr>
      <div class="main-container">
        <p class="gray">
          {{ $t('main.footer.info') }} </p>
        <br>
        <br>
        <p class="gray">
          <i18n-t keypath="main.footer.connect">
            <template #email><a href="mailto:support@wotstat.info" target="_blank">support@wotstat.info</a></template>
            <template #discord> <a :href="discordUrl" target="_blank">@WotStat</a></template>
          </i18n-t>
        </p>

        <template v-if="locale == 'ru'">
          <br>
          <br>
          <a href="/oferta" target="_blank" rel="noopener noreferrer">Публичная оферта</a>
        </template>
      </div>
    </footer>

    <Popup :show="buyPopup" @close="buyPopup = false" :title="$t('main.buyPopupTitle')">
      <Buy />
    </Popup>

  </div>
</template>

<script setup lang="ts">
import { getLatestModVersion } from '~/composition/latestModVersion';
import { getLatestGameVersion } from '~/composition/useLatestGameVersions';
import VideoLazy from '~/components/videoLazy.vue';

useHead({
  link: [{ rel: 'preload', as: 'image', 'href': '/favicon_128.png' }]
})


const discordUrl = import.meta.env.VITE_DISCORD_URL;

const { locale } = useI18n()


const rightContainerRef = ref<HTMLElement | null>(null);
const { width, height } = useElementBounding(rightContainerRef);
const mapContainerStyle = computed(() => {
  if (!width.value || !height.value) return {}
  return {
    width: Math.min(width.value, height.value) + 'px',
    height: Math.min(width.value, height.value) + 'px',
  }
})

const buyPopup = ref(false);

const loaded = ref(false);

const { y: scrollY } = useWindowScroll()
const mounted = useMounted()

const { width: windowWidth } = useWindowSize()
watch(windowWidth, value => {
  if (value > 1000) closeModal();
})

const burgerMenuOpen = ref(false);

const selectedTank = ref<string>('conqueror');
const selectedMap = ref<string>('murovanka');

const tanks = ['conqueror', 'concept', 'jagdPz', 'ob261', 'even']
const maps = ['paris', 'murovanka', 'steppes']

const latest = ref({
  lesta: 'Загрузка...',
  wg: 'Загрузка...',
})

const modLatest = ref<{
  browser_download_url: string;
  name: string;
  actual: boolean;
} | null>(null)

const latestModDownloadUrl = computed(() => modLatest.value?.browser_download_url ?? 'https://github.com/WOT-STAT/minimap-positions/releases/latest')

const screenshots = new Array(18).fill(0)
  .map((_, i) => `/screenshots/new/shot_${i + 1}.jpg`)


function scrollTo(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function clickMenu(id: string) {
  closeModal();
  scrollTo(id);
}

function openModal() {
  burgerMenuOpen.value = true;
  document.body.classList.add('no-scroll');
}

function closeModal() {
  burgerMenuOpen.value = false;
  document.body.classList.remove('no-scroll');
}

function onRender() {
  loaded.value = true;
}

function download() {
  if (!latestModDownloadUrl.value) window.open(latestModDownloadUrl.value, '_blank')
  else window.open(latestModDownloadUrl.value);
}

const router = useRouter()
function buy() {
  // router.push('/buy')
  buyPopup.value = true;
}

onMounted(async () => {
  latest.value = await getLatestGameVersion();
  modLatest.value = await getLatestModVersion()
})

onUnmounted(() => {
  document.body.classList.remove('no-scroll');
})

</script>


<style scoped lang="scss">
@use 'sass:color';
@use "~/assets/scss/colors.scss" as *;


$width-limit: 1000px;

.page {
  position: relative;
  overflow: hidden;
}

.main-container {
  padding: 0px;

  h2 {
    margin: 1em 0 0.4em 0;
  }

  h4 {
    margin: 0.5em 0 0.2em 0;
  }

  >section {
    padding: 0 50px;

    @media screen and (max-width: $width-limit) {
      padding: 0 20px;
    }
  }

  .l1 {

    @media screen and (max-width: $width-limit) {
      margin-top: 30px;
    }

    .content {
      position: relative;
      z-index: 2;
      min-height: 100vh;

      .left {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
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

          .v2-badge {
            margin: 0;
            width: unset;
            height: 0.8em;
            margin-bottom: 0.1em;
          }
        }

        h3 {
          font-size: 2em;

          @media screen and (max-width: $width-limit) {
            font-size: 1.4em;
          }

          @media screen and (max-width: 512px) {
            font-size: 1.25em;
          }
        }


        .update-info {
          line-height: 1.2;
          margin-top: 2.5em;
          color: var(--font-color);
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          backdrop-filter: blur(10px);
          padding: 0.5em 0.8em;

          p {
            font-size: 16px;
          }

          .v2-badge {
            width: unset;
          }
        }
      }

      .right {
        flex: 0.8;
        width: 100%;
        position: relative;
        user-select: none;

        @media screen and (max-width: 400px) {
          flex: 1;
        }

        .placeholder {
          width: 100%;
          height: 100%;
          position: absolute;
          display: flex;

          img {
            max-height: 100%;
            max-width: 100%;
            margin: auto;
            transform: scale(1.2);

            user-select: none;
            pointer-events: none;
          }
        }

        .map {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
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
      clip-path: inset(0 0 1px 1px);
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
        line-height: 1.3;

        .icon {
          color: $accent-color;
          height: 30px;
          width: auto;
        }
      }
    }
  }

  .l3 {
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
        display: flex;
        flex-direction: column;
        gap: 1em;
        position: relative;

        h4 {
          line-height: 1.25;
          margin: 0 0 0.5em 0;
        }

        .badge {
          position: absolute;
          top: -3px;
          right: -3px;

          &.new {
            background-color: #237de4;
            color: #ffffff;
            border-radius: 50px;
            font-size: 13px;
            font-weight: bold;
            line-height: 1;
            padding: 0.15em 0.4em;

            svg {
              display: inline-block;
              height: 0.9em;
              width: auto;
            }
          }
        }

        .image-container {
          margin-top: auto;
          position: relative;

          picture {
            user-select: none;
            pointer-events: none;
          }

          .info-line-heatmap {
            position: absolute;
            bottom: 5px;
            right: 6px;
            font-size: 0.8em;
            padding: 0.5em 0.8em;
            border-radius: 10px;
            background-color: rgba(52, 52, 52, 0.389);
            box-shadow: 0 0px 2px 0px rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(10px);
            color: #d2d2d2;
            text-align: left;

            img {
              width: 20px;
              height: 20px;
              margin-right: 3px;
              margin-bottom: -4px;
              display: inline-block;
              user-select: none;
              pointer-events: none;
            }
          }

          .info {
            position: absolute;
            bottom: 5px;
            right: 6px;
            font-size: 1em;
            padding: 0.5em 0.8em;
            border-radius: 10px;
            background-color: rgba(52, 52, 52, 0.389);
            box-shadow: 0 0px 2px 0px rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(10px);
            color: #d2d2d2;
            opacity: 0;
            transition: opacity 0.3s;

            &.left {
              left: 5px;
              right: auto;
            }
          }

          &:hover p {
            opacity: 1;
          }

          :deep(img) {
            display: block;
            width: 100%;
            border-radius: 10px;
            box-shadow: 0 1px 2px 0px rgba(0, 0, 0, 0.1);
          }

          &.shadow-disabled {
            :deep(img) {
              box-shadow: none;
            }
          }
        }
      }

    }
  }

  .l4 {

    .steps {
      display: flex;
      flex-direction: column;
      gap: 8em;

      @media screen and (max-width: 1000px) {
        gap: 4em;
      }

      .step {
        display: flex;
        align-items: center;
        gap: 20px;

        // &:nth-child(even) {
        //   flex-direction: row-reverse;
        // }

        @media screen and (max-width: 1000px) {
          flex-direction: column;
          align-items: normal;
        }

        ul {
          font-size: 1.2rem;
          line-height: 1.5;
          padding-left: 1em;
          margin: 1em 0;

          &.m-0 {
            margin: 0;
          }

          @media screen and (max-width: 512px) {
            font-size: 1em;
          }

          li {
            font-size: 1em;

            p {
              font-size: 1em;
            }
          }
        }

        .text {
          flex: 1;
          margin-bottom: auto;
        }

        .image {
          flex: 1;

          height: 300px;

          :deep(img),
          video {
            margin: auto;
            width: auto;
            height: 100%;
            display: block;

            // box-shadow: 0 0px 5px 0px rgba(0, 0, 0, 0.3);


            border-radius: 15px;
            overflow: hidden;

            @media screen and (max-width: 1000px) {
              width: 100%;
              height: auto;
            }
          }

        }

        h3 {
          font-weight: 600;
          margin-bottom: 0.3em;

          @media screen and (max-width: 512px) {
            font-size: 1.2em;
          }
        }

        button {
          width: 100%;
          background-color: $dark-green;
          border: none;
          color: white;
          font-weight: 600;
          margin: 1em 0;

          &.download {
            margin-top: 0;
          }

          transition: background-color 0.1s;

          @media (hover: hover) {
            &:hover {
              background-color: color.adjust($dark-green, $lightness: -10%);
            }
          }

        }
      }
    }
  }

  .l5 {
    position: relative;

    h2 {
      position: relative;
      z-index: 2;
    }

    .card {
      position: relative;
      z-index: 2;
      border-radius: 50px;
      background: linear-gradient(149.16deg, rgba(12, 117, 241, 0.45) 0%, rgba(39, 70, 105, 0.45) 33.47%, rgba(6, 231, 117, 0.3015) 65.23%, rgba(85, 47, 218, 0.45) 100%);
      padding: 3px;
      $border: 1px solid #505050bd;


      .container {
        background: rgba(29, 29, 35, 0.9);
        // background: rgba(29, 29, 29, 0.9);
        padding: 18px;
        border-radius: 47px;

        display: flex;
        flex-direction: column;
        gap: 20px;

        .price {
          flex: 1;
          display: flex;
          gap: 20px;
          align-items: center;

          @media screen and (max-width: 830px) {
            flex-direction: column;
            align-items: normal;
          }

          .month,
          .year {
            flex: 1;
            background-color: rgb(255 255 255 / 5%);
            border-radius: 30px;
            position: relative;
            border: $border;

            transition-duration: 0.3s;
            transition-property: transform, box-shadow;

            @media (hover: hover) {
              &:hover {
                box-shadow: 0 1px 15px 0px rgba(0, 0, 0, 0.1);
              }
            }

            p {
              font-size: 1.6em;
              font-weight: 600;
              color: var(--font-color);
              text-align: left;

              &.amount {
                font-size: 3em;
                text-align: center;
                letter-spacing: -1px;
                font-variant-numeric: normal;
                padding: 0.2em;
                padding-bottom: 0.4em;
              }

              .rub {
                font-size: 0.6em;
                font-weight: 400;
                margin-left: -0.5em;
              }

              @media screen and (max-width: 512px) {
                font-size: 1.2em;
              }
            }

            .header {
              display: flex;
              align-items: center;
              padding-right: 25px;
              white-space: nowrap;

              p {
                flex: 1;
                padding: 25px 0 20px 25px;
              }

              .badge {
                background: rgb(83, 84, 43);
                color: rgb(253, 242, 89);
                border-radius: 50px;
                padding: 0.1em 0.7em;
                margin-top: 0.6em;
              }

              @media screen and (max-width: 512px) {
                padding-right: 20px;

                p {
                  padding: 20px 0 15px 20px;
                }

                .badge {
                  font-size: 0.8em;
                  margin-top: 0.5em;
                }
              }
            }


            hr {
              border: none;
              margin: 0;
              border-top: $border;
            }
          }

          .year {
            .header {
              .badge {
                background: rgb(43, 84, 53);
                color: rgb(89, 253, 103);
              }
            }
          }
        }

        .line {
          border-left: 1px solid #626262;
        }

        .features {
          flex: 1;

          ul {
            li {
              margin: 0.5em 0;
            }

            @media screen and (max-width: 512px) {
              padding-left: 1em;
            }

            @media screen and (max-width: 800px) {
              padding-left: 1.2em;
            }
          }
        }

        button {
          border-radius: 30px;
          height: 60px;
          font-size: 1.2em;
          color: $accent-color;
          background-color: rgb(255 255 255 / 5%);
          border: $border;

          // background-color: rgb(43, 84, 53);
          // color: rgb(89, 253, 103);

          transition: all 0.3s;

          @media (hover: hover) {
            &:hover {
              border-color: $dark-green;
            }
          }
        }
      }
    }

    .gradient {
      user-select: none;
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 180vw;
      max-width: 2000px;
      height: 140%;
      z-index: 0;
      opacity: 0.6;

      mix-blend-mode: screen;
      background-blend-mode: overlay;

      background: radial-gradient(circle closest-side at 80% 30%, #145c4c30 0%, #00000000 100%),
        radial-gradient(circle closest-side at 80% 70%, #145c4c30 0%, #00000000 100%),
        radial-gradient(circle closest-side at 20% 30%, #0e105749 0%, #00000000 100%),
        radial-gradient(circle closest-side at 20% 70%, #0e105749 0%, #00000000 100%),
        radial-gradient(closest-side at 60% 50%, #145c4c9e 10%, #00000000 100%),
        radial-gradient(closest-side at 40% 50%, #0e10579e 30%, #00000000 100%);

    }
  }

  .l6 {
    :deep(.content) {
      hr {
        margin: 0;
      }

      .content {
        color: $large-color;

        >p,
        >ul {
          font-size: 1.2em;
          line-height: 1.4;
          margin: 0;

          @media screen and (max-width: 512px) {
            font-size: 1em;
          }
        }
      }
    }
  }

  .l7 {
    position: relative;
    z-index: 2;

    iframe {
      width: 100%;
      height: auto;
      aspect-ratio: 16 / 9;
    }

    .carousel-container {
      // margin-top: 20px;

      border-radius: 15px;
      overflow: hidden;

      @media screen and (max-width: 700px) {
        margin: 20px -20px;
        border-radius: 0;
      }
    }
  }


  .l3,
  .l4,
  .l5,
  .l6,
  .l7 {
    margin-top: 200px;

    @media screen and (max-width: $width-limit) {
      margin-top: 100px;
    }
  }
}

footer {
  margin-top: 200px;
  margin-bottom: 40px;
  // padding: 0 50px;

  .main-container {
    padding: 0 50px;

    @media screen and (max-width: $width-limit) {
      padding: 0 20px;
    }

    p {
      font-size: 1em;
    }

  }
}

header {
  width: 100%;
  position: fixed;
  z-index: 1000;

  .content {
    flex: 1;
    height: 55px;
    padding: 0 1em;
    background-color: $background-color;
    border-bottom: 2px solid $background-secondary;
    display: flex;

    transition-duration: 0.3s;
    transition-property: background-color, border-bottom, height;

    &.top {
      background-color: transparent;
      border-bottom: 2px solid transparent;
      height: 80px;
    }

    &.menu-opened {
      border-bottom: 2px solid transparent;
    }

    .header-container {
      display: flex;
      flex: 1;
      max-width: 1300px;
      margin: auto;

      &.large {
        @media screen and (max-width: $width-limit) {
          display: none;
        }
      }

      &.small {
        display: none;

        @media screen and (max-width: $width-limit) {
          display: flex;
        }
      }

      .language-switcher {
        margin-right: -8px;
      }

      .left,
      .right,
      .center {
        flex: 1;
        display: flex;
        align-items: center;
        gap: 20px;
      }

      .left {
        justify-content: flex-start;
      }

      .right {
        justify-content: flex-end;

        .icon {
          color: $large-color;
          height: 20px;
          width: auto;

          transition: color 0.2s;

          @media (hover: hover) {
            &:hover {
              color: $accent-color;
            }
          }
        }
      }

      .center {
        justify-content: center;
      }

      a {
        color: $large-color;
        transition: color 0.2s;
        white-space: nowrap;
        cursor: pointer;

        @media (hover: hover) {
          &:hover {
            color: $accent-color;
          }
        }
      }

      .logo {
        font-weight: 600;
        font-size: 1.1em;
        display: flex;
        align-items: center;
        gap: 10px;

        :deep(img) {
          height: 1.4em;
          width: auto;
          display: block;
        }
      }

      .buy {
        background-color: transparent;
        color: $accent-color;
        border: 2px solid $accent-color;

        padding: 0.2em 0.8em;
        border-radius: 20px;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.2s;
        font-size: 0.8em;

        @media (hover: hover) {
          &:hover {
            background-color: $accent-color;
            color: $background-color;
          }
        }

      }

      .burger-menu {
        color: $large-color;
        width: 1.5em;
        height: auto;
        cursor: pointer;

        @media (hover: hover) {
          &:hover {
            color: $accent-color;
          }
        }
      }
    }
  }

}

.menu {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  background-color: $background-color;
  padding: 1em;

  display: flex;
  flex-direction: column;

  padding-top: 57px;

  &.top {
    padding-top: 82px;
  }

  a {
    color: $large-color;
    font-size: 1em;
    padding: 0.5em 0;
    cursor: pointer;
  }

  .buy {
    background-color: $dark-green;
    border-radius: 10px;
    color: white;
    padding: 0.5em 1em;
    font-weight: 600;
    text-align: center;
  }

  hr {
    margin: 0.5em 0;
    border: none;
    border-top: 1px solid $background-secondary;
  }
}

#info,
#how-to,
#demo,
#pricing,
#instruction,
#instruction-format {
  &::before {
    content: '';
    display: block;
    height: 75px;
    margin-top: -75px;
    visibility: hidden;
  }
}
</style>

<style lang="scss">
@use "~/assets/scss/colors.scss" as *;

.l7 {
  .carousel-item {
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 15px;
    overflow: hidden;

    background-color: $background-secondary;

    img {
      width: 100%;
    }
  }

  .carousel__slide {
    padding: 0 10px;
  }

  .carousel__prev,
  .carousel__next {
    box-sizing: content-box;
    color: inherit;
    cursor: pointer;

    font-size: 15px;

    background-color: rgba(52, 52, 52, 0.389);
    border-radius: 50%;

    backdrop-filter: blur(5px);

    width: 3em;
    height: 3em;

    @media screen and (max-width: 512px) {
      font-size: 10px;
    }

    .carousel__icon {
      width: 3em;
      height: 3em;
    }
  }
}
</style>