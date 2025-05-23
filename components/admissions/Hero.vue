<template>
  <div
    class="relative w-full h-[90vh] bg-cover bg-center flex items-center text-white"
    :style="{ backgroundImage: `url(${background})` }"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-40"></div>

    <!-- Content -->
    <div
      class="relative z-10 w-full px-6 md:px-20 flex flex-col items-center md:items-end text-center md:text-right"
    >
      <div>
        <!-- Top small text -->
        <p class="text-2xl md:text-3xl font-medium mb-2">Bloom Academy</p>

        <!-- Main heading -->
        <h1 class="text-6xl md:text-[90px] font-extrabold leading-none">
          {{ className }}
        </h1>

        <!-- Section label -->
        <p
          class="text-xl md:text-2xl font-medium mt-2 text-white text-center lg:text-left font-light"
        >
          Section
        </p>

        <!-- Mobile-only buttons -->
        <div class="mt-6 flex gap-4 md:hidden justify-center">
          <button
            class="bg-[#42529F] text-white py-2 px-5 text-sm font-semibold"
          >
            Inquire
          </button>
          <button
            class="bg-[#42529F] text-white py-2 px-5 text-sm font-semibold"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
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
