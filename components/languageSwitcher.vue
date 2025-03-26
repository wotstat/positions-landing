<template>
  <div class="i18n drop-down">
    <SvgoI18n class="icon" />
    <SvgoArrowDown class="icon arrow" />
    <div class="menu">

      <NuxtLink :to="switchLocalePath('ru')" :class="{ active: locale == 'ru' }">Русский</NuxtLink>
      <NuxtLink :to="switchLocalePath('en')" :class="{ active: locale == 'en' }">English</NuxtLink>

    </div>
  </div>
</template>


<script setup lang="ts">
const props = defineProps<{}>()
const { locale } = useI18n()

const switchLocalePath = useSwitchLocalePath()
</script>


<style lang="scss" scoped>
.i18n {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px 5px;
  color: #b5b5b5;

  .icon {
    width: 18px;
    height: 18px;
  }

  .arrow {
    width: 12px;
    height: 12px;
    margin-left: 3px;
  }
}

.drop-down {
  .menu {
    position: absolute;
    top: calc(100% - 12px);
    right: 5px;
    padding: 6px;
    z-index: 1000;

    display: flex;
    flex-direction: column;
    gap: 0;

    border-radius: 15px;
    background-color: #262626;
    box-shadow: 0px 0px 10px 0px #00000049;
    border: 1px solid #5d5d5dbc;

    visibility: hidden;
    opacity: 0;
    transition: opacity 0.2s;

    >a,
    >.line>a,
    >.container>a {
      padding: 5px 10px;
      border-radius: 10px;
      transition: all 0.2s;
      padding: 5px 10px;
      color: rgba(255, 255, 255, 0.9);
      filter: none;

      &.active {
        color: #2ef45f;
      }

      &:hover {
        background-color: #51515191;
        filter: none;
      }
    }

    .btn {
      padding: 5px 0;
    }

    .positions {
      margin: 0;
      text-align: center;
    }
  }

  &:hover {
    .menu {
      visibility: visible;
      opacity: 1;
    }
  }
}
</style>