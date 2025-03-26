<template>

  <!-- <h1>Купить лицензионный ключ</h1> -->
  <p>{{ $t('buy.description') }}</p>
  <h2>{{ $t('buy.select') }}</h2>

  <div class="price">
    <div class="month" :class="selectedPeriod == 'month' ? 'active' : ''" @click="selectedPeriod = 'month'">
      <div class="header">
        <p>{{ $t('buy.byMonth') }}</p>
        <div class="badge">
          {{ $t('buy.byMonthBadge') }}
        </div>
      </div>
      <hr>
      <p class="amount">
        {{ targetAmount[0] }}
        <sup>
          <SvgoRub class="rub" v-if="targetCurrency == 'RUB'" />
          <SvgoDollar class="dollar" v-else />
        </sup>
      </p>
    </div>

    <div class="year" :class="selectedPeriod == 'year' ? 'active' : ''" @click="selectedPeriod = 'year'"
      v-if="selectedPayment != 'patreon'">
      <div class=" header">
        <p>{{ $t('buy.byYear') }}</p>
        <div class="badge">
          {{ $t('buy.byYearBadge') }}
        </div>
      </div>
      <hr>
      <p class="amount">
        {{ targetAmount[1] }}
        <sup>
          <SvgoRub class="rub" v-if="targetCurrency == 'RUB'" />
          <SvgoDollar class="dollar" v-else />
        </sup>
      </p>
    </div>
  </div>

  <br>
  <h2>{{ $t('buy.selectPayment') }}</h2>

  <div class="payment">
    <div class="variant" :class="selectedPayment == 'russia' ? 'active' : ''" @click="selectedPayment = 'russia'">
      <h4>{{ $t('buy.ru.title') }}</h4>
      <p>{{ $t('buy.ru.description') }}</p>
    </div>

    <div class="variant" :class="selectedPayment == 'crypto' ? 'active' : ''" @click="selectedPayment = 'crypto'">
      <h4>{{ $t('buy.crypto.title') }}</h4>
      <p>{{ $t('buy.crypto.description') }}</p>
    </div>

    <div class="variant" :class="selectedPayment == 'patreon' ? 'active' : ''" @click="selectedPayment = 'patreon'">
      <h4>{{ $t('buy.patreon.title') }}</h4>
      <p>{{ $t('buy.patreon.description') }}</p>
    </div>
  </div>

  <br>
  <template v-if="selectedPayment == 'patreon'">
    <p v-if="selectedPayment == 'patreon'">
      {{ $t('buy.patreon.sub') }}
    </p>
  </template>

  <p v-else>{{ $t('buy.sub') }}</p>

  <br>

  <button v-if="selectedPayment == 'patreon'" @click="openPatreon">{{ $t('buy.patreon.goToPayment') }}</button>
  <template v-else>
    <button @click="go2molz"> {{ $t('buy.goToPayment') }}</button>
  </template>
</template>

<script setup lang="ts">
const yandexMetrikaId = Number.parseInt(import.meta.env.VITE_YANDEX_METRIKA_ID)

const selectedPeriod = ref<'month' | 'year'>('month')
const selectedPayment = ref<'russia' | 'crypto' | 'patreon'>('russia')

const targetCurrency = computed(() => {
  if (selectedPayment.value == 'russia') {
    return 'RUB'
  } else if (selectedPayment.value == 'crypto') {
    return 'RUB'
  } else if (selectedPayment.value == 'patreon') {
    return 'USD'
  }
})

const targetAmount = computed(() => {
  if (targetCurrency.value == 'RUB') {
    return [100, 1000]
  } else {
    return [3, 30]
  }
})

function metrikaReachGoal(target: string) {
  const orderPrice = targetAmount.value[selectedPeriod.value == 'year' ? 1 : 0]
  ym(yandexMetrikaId, 'reachGoal', target, {
    order_price: orderPrice,
    currency: targetCurrency.value,
  })
}

