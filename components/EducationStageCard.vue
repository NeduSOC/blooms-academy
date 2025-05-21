<template>
  <div class="relative group overflow-hidden shadow-lg h-[640px] w-full">
    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
      :style="{ backgroundImage: `url(${image})` }"
    ></div>

    <!-- Blue Overlay -->
    <div
      class="absolute inset-0 bg-blue-950 bg-opacity-80 transition-opacity duration-500 group-hover:bg-opacity-0"
    ></div>

    <!-- Red Decoration - Left -->
    <div
      class="absolute top-1/2 left-[-10px] -translate-y-[40%] h-4 bg-red-600 transition-all duration-500 w-8 group-hover:w-1/3"
    ></div>

    <!-- Red Decoration - Right -->
    <div
      class="absolute top-[calc(50%-45px)] right-[-4px] h-4 w-6 bg-red-600"
    ></div>

    <!-- Concentric Circles (centered in container) -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
    >
      <!-- Outer Circle -->
      <div
        class="w-96 h-96 rounded-full bg-white opacity-5 scale-0 group-hover:scale-100 transition-transform duration-500"
      ></div>

      <!-- Inner Circle -->
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-white opacity-15 scale-0 group-hover:scale-100 transition-transform duration-500"
      ></div>
    </div>

    <!-- Content Layer -->
    <div
      class="relative z-10 text-center text-white px-4 flex flex-col justify-center items-center h-full"
    >
      <h2 class="text-3xl font-bold mb-2">{{ title }}</h2>

      <!-- Dotted line above -->
      <div
        class="w-3/4 border-t-4 border-dotted border-white my-4 transition-opacity duration-500 group-hover:opacity-0"
      ></div>

      <!-- Age Range (visible initially, hides on hover) -->
      <p class="text-lg transition-opacity duration-500 group-hover:opacity-0">
        {{ ageRange }}
      </p>

      <!-- Dotted line below -->
      <div
        class="w-3/4 border-t-4 border-dotted border-white my-4 transition-opacity duration-500 group-hover:opacity-0"
      ></div>

      <!-- Hover Text (visible only on hover) -->
      <p
        class="absolute w-4/5 text-white text-xl font-semibold opacity-0 transition-opacity duration-500 text-center group-hover:opacity-100"
      >
        {{ hoverText }}
      </p>

      <!-- Learn More Button (shows on hover) -->
      <button
        class="relative z-10 mt-4 px-6 py-2 text-2xl border border-white text-white font-medium transition-opacity duration-500 opacity-0 group-hover:opacity-100"
      >
        Learn More
      </button>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    title: String,
    ageRange: String,
    image: String,
    hoverText: String,
  });
</script>
