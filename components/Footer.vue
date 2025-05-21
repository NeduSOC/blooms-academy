<template>
  <footer class="bg-[#42529F] text-white px-6 py-12 relative">
    <!-- Floating Side Buttons -->
    <div
      class="hidden lg:flex flex-col gap-2 fixed right-4 top-1/2 transform -translate-y-1/2 z-50"
    >
      <button
        class="border border-white px-4 py-2 rotate-90 origin-bottom-right text-sm"
      >
        Visit
      </button>
      <button
        class="border border-white px-4 py-2 rotate-90 origin-bottom-right text-sm"
      >
        Apply
      </button>
    </div>

    <div class="max-w-7xl mx-auto space-y-12">
      <!-- CTA Section -->
      <div class="text-center lg:text-left">
        <h2 class="text-3xl font-bold">Join The Bloom Family Today!!!</h2>
        <p class="mt-4 max-w-3xl mx-auto lg:mx-0">
          Nurturing young minds through innovative education, personalized
          mentorship, and diverse opportunities. We empower students to discover
          their passions, develop essential skills, and become confident leaders
          ready to excel in a dynamic world. Together, we foster a community of
          learners dedicated to achieving greatness and making a positive
          impact.
        </p>

        <div class="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <div
            class="flex items-center border border-white px-4 py-2 w-full sm:w-auto"
          >
            <input
              type="email"
              placeholder="Input Your Email Address Here"
              class="bg-transparent outline-none text-white placeholder-white flex-1"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>

          <div class="flex gap-4">
            <button class="border border-white px-6 py-2">Apply</button>
            <button class="border border-white px-6 py-2">Visit</button>
          </div>
        </div>
      </div>

      <hr class="border-white border-opacity-30" />

      <!-- Bottom Info Section -->
      <div class="flex flex-col lg:flex-row justify-between gap-12">
        <!-- Left: Contact -->
        <div class="space-y-4">
          <h3 class="text-xl font-bold">Bloom Academy</h3>
          <div class="space-y-1 text-sm">
            <p>📍 No. 8 Address of School, Abuja Nigeria</p>
            <p>📞 +234 000 0000 0000</p>
            <p>📧 bloomacademy@gmail.com</p>
          </div>
        </div>

        <!-- Right: Connect -->
        <div class="space-y-4">
          <h3 class="text-xl font-bold">Connect With Us</h3>
          <div class="flex gap-4 text-2xl">
            <i class="fab fa-x-twitter"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-facebook"></i>
          </div>
          <div class="text-sm space-x-4">
            <a href="#" class="underline">Privacy Policy</a>
            <span>|</span>
            <a href="#" class="underline">Powered By Slate</a>
            <span>|</span>
            <a href="#" class="underline">Accessibility</a>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div
        class="text-center text-sm pt-6 border-t border-white border-opacity-20"
      >
        Copyright © 2023
        <a href="#" class="underline">Blooms Academy Suncity, Abuja</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
  // FontAwesome or icon library can be imported here if needed.
</script>

<style scoped>
  /* You can add @import for FontAwesome or custom fonts here if needed */
</style>