watch(selectedPayment, payment => {
  if (payment == 'patreon')
    selectedPeriod.value = 'month'
})

onMounted(() => {
  ym(yandexMetrikaId, 'reachGoal', 'BUY_FORM_OPEN')
})

function openPatreon() {
  metrikaReachGoal('GO_TO_PATREON')
  window.open('https://www.patreon.com/WotStat', '_blank')
}

function go2molz() {
  if (selectedPayment.value == 'patreon') return

  const molzLink = {
    'month': {
      'russia': 'https://shop.wotstat.info/purchase/6139?clear',
      'crypto': 'https://shop.wotstat.info/purchase/6139?clear',
    },
    'year': {
      'russia': 'https://shop.wotstat.info/purchase/6140?clear',
      'crypto': 'https://shop.wotstat.info/purchase/6140?clear',
    }
  } as const

  metrikaReachGoal('GO_TO_MOLZ')
  window.open(molzLink[selectedPeriod.value][selectedPayment.value], '_blank')
}

</script>

<style lang="scss">
.molz-embed-iframe {
  color-scheme: dark;

  html {
    color-scheme: dark;
  }
}
</style>

<style lang="scss" scoped>
@use "~/assets/scss/colors.scss" as *;

$border: 1px solid #505050bd;

h1 {
  font-size: 2em;
  margin-bottom: 10px;
}

h2 {
  font-size: 1.2em;
  margin-top: 20px;
  margin-bottom: 10px;
}

p {
  font-size: 1em;
  line-height: 1.5;
  color: $large-color;
}

button {
  width: 100%;
}

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
    border-radius: 15px;
    position: relative;
    border: $border;

    // transition-duration: 0.2s;
    transition-property: transform, border, box-shadow;

    cursor: pointer;

    &.active {
      border: 1px solid $accent-color;
      // box-shadow: 0 0px 0px 1px $accent-color;
      // border: 1px solid transparent;
    }

    p {
      font-size: 1em;
      font-weight: 600;
      color: var(--font-color);
      text-align: left;

      &.amount {
        font-size: 2.2em;
        text-align: center;
        letter-spacing: -1px;
        font-variant-numeric: normal;
        padding: 0.2em;
      }

      .rub,
      .dollar {
        font-size: 0.6em;
        font-weight: 400;
        margin-left: -0.5em;
      }

      .dollar {
        font-size: 0.7em;
      }

      // @media screen and (max-width: 512px) {
      //   font-size: 1.2em;
      // }
    }

    .header {
      display: flex;
      align-items: center;
      padding-right: 10px;
      white-space: nowrap;

      p {
        flex: 1;
        padding: 8px 0 8px 10px;
      }

      .badge {
        background: rgb(83, 84, 43);
        color: rgb(253, 242, 89);
        border-radius: 50px;
        padding: 0.1em 0.7em;
        // margin-top: 0.2em;
        font-size: 0.7em;
      }

      // @media screen and (max-width: 512px) {
      //   padding-right: 20px;

      //   p {
      //     padding: 20px 0 15px 20px;
      //   }

      //   .badge {
      //     font-size: 0.8em;
      //     margin-top: 0.5em;
      //   }
      // }
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

.payment {
  display: flex;
  flex-direction: column;
  gap: 20px;

  .variant {
    flex: 1;
    background-color: rgb(255 255 255 / 5%);
    border-radius: 15px;
    padding: 15px;
    border: $border;
    cursor: pointer;

    // transition-duration: 0.2s;
    transition-property: border, box-shadow;

    &.active {
      // box-shadow: 0 0px 0px 2px $accent-color;
      // border: 1px solid transparent;
      border: 1px solid $accent-color;
    }

    h4 {
      font-size: 1.2em;
    }

    p {
      font-size: 1em;
      line-height: 1.5;
      color: $large-color;
    }
  }
}
</style>