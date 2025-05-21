<template>
  <footer class="bg-[#42529F] text-white px-6 py-12 relative mt-6">
    <div class="max-w-7xl mx-auto space-y-12">
      <!-- CTA Section -->
      <div
        class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
      >
        <!-- Left: Text + Input -->
        <div class="text-center lg:text-left lg:flex-1">
          <h2 class="text-3xl font-bold">Join The Bloom Family Today!!!</h2>
          <p class="mt-4 max-w-3xl mx-auto lg:mx-0">
            Nurturing young minds through innovative education, personalized
            mentorship, and diverse opportunities. We empower students to
            discover their passions, develop essential skills, and become
            confident leaders ready to excel in a dynamic world. Together, we
            foster a community of learners dedicated to achieving greatness and
            making a positive impact.
          </p>

          <!-- Email input -->
          <div
            class="mt-6 flex items-center border border-white px-4 py-2 w-full max-w-md mx-auto lg:mx-0 rounded-md"
          >
            <input
              type="email"
              placeholder="Input Your Email Address Here"
              class="bg-transparent outline-none text-white placeholder-white placeholder-opacity-50 placeholder:text-sm flex-1"
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-send-horizontal-icon lucide-send-horizontal cursor-pointer"
            >
              <path
                d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"
              />
              <path d="M6 12h16" />
            </svg>
          </div>
        </div>

        <!-- Right: Buttons -->
        <div class="flex flex-row justify-center gap-4">
          <button class="border border-white px-6 py-2">Apply</button>
          <button class="border border-white px-6 py-2">Visit</button>
        </div>
      </div>

      <hr class="hidden sm:block border-white border-opacity-30" />

      <!-- Bottom Info Section -->
      <div class="flex flex-col lg:flex-row justify-between gap-12">
        <!-- Left: Contact -->
        <div class="space-y-4 text-center lg:text-left">
          <h3 class="text-2xl font-bold">Blooms Academy</h3>
          <div class="space-y-3 text-sm text-center lg:text-left">
            <div
              class="flex items-center justify-center lg:justify-start gap-3"
            >
              <MapPin />
              <span>No. 8 Address of School, Abuja Nigeria</span>
            </div>
            <div
              class="flex items-center justify-center lg:justify-start gap-3"
            >
              <Mail />
              <span>bloomacademy@gmail.com</span>
            </div>
            <div
              class="flex items-center justify-center lg:justify-start gap-3"
            >
              <Phone />
              <span>+234 000 0000 0000</span>
            </div>
          </div>
        </div>

        <hr class="border-white border-opacity-30 lg:hidden" />

        <!-- Right: Connect -->

        <div class="space-y-4 text-center lg:text-left w-full lg:w-auto">
          <h3 class="text-2xl font-bold text-center lg:text-left">
            Connect With Us
          </h3>

          <!-- Social Icons -->
          <div class="flex justify-center lg:justify-start gap-3">
            <div
              class="inline-flex items-center justify-center bg-white rounded-full w-8 h-8"
            >
              <Linkedin class="text-black w-4 h-4" />
            </div>
            <div
              class="inline-flex items-center justify-center bg-white rounded-full w-8 h-8"
            >
              <Instagram class="text-black w-4 h-4" />
            </div>
            <div
              class="inline-flex items-center justify-center bg-white rounded-full w-8 h-8"
            >
              <Facebook class="text-black w-4 h-4" />
            </div>
          </div>

          <!-- Policy Links -->
          <div class="text-sm text-center lg:text-left space-x-4">
            <span>Privacy Policy</span>
            <span>|</span>
            <span>Powered By Slate</span>
            <span>|</span>
            <span>Accessibility</span>
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
