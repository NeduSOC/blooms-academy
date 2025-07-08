<template>
  <div
    class="relative w-full h-[475px] bg-cover bg-center flex items-center text-white"
    :style="{ backgroundImage: `url(${background})` }"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-40"></div>

  </div>
</template>

<script setup>
  defineProps({
    className: {
      type: String,
      required: true,
    },
    background: {
      type: String,
      required: true,
    },
  });
</script>
