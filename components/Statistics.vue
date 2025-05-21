<template>
  <div
    class="bg-[#42529F] min-h-screen flex flex-col justify-center items-center"
  >
    <div class="flex flex-col lg:flex-row w-full max-w-7xl h-full">
      <!-- Statistics Section - fills width on small screens -->
      <div class="w-full lg:w-2/5">
        <Stats />
      </div>

      <!-- Map Section - hidden on small screens -->
      <div class="hidden lg:block w-full lg:w-3/5">
        <WorldMap />
      </div>
    </div>
  </div>
</template>

<script setup>
  import Stats from "~/components/Stats.vue";
  import WorldMap from "~/components/WorldMap.vue";
</script>
