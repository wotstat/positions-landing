<template>
  <div class="activate-container">
    <div class="card">
      <div class="flex header">
        <h1 class="flex-1">Активация лицензии</h1>
        <div class="status" :class="statusColor" v-if="!successActivated">{{ $t(statusText) }}</div>
      </div>
      <template v-if="showMain">
        <p>Для активации лицензии вам необходим <b>лицензионный</b> или <b>промо</b> ключ.</p>
        <p>Лицензионный ключ стоит 100 рублей в месяц. Вы можете <a href="">купить</a> на сервисе.</p>
        <br>
        <div class="flex input-line">
          <input type="text" class="flex-1" placeholder="Введите ключ" v-model="key">
          <button :disabled="!isButtonEnabled" @click="activate">Активировать</button>
        </div>
      </template>
      <div class="flex loader-parent" v-if="showLoader">
        <span class="loader"></span>
      </div>
      <ActivationSuccess v-else-if="successActivated && !promoReceived" />
      <ActivationPromoSuccess v-else-if="successActivated && promoReceived" :license="promoReceived" />
      <ActivationPromoWotLost v-else-if="wotClosed && promoReceived" :license="promoReceived" />
      <ActivationWotLost v-else-if="wotClosed" />
      <ActivationDisconnected v-else-if="showErrorDisconnected" />
      <ActivationErrorLicense v-else-if="wrongKey" :license="key" @reset="reset" />
      <ActivationErrorPromo v-else-if="alreadyActivatedPromo" :license="key" @reset="reset" />
    </div>
  </div>
</template>


<script setup lang="ts">

const props = defineProps<{
  requestId: string
}>()

const key = ref('')
const successActivated = ref(false)
const promoReceived = ref<false | string>(false)
const wrongKey = ref(false)
const wotClosed = ref(false)
const alreadyActivatedPromo = ref(false)

const status = ref<'WAIT' | 'STARTED' | 'CLOSED' | 'SENDED' | 'ACTIVATED' | 'ALREADY_ACTIVATED_PROMO' |
  'INVALID_LICENSE' | 'INVALID_PROMO' | 'WOT_CLOSED' | 'INTERNAL_ERROR' | 'DISCONNECTED'>('WAIT')

const showMain = computed(() => (status.value === 'WAIT' || status.value === 'STARTED') && !successActivated.value && !promoReceived.value && !wrongKey.value)
const showLoader = computed(() => status.value === 'SENDED')
const showErrorDisconnected = computed(() => status.value === 'DISCONNECTED' && !successActivated.value)


const isButtonEnabled = computed(() => key.value.length >= 10 && wsStatus.value === 'OPEN' && status.value == 'STARTED')


const { status: wsStatus, data, send, open, close } = useWebSocket(`${import.meta.env.VITE_WS_SERVER_URL}/api/v1/activation/web/${props.requestId}`, {
  onMessage: (ws, event) => {
    const data = JSON.parse(event.data)

    if (data.status) {
      status.value = data.status
    }

    if (data.promo && data.promo.license) {
      promoReceived.value = data.promo.license
    }

    switch (data.status) {
      case 'ACTIVATED':
        successActivated.value = true
        break
      case 'INVALID_LICENSE':
      case 'INVALID_PROMO':
        wrongKey.value = true
        break
      case 'ALREADY_ACTIVATED_PROMO':
        alreadyActivatedPromo.value = true
        break
      case 'WOT_CLOSED':
        wotClosed.value = true
        break;
      default:
        break
    }
  },
  onDisconnected(ws, event) {
    status.value = 'DISCONNECTED'
  },
})

const statusText = computed(() => {
  switch (status.value) {
    case 'WAIT':
      return 'activation.status.wait'
    case 'CLOSED':
    case 'DISCONNECTED':
      return 'activation.status.disconnected'
    default:
      return 'activation.status.connected'
  }
})

const statusColor = computed(() => {
  switch (status.value) {
    case 'WAIT':
      return 'orange'
    case 'CLOSED':
    case 'DISCONNECTED':
      return 'red'
    default:
      return 'green'
  }
})

function activate() {
  if (wsStatus.value === 'OPEN' && status.value == 'STARTED') {
    status.value = 'SENDED'
    send(JSON.stringify({ key: key.value }))
  }
}

function reset() {
  key.value = ''
  status.value = 'STARTED'
  successActivated.value = false
  promoReceived.value = false
  wrongKey.value = false
  alreadyActivatedPromo.value = false
  wotClosed.value = false
}

</script>


<style lang="scss" scoped>
@import "~/assets/scss/colors.scss";

.activate-container {
  max-width: 900px;
  margin: auto;
}

h1 {
  font-size: 2em;
  margin-top: 0;
}

.input-line {
  gap: 5px;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
}


.card {
  margin: 50px;
  position: relative;

  .header {
    align-items: flex-start;
    margin-top: -15px;

    h1 {
      margin-top: 15px;
    }

    .status {
      margin-top: 10px;
      margin-right: -5px;
    }

    @media screen and (max-width: 500px) {
      flex-direction: column-reverse;
      align-items: normal;

      .status {
        flex: 1;
        margin-left: -5px;
      }
    }
  }

  .status {
    border-radius: 50px;
    padding: 1px 5px 2px 5px;
    font-size: 0.8em;
    font-weight: 600;
    text-align: center;

    &.green {
      border: 1px solid #30D158;
      color: #30D158;
    }

    &.orange {
      border: 1px solid #FF9F0A;
      color: #FF9F0A;
    }

    &.red {
      border: 1px solid #FF453A;
      color: #FF453A;
    }
  }
}

input {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  color: inherit;
  transition: border-color 0.25s;

  &:hover {
    border-color: $accent-color;
  }
}


.loader-parent {
  font-size: 10px;
  height: 8em;
  justify-content: center;
  align-items: center;
}
</style>

<style lang="scss" scoped>
.loader {
  color: #30D158;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  text-indent: -9999em;
  animation: mulShdSpin 1.3s infinite linear;
  transform: translateZ(0);
}

@keyframes mulShdSpin {

  0%,
  100% {
    box-shadow: 0 -3em 0 0.2em,
      2em -2em 0 0em, 3em 0 0 -1em,
      2em 2em 0 -1em, 0 3em 0 -1em,
      -2em 2em 0 -1em, -3em 0 0 -1em,
      -2em -2em 0 0;
  }

  12.5% {
    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em,
      3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em,
      -2em 2em 0 -1em, -3em 0 0 -1em,
      -2em -2em 0 -1em;
  }

  25% {
    box-shadow: 0 -3em 0 -0.5em,
      2em -2em 0 0, 3em 0 0 0.2em,
      2em 2em 0 0, 0 3em 0 -1em,
      -2em 2em 0 -1em, -3em 0 0 -1em,
      -2em -2em 0 -1em;
  }

  37.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em,
      3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em,
      -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }

  50% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em,
      3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em,
      -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }

  62.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em,
      3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0,
      -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
  }

  75% {
    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em,
      3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em,
      -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
  }

  87.5% {
    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em,
      3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em,
      -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
  }
}
</style>