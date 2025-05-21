<template>
  <div
    class="relative w-full h-full flex justify-center items-center overflow-hidden"
  >
    <!-- Concentric Circle Pulse -->
    <div class="absolute z-0 w-96 h-96 flex items-center justify-center">
      <!-- Outer pulsing ring -->
      <div
        class="absolute w-full h-full rounded-full bg-white animate-ping-slow opacity-20"
      ></div>
      <!-- Middle pulsing ring -->
      <div
        class="absolute w-2/3 h-2/3 rounded-full bg-white animate-ping-slow opacity-40"
        style="animation-delay: 0.5s"
      ></div>
      <!-- Inner pulsing ring -->
      <div
        class="absolute w-1/3 h-1/3 rounded-full bg-white animate-ping-slow opacity-60"
        style="animation-delay: 1s"
      ></div>
    </div>

    <!-- World Map -->
    <img
      src="/map.png"
      alt="World Map"
      class="w-full h-auto max-h-[600px] z-10"
    />

    <!-- Location Markers -->
    <div
      v-for="(marker, index) in markers"
      :key="index"
      :style="{ top: marker.top, left: marker.left }"
      class="absolute w-5 h-5 z-20"
    >
      <MapPin />
    </div>
  </div>
</template>

<script setup>
  const markers = [
    { top: "30%", left: "60%" },
    { top: "50%", left: "50%" },
    { top: "46%", left: "53%" },
    { top: "52%", left: "53%" },
    { top: "65%", left: "51%" },
    { top: "70%", left: "30%" },
    { top: "74%", left: "80%" },
  ];
</script>

<style scoped>
  @keyframes ping-slow {
    0% {
      transform: scale(1);
      opacity: 0.3;
    }
    50% {
      transform: scale(1.5);
      opacity: 0.15;
    }
    100% {
      transform: scale(1);
      opacity: 0.3;
    }
  }

  .animate-ping-slow {
    animation: ping-slow 3s infinite ease-in-out;
  }
</style>
