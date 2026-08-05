<template>
  <div class="activate-container">
    <div class="card" v-if="showLicenseBlock">
      <div class="flex header">
        <h1 class="flex-1">{{ $t('activation.page.title') }}</h1>
        <div class="status" :class="statusColor" v-if="!successActivated">{{ $t(statusText) }}</div>
      </div>

      <template v-if="showMain">
        <p v-html="$t('activation.page.description')"></p>
        <br>
        <div class="flex input-line">
          <input type="text" class="flex-1 activation-input" :placeholder="$t('activation.page.keyPlaceholder')"
            v-model.trim="key" :disabled="!isInputLicenseKeyEnabled">
          <button :disabled="!isButtonEnabled" @click="activate">{{ $t('activation.page.activate') }}</button>
        </div>
      </template>

      <div class="flex loader-parent" v-if="showLoader"><span class="loader"></span></div>

      <ActivationSuccess v-else-if="successActivated && !promoReceived" />
      <ActivationExpired v-else-if="activationExpired" :license="key" @reset="reset" />
      <ActivationPromoSuccess v-else-if="successActivated && promoReceived" :license="promoReceived" />
      <ActivationPromoWotLost v-else-if="(wotClosed || showErrorDisconnected) && promoReceived"
        :license="promoReceived" />
      <ActivationWotLost v-else-if="wotClosed" />
      <ActivationDisconnected v-else-if="showErrorDisconnected" />
      <ActivationErrorLicense v-else-if="wrongKey" :license="key" @reset="reset" />
      <ActivationErrorPromo v-else-if="alreadyActivatedPromo" :license="key" @reset="reset" />


      <div class="alternative-activation" v-if="shouldShowAlternativeActivation">
        <h2>{{ $t('activation.page.alternative.header') }}</h2>
        <p v-html="$t('activation.page.alternative.content')"></p>
      </div>

      <!-- <hr>
      <ActivationSuccess />
      <hr>
      <ActivationExpired :license="key" @reset="reset" />
      <hr>
      <ActivationPromoSuccess :license="key" />
      <hr>
      <ActivationPromoWotLost :license="key" />
      <hr>
      <ActivationWotLost />
      <hr>
      <ActivationDisconnected />
      <hr>
      <ActivationErrorLicense :license="key" @reset="reset" />
      <hr>
      <ActivationErrorPromo :license="key" @reset="reset" /> -->

    </div>

    <div class="card" v-if="showPatreonBlock">
      <div class="flex header">
        <h1 class="flex-1">{{ $t('activation.page.patreon.title') }}</h1>
        <div class="status" :class="statusColor" v-if="!successActivated && requestId">{{ $t(statusText) }}</div>
      </div>

      <template v-if="showMain && !isPatreonRedirect">
        <p v-html="$t('activation.page.patreon.description')"></p>
        <br>
        <button :disabled="!(wsStatus === 'OPEN' && status == 'STARTED')" @click="patreonAuth"
          class="auth-with-patreon">{{ $t('activation.page.patreon.authWithPatreon') }}</button>
      </template>

      <ActivationPatreonDeny v-if="!requestId" />
      <template v-else-if="showLoader">
        <div class="flex loader-parent"><span class="loader"></span></div>
        <p class="activation-progress">{{ $t(patreonStatusText) }}</p>
      </template>

      <ActivationPatreonError v-else-if="status === 'PATREON_ERROR'" @reset="reset" />
      <ActivationPatreonHasntMembership v-else-if="status === 'PATREON_HASNT_MEMBERSHIP'" @reset="reset" />
      <ActivationPatreonSuccess v-else-if="successActivated" />
      <ActivationWotLost v-else-if="wotClosed" />
    </div>

    <div class="card" v-if="showMain && !clear && !isPatreonRedirect">
      <div class="flex header">
        <h1>{{ $t('activation.page.buyLicense') }}</h1>
      </div>
      <Buy />
    </div>
  </div>
</template>


<script setup lang="ts">
const props = defineProps<{
  requestId?: string
  clear?: boolean
  isPatreonRedirect?: boolean
}>()

const i18n = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const router = useRouter();
const patreonCode = computed(() => route.query.code as string);

