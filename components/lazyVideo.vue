<template>
  <video ref="video" autoplay loop muted playsinline :poster="poster">
    <source :data-src="src" :type="type">
    Your browser does not support the video tag.
  </video>
</template>

<script setup lang="ts">
const props = defineProps<{
  src: string;
  type: string;
  poster: string;
}>();

const video = ref<HTMLVideoElement | null>(null);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const videoElement = entry.target as HTMLVideoElement;
        const source = videoElement.querySelector('source');
        if (source && source.dataset.src) {
          source.src = source.dataset.src;
          videoElement.load();
        }
        observer.unobserve(videoElement);
      }
    });
  });

  if (video.value) {
    observer.observe(video.value);
  }
});
</script>