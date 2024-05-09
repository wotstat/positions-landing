<template>
  <div class="success-header">
    ВАША ЛИЦЕНЗИЯ АКТИВИРОВАНА
  </div>
  <br>
  <p>Одноразовый промо-ключ успешно активирован. Обязательно сохраните лицензионный ключ, он потребуется для следующих
    активаций</p>
  <br>
  <div class="flex key-line">
    <p class="key-field flex-1 flex">
      <span class="flex-1"> {{ currentKey }}</span>
      <span class="icon" @click="showHide">
        <svg xmlns="http://www.w3.org/2000/svg" width="106" height="71" viewBox="0 0 106 71" class="eye"
          v-if="!visibleKey">
          <path fill-rule="evenodd"
            d="m86.867 58.467-14-13.99a21.186 21.186 0 0 0 1.626-8.153c0-12.011-9.522-21.386-21.436-21.386-2.911 0-5.676.55-8.195 1.556L34.951 6.59c5.557-1.823 11.633-2.932 18.106-2.932 31.055 0 52.295 24.805 52.295 32.666 0 4.44-6.86 14.385-18.485 22.143Zm-15.518 7.58L61.343 56.05a21.327 21.327 0 0 1-8.286 1.662c-12.012 0-21.484-9.717-21.533-21.387 0-3 .594-5.835 1.672-8.4L19.42 14.16C7.736 21.91.713 31.855.713 36.324c0 7.813 21.729 32.666 52.344 32.666 6.573 0 12.707-1.113 18.292-2.943ZM51.374 23.001a13.603 13.603 0 0 1 1.683-.104c7.422 0 13.428 6.006 13.428 13.427a13.6 13.6 0 0 1-.103 1.673L51.374 23.001ZM39.63 36.324c0-.626.043-1.243.126-1.846l15.16 15.147c-.608.084-1.228.127-1.858.127-7.422 0-13.428-6.006-13.428-13.428Z"
            clip-rule="evenodd" />
          <path
            d="M81.573 69.43c1.318 1.318 3.369 1.416 4.736 0 1.416-1.465 1.318-3.418 0-4.736L22.832 1.266a3.39 3.39 0 0 0-4.785 0c-1.27 1.27-1.27 3.467 0 4.736L81.573 69.43Z" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="106" height="67" viewBox="0 0 106 67" class="eye" v-else>
          <path
            d="M53.057 66.028c31.055 0 52.295-24.854 52.295-32.666 0-7.862-21.24-32.666-52.295-32.666C22.442.696.713 25.5.713 33.362c0 7.812 21.729 32.666 52.344 32.666Zm0-11.28c-12.012 0-21.484-9.716-21.533-21.386 0-12.012 9.521-21.387 21.533-21.387 11.914 0 21.436 9.375 21.436 21.387 0 11.67-9.522 21.386-21.436 21.386Zm0-13.379c4.395 0 8.057-3.662 8.057-8.007 0-4.395-3.662-8.057-8.057-8.057-4.443 0-8.105 3.662-8.105 8.057 0 4.345 3.662 8.007 8.105 8.007Z" />
        </svg>
      </span>
    </p>
    <button @click="copyKey">Скопировать</button>

  </div>
  <br>
  <p>Удачных боёв!</p>
</template>

<script setup lang="ts">

const props = defineProps<{
  license: string
}>()

const visibleKey = ref(false)

const hiddenKey = props.license.replace(/[a-zA-Z0-9]/g, '∗').slice(0, -4) + props.license.slice(-4)

const currentKey = computed(() => visibleKey.value ? props.license : hiddenKey)

function copyKey() {
  navigator.clipboard.writeText(props.license)
}

function showHide() {
  visibleKey.value = !visibleKey.value
}

</script>

<style lang="scss" scoped>
@use "~/assets/scss/activation.scss";
@import "~/assets/scss/colors.scss";

.eye {
  height: auto;
  width: 1.6rem;
}

.key-line {
  gap: 5px;

  .key-field {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 0.6em 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    color: inherit;
  }

  .icon {
    display: flex;
    align-items: center;
    user-select: none;
    fill: var(--font-color);
    cursor: pointer;

    &:hover {
      fill: #a2a2a2;
    }
  }

  button {

    transition: 0.3s;

    &:active {
      background-color: $accent-color;
      transition: 0s;
    }
  }
}
</style>