<template>
  <section class="relative w-full h-[90vh] overflow-hidden flex flex-col">
    <!-- Background videos -->
    <video
      v-for="(video, index) in videos"
      :key="index"
      v-show="activeIndex === index"
      :src="video"
      autoplay
      muted
      loop
      playsinline
      class="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500"
    ></video>

    <!-- Optional overlay -->
    <div class="absolute top-0 left-0 w-full h-full bg-black/40"></div>

    <!-- Text content centered vertically -->
    <div
      class="relative z-10 flex-grow flex flex-col justify-center items-center text-white px-4 text-center"
    >
      <h1 class="font-bold mb-4 text-3xl sm:text-4xl md:text-5xl max-w-4xl">
        Cultivating Potential for a Brighter Future
      </h1>

      <p class="max-w-xl md:max-w-3xl lg:max-w-5xl text-base md:text-xl">
        Nurturing young minds through innovative education, personalized
        mentorship, and diverse opportunities. We empower students to discover
        their passions, develop essential skills, and become confident leaders
        ready to excel in a dynamic world. Together, we foster a community of
        learners dedicated to achieving greatness and making a positive impact.
      </p>
    </div>
  </section>
</template>

<script setup>
  import { ref } from "vue";

  // List your video URLs (in public folder)
  const videos = ["https://res.cloudinary.com/dv4kgir1a/video/upload/WhatsApp_Video_2025-07-08_at_15.00.42_duk8gi.mp4"];

  const activeIndex = ref(0);

  function setActive(index) {
    activeIndex.value = index;
  }
</script>

<style scoped>
  /* Ensure you’ve added font-montreal to your Tailwind config */
</style>