const key = ref('')
const successActivated = ref(false)
const activationExpired = ref(false)
const promoReceived = ref<false | string>(false)
const wrongKey = ref(false)
const wotClosed = ref(false)
const alreadyActivatedPromo = ref(false)
const patreonAuthRedirect = ref(false)


type PatreonStatus = 'REQUEST_AUTH_WITH_PATREON' | 'AUTH_WITH_PATREON' | 'AWAIT_PATREON_CHECK' | 'PATREON_ERROR' | 'PATREON_CHECKING_TOKEN'
  | 'PATREON_CHECKING_EMAIL' | 'PATREON_HASNT_MEMBERSHIP'

const status = ref<'WAIT' | 'STARTED' | 'CLOSED' | 'SENDED' | 'ACTIVATED' | 'ALREADY_ACTIVATED_PROMO' |
  'EXPIRED_LICENSE' | 'INVALID_LICENSE' | 'INVALID_PROMO' | 'WOT_CLOSED' | 'INTERNAL_ERROR' | 'DISCONNECTED' | PatreonStatus>('WAIT')

const showMain = computed(() => (status.value === 'WAIT' || status.value === 'STARTED') && !successActivated.value && !promoReceived.value && !wrongKey.value)
const showLoader = computed(() => status.value === 'SENDED' ||
  status.value === 'REQUEST_AUTH_WITH_PATREON' ||
  status.value === 'AWAIT_PATREON_CHECK' ||
  status.value === 'PATREON_CHECKING_TOKEN' ||
  status.value === 'PATREON_CHECKING_EMAIL' ||
  patreonAuthRedirect.value || ((status.value === 'STARTED' || status.value === 'WAIT') && patreonCode.value))

const showErrorDisconnected = computed(() => status.value === 'DISCONNECTED' && !successActivated.value)

const isInputLicenseKeyEnabled = computed(() => wsStatus.value === 'OPEN' && status.value == 'STARTED')
const isButtonEnabled = computed(() => key.value.length >= 10 && wsStatus.value === 'OPEN' && status.value == 'STARTED')
const showLicenseBlock = computed(() => !props.isPatreonRedirect && !patreonAuthRedirect.value && !['REQUEST_AUTH_WITH_PATREON', 'AUTH_WITH_PATREON'].includes(status.value))
const showPatreonBlock = computed(() => props.isPatreonRedirect || patreonAuthRedirect.value || ['WAIT', 'STARTED', 'REQUEST_AUTH_WITH_PATREON'].includes(status.value))

function getPatreonRedirectUri() {
  const language = i18n.locale.value
  return location.origin + (language == 'ru' ? '' : `/${language}`) + `/${import.meta.env.VITE_PATREON_REDIRECT_URI}`
}

const wsUrl = `${import.meta.env.VITE_WS_SERVER_URL}/api/v1/activation/web/${props.requestId ?? 'undefined'}` + (patreonCode.value ? `?patreon-key=${patreonCode.value}` : '')
const { status: wsStatus, data, send, open, close } = useWebSocket(wsUrl, {
  onMessage: (ws, event) => {
    if (event.data === 'PONG') return

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
      case 'EXPIRED_LICENSE':
        activationExpired.value = true
        break
      case 'AUTH_WITH_PATREON':

        const url = `https://www.patreon.com/oauth2/authorize?` +
          `response_type=code` +
          `&client_id=${import.meta.env.VITE_PATREON_CLIENT_ID}` +
          `&redirect_uri=${getPatreonRedirectUri()}` +
          `&state=${props.requestId}&scope=identity[email] identity`

        patreonAuthRedirect.value = true

        window.open(url, '_self')
        break
      default:
        break
    }
  },
  onDisconnected(ws, event) {
    status.value = 'DISCONNECTED'
  },
  heartbeat: {
    interval: 5000,
    message: 'PING',
    pongTimeout: 5000,
  }
})


const waitStatusBeginTime = ref<number | null>(null)
const timestamp = useTimestamp({ interval: 500 })
const shouldShowAlternativeActivation = computed(() => {
  if (!waitStatusBeginTime.value) return false
  const diff = timestamp.value - waitStatusBeginTime.value
  return diff > 5000 && (status.value === 'WAIT')
})

