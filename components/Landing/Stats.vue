<template>
  <div class="relative text-white px-4 py-12 overflow-hidden">
    <!-- Cross for desktop only -->
    <div class="hidden md:block absolute inset-0 pointer-events-none">
      <!-- Vertical Line -->
      <div
        class="absolute top-0 bottom-0 left-1/2 w-[2px] bg-white bg-opacity-30 transform -translate-x-1/2"
      />
      <!-- Horizontal Line -->
      <div
        class="absolute left-0 right-0 top-1/2 h-[2px] bg-white bg-opacity-30 transform -translate-y-1/2"
      />
    </div>

    <!-- Buttons (mobile only) -->
    <button
      v-if="currentIndex > 0"
      class="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 md:hidden"
      @click="prev"
    >
      <ChevronLeft />
    </button>

    <button
      v-if="currentIndex < stats.length - 1"
      class="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 md:hidden"
      @click="next"
    >
      <ChevronRight />
    </button>

    <!-- Mobile: Scrollable view -->
    <div
      class="flex transition-transform duration-500 md:hidden"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(stat, index) in stats"
        :key="index"
        class="min-w-full flex flex-col items-center gap-2 px-6 text-center"
      >
        <div
          class="bg-white bg-opacity-20 p-4 rounded-full w-12 h-12 flex items-center justify-center"
        >
          <component :is="stat.icon" />
        </div>
        <h3 class="text-3xl font-bold">{{ stat.value }}</h3>
        <p class="text-sm">{{ stat.text }}</p>
      </div>
    </div>

    <!-- Desktop: 2x2 Grid -->
    <div class="hidden md:grid grid-cols-2 grid-rows-2">
      <div
        v-for="(stat, index) in stats"
        :key="index"
        class="flex flex-col gap-2 p-8"
      >
        <div
          class="bg-white bg-opacity-20 p-2 rounded-full w-12 h-12 flex items-center justify-center"
        >
          <component :is="stat.icon" class="w-10 h-10" />
        </div>
        <h3 class="text-3xl font-bold">{{ stat.value }}</h3>
        <p class="text-sm">{{ stat.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  const stats = [
    {
      icon: "ChartNoAxesCombined",

      value: "100%",
      text: "of our students go onto University around the world",
    },
    {
      icon: "GraduationCap",
      value: "300",
      text: "Av. Jam score",
    },
    {
      icon: "School",
      value: "543",
      text: "Qualified Staff Delivering Exceptional Teaching Experiences Every Time",
    },
    {
      icon: "Star",
      value: "98%",
      text: "Average ISEE Rating",
    },
  ];

  let currentIndex = ref(0);

  const next = () => {
    if (currentIndex.value < stats.length - 1) currentIndex.value++;
  };

  const prev = () => {
    if (currentIndex.value > 0) currentIndex.value--;
  };
</script>
