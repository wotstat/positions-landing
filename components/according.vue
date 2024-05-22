<template>
  <div class="according" :class="isOpen ? 'open' : ''">
    <div class="header" @click="toggle">
      <slot name="header"></slot>
      <div class="plus-icon">
        <SvgoPlus class="icon" />
      </div>
    </div>

    <div class="panel" ref="panel">
      <div class="content">
        <slot name="panel"></slot>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">

const isOpen = ref(false)
const panel = ref<HTMLElement | null>(null)


function toggle() {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    panel.value?.style.setProperty('max-height', `${panel.value?.scrollHeight}px`)
  } else {
    panel.value?.style.setProperty('max-height', '0')
  }
}

</script>


<style lang="scss" scoped>
.according {

  &.open {
    .header {
      .plus-icon {
        transform: rotate(135deg);
      }
    }
  }

  .header {
    cursor: pointer;
    padding: 1.5em 0;
    user-select: none;
    width: 100%;
    transition: 0.4s;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
      padding: 10px 0;
    }

    .plus-icon {
      border-radius: 50%;
      border: 1px solid #353535;
      transition: 0.4s;
      width: 20px;
      height: 20px;
      padding: 10px;

      @media screen and (max-width: 1024px) {
        width: 15px;
        height: 15px;
        padding: 7px;
      }

      @media screen and (max-width: 768px) {
        width: 12px;
        height: 12px;
        padding: 6px;
      }

      .icon {
        display: block;
        width: 100%;
        height: 100%;
        margin: 0;
      }
    }
  }

  .panel {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;

    .content {
      margin-bottom: 1.5em;

      @media screen and (max-width: 768px) {
        margin-bottom: 10px 0;
      }
    }
  }
}
</style>