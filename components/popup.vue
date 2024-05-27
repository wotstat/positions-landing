<template>
  <Teleport to="body">
    <Transition>
      <div class="popup-page" v-if="show">
        <div class="animation-container">
          <div class="popup card">
            <div class="header" :class="y > 0 ? 'blur' : ''">
              <h1 class="title">{{ title }}</h1>
              <div class="close" @click="emit('close')">
                <SvgoX />
              </div>
            </div>
            <div class="content-container" ref="content">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>


<script setup lang="ts">

const content = ref<HTMLElement | null>(null);
const { y } = useScroll(content);

const props = defineProps<{
  title: string,
  show: boolean
}>()

const emit = defineEmits<{
  'close': []
}>();

const mounted = useMounted()

watch(() => props.show, (value) => {
  if (!mounted.value) return;

  if (value) {
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
  } else {
    document.body.style.overflow = '';
    document.removeEventListener('keydown', onKey);
  }
}, { immediate: true });

function onKey(params: KeyboardEvent) {
  if (params.key == 'Escape') {
    emit('close');
  }
}

</script>

<style lang="scss" scoped>
.popup-page {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(10, 10, 10, 0.4);

  z-index: 10000;

  display: flex;

  .animation-container {
    flex: 1;
    display: flex;
    padding: 20px 0;

    @media screen and (max-width: 830px) {
      padding: 0;
    }

    .popup {
      box-sizing: border-box;
      max-width: 800px;
      width: 800px;
      min-width: 0;
      margin: auto;
      padding: 0;
      position: relative;
      max-height: 100%;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      box-shadow: 0 0 20px 0px rgba(10, 10, 10, 0.5);

      @media screen and (max-width: 830px) {
        width: 100%;
        max-width: 100%;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        bottom: 0;
        margin: 0;
        margin-top: 30px;
      }

      .header {
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: 20px;

        border-bottom: 1px solid transparent;
        transition-duration: 0.2s;

        &.blur {
          border-bottom: 1px solid #505050bd;
        }

        h1 {
          font-size: 2em;

          @media screen and (max-width: 830px) {
            font-size: 1.6em;
          }
        }

        .close {
          cursor: pointer;
          min-width: 30px;
          min-height: 30px;

          border-radius: 15px;
          background-color: rgba(255, 255, 255, 0.1);

          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 4px;

          svg {
            width: 15px;
            height: 15px;
            margin: 0;
          }
        }
      }

      .content-container {
        overflow-y: auto;
        padding: 0 20px 20px 20px;

        /* Custom Scrollbar for WebKit Browsers (Chrome, Safari, Edge) */
        &::-webkit-scrollbar {
          width: 12px;
        }

        &::-webkit-scrollbar-track {
          background: transparent;
        }

        &::-webkit-scrollbar-thumb {
          background-color: rgba(7, 7, 7, 0.2);
          border-radius: 6px;
          border: 3px solid transparent;
          background-clip: content-box;
        }

        /* Custom Scrollbar for Firefox */
        & {
          scrollbar-width: thin;
          scrollbar-color: rgba(7, 7, 7, 0.2) transparent;
        }
      }
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;

  .animation-container {
    transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
}

.v-enter-from,
.v-leave-to {
  background-color: transparent;

  .animation-container {
    transform: translateY(100%);
  }
}
</style>