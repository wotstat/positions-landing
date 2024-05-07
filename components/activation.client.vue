<template>
  <div class="activate-container">
    <div class="card">
      <h1>Активация лицензии</h1>
      <b>{{ status }}</b>
      <p>
        Для активации лицензии вам необходим <b>лицензионный</b> или <b>промо</b> ключ.
      </p>
      <br>
      <div class="flex input-line">
        <input type="text" class="flex-1" placeholder="Введите ключ" v-model="key">
        <button :disabled="isButtonDisabled" @click="activate">Активировать</button>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">

const props = defineProps<{
  requestId: string
}>()

const key = ref('')
const status = ref<'WAIT' | 'STARTED' | 'SEND' | 'ACTIVATED' | 'CLOSED'>('WAIT')

console.log(props.requestId);

const { status: wsStatus, data, send, open, close } = useWebSocket(`${import.meta.env.VITE_WS_SERVER_URL}/api/v1/activation/web/${props.requestId}`, {
  onMessage: (ws, event) => {
    switch (event.data) {
      case 'START':
        status.value = 'STARTED'
        break;
      case 'ACTIVATED':
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

console.log(import.meta.env.VITE_SERVER_URL);


const isButtonDisabled = computed(() => key.value.length < 10)


function activate() {
  console.log('activate', key.value);
  if (wsStatus.value === 'OPEN') {
    status.value = 'SEND'
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
}

.card {
  margin: 50px;
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
    border-color: #65f0ff;
  }
}
</style>