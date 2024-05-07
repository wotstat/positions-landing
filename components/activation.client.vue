<template>
  <div class="activate-container">
    <div class="card">
      <div class="flex header">
        <h1 class="flex-1">Активация лицензии</h1>
        <div class="status" :class="statusColor" v-if="!successActivated">{{ $t(statusText) }}</div>
      </div>
      <template v-if="showWaitCode">
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
      <template v-if="successActivated">
        <div class="success-header">
          ВАША ЛИЦЕНЗИЯ АКТИВИРОВАНА
        </div>
        <br>
        <p>Поздравляем,</p>
        <p>Вы успешно активировали лицензию мода "Позиции от WotStat", теперь вы можете убедиться в успешной активации,
          в центре уведомлений отобразилось сообщений с информацией о лицензии</p>
        <p>Удачных боёв!</p>
      </template>
    </div>
  </div>
</template>


<script setup lang="ts">

const props = defineProps<{
  requestId: string
}>()

const key = ref('')
const successActivated = ref(false)
const status = ref<'WAIT' | 'STARTED' | 'SENDED' | 'ACTIVATED' | 'CLOSED'>('WAIT')


const { status: wsStatus, data, send, open, close } = useWebSocket(`${import.meta.env.VITE_WS_SERVER_URL}/api/v1/activation/web/${props.requestId}`, {
  onMessage: (ws, event) => {
    switch (event.data) {
      case 'START':
        status.value = 'STARTED'
        break;
      case 'ACTIVATED':
        successActivated.value = true
        status.value = 'ACTIVATED'
        break;
      case 'CLOSED':
        status.value = 'CLOSED'
        break;

      default:
        break;
    }
  }
})

const statusText = computed(() => {
  switch (status.value) {
    case 'WAIT':
      return 'activation.status.wait'
    case 'STARTED':
    case 'SENDED':
    case 'ACTIVATED':
      return 'activation.status.connected'
    case 'CLOSED':
      return 'activation.status.disconnected'
  }
})

const statusColor = computed(() => {
  switch (status.value) {
    case 'WAIT':
      return 'orange'
    case 'STARTED':
    case 'SENDED':
    case 'ACTIVATED':
      return 'green'
    case 'CLOSED':
      return 'red'
  }
})

const showLoader = computed(() => status.value === 'SENDED')
const showWaitCode = computed(() => (status.value === 'WAIT' || status.value === 'STARTED') && !successActivated.value)


const isButtonEnabled = computed(() => key.value.length > 10 && wsStatus.value === 'OPEN' && status.value == 'STARTED')

function activate() {
  console.log('activate', key.value);
  if (wsStatus.value === 'OPEN' && status.value == 'STARTED') {
    status.value = 'SENDED'
    send(`KEY:${key.value}`)
  }

}

</script>


<style lang="scss" scoped>
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

.success-header {
  font-size: 1.5em;
  text-align: center;
  font-weight: 600;
  padding: 10px;
  background-color: #38413a;
  border: 2px solid #30D158;
  color: #30D158;
  border-radius: 10px;

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
    // border-color: #65f0ff;
    border-color: #30D158;
  }
}

button {
  &:hover:not(:disabled) {
    border-color: #30D158;
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