watch(status, value => {
  if (value === 'WAIT') waitStatusBeginTime.value = Date.now()
  else waitStatusBeginTime.value = null
}, { immediate: true })

const statusText = computed(() => {
  if (patreonAuthRedirect.value) return 'activation.status.redirectAuthWithPatreon'
  switch (status.value) {
    case 'WAIT':
      return 'activation.status.wait'
    case 'CLOSED':
    case 'DISCONNECTED':
      return 'activation.status.disconnected'
    case 'REQUEST_AUTH_WITH_PATREON':
      return 'activation.status.requestAuthWithPatreon'
    default:
      return 'activation.status.connected'
  }
})

const patreonStatusText = computed(() => {
  switch (status.value) {
    case 'AWAIT_PATREON_CHECK': return 'activation.status.awaitPatreonCheck'
    case 'PATREON_CHECKING_EMAIL': return 'activation.status.patreonCheckingEmail'
    case 'PATREON_CHECKING_TOKEN': return 'activation.status.patreonCheckingToken'
    default:
      return '';
  }
})

const statusColor = computed(() => {
  if (patreonAuthRedirect.value) return 'green'
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

if (patreonCode.value) {
  watch(status, value => {
    if (value !== 'STARTED') return
    send(JSON.stringify({ patreonCode: patreonCode.value, redirectUri: getPatreonRedirectUri() }))
    status.value = 'AWAIT_PATREON_CHECK'
  }, { immediate: true })
}

function activate() {
  if (wsStatus.value === 'OPEN' && status.value == 'STARTED') {
    status.value = 'SENDED'
    send(JSON.stringify({ key: key.value }))
  }
}

function patreonAuth() {
  status.value = 'REQUEST_AUTH_WITH_PATREON'
  send(JSON.stringify({ action: 'AUTH_WITH_PATREON' }))
}

function reset() {
  key.value = ''
  switch (status.value) {
    case 'ALREADY_ACTIVATED_PROMO':
    case 'ACTIVATED':
    case 'EXPIRED_LICENSE':
    case 'INVALID_LICENSE':
    case 'INVALID_PROMO':
    case 'INTERNAL_ERROR':
    case 'AUTH_WITH_PATREON':
    case 'REQUEST_AUTH_WITH_PATREON':
      status.value = 'STARTED'
      break;
    case 'PATREON_ERROR':
    case 'PATREON_CHECKING_EMAIL':
    case 'PATREON_CHECKING_TOKEN':
    case 'PATREON_HASNT_MEMBERSHIP':
      router.push({ query: { requestId: props.requestId }, path: localePath('/request-licence-key') })

    default:
      break;
  }
  successActivated.value = false
  promoReceived.value = false
  wrongKey.value = false
  alreadyActivatedPromo.value = false
  wotClosed.value = false
  activationExpired.value = false
}

</script>


<style lang="scss" scoped>
@use "~/assets/scss/colors.scss" as *;

hr {
  margin: 20px 0;
  border: 0;
  border-top: 1px solid black;
}

.activate-container {
  max-width: 900px;
  margin: auto;

  :deep(p) {
    font-size: 1em;
    line-height: 1.5;
  }

  .alternative-activation {
    margin-top: 1.5em;
    border-left: 5px solid #FF9F0A;
    border-radius: 5px;
    padding-left: 10px;

    h2 {
      font-size: 1em;
      margin-bottom: 0.3em;
    }
  }
}

h1 {
  font-size: 2em;
  margin-top: 0;
}

h2 {
  font-size: 1.4em;
  margin-top: 0;
}

.input-line {
  gap: 5px;

  .activation-input[disabled] {
    border: none;
    cursor: not-allowed;
  }

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
    margin-bottom: 10px;

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
      border: 1px solid $accent-color;
      color: $accent-color;
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

  .auth-with-patreon {
    width: 100%;
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

.activation-progress {
  text-align: center;
  color: $accent-color;
  margin-top: 20px;
}
</style>

<style lang="scss" scoped>
@use "~/assets/scss/colors.scss" as *;

.loader {
  color: $accent-color;
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