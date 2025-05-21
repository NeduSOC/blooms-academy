<template>
  <header class="bg-white font-montreal shadow-md">
    <div
      class="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4"
    >
      <!-- Logo -->
      <div class="flex items-center space-x-2">
        <router-link to="/" class="cursor-pointer">
          <img src="/header.png" alt="Logo" class="h-12 w-auto" />
        </router-link>
      </div>

      <!-- Nav Links -->
      <nav class="hidden md:flex items-center space-x-8 font-medium">
        <div class="flex space-x-8 text-[#42529F] font-bold">
          <a href="#" class="hover:text-[#d63384] transition">About Us</a>
          <a href="#" class="hover:text-[#d63384] transition">Academics</a>
          <a href="#" class="hover:text-[#d63384] transition">Admissions</a>
          <a href="#" class="hover:text-[#d63384] transition">School Life</a>
          <a href="#" class="hover:text-[#d63384] transition"
            >Parent Resources</a
          >
        </div>
        <div class="w-px h-6 bg-black mx-2"></div>

        <button
          class="bg-[#42529F] text-white px-5 py-2 hover:bg-[#2f327a] transition flex items-center font-helvetica"
        >
          <LogIn size="18" class="mr-2" />
          Login
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
  // No script logic needed for this static navbar
</script>

<style scoped>
  .font-helvetica {
    font-family: Helvetica, Arial, sans-serif;
  }
</style>
