<template>
    <div>
        <AdmissionsHero background="/ad.jpg" />
        <div class="max-w-7xl mx-auto py-14 px-4">
    <div class="text-[#42529F] text-4xl font-medium">Academics</div>
    <div class="text-xl text-[#42529F] uppercase font-medium mt-6">Where Every Child's Potential Blooms</div>
    <div class="mt-5 text-lg">At Blooms Academy, we do more than educate — we empower.</div>
    <div class="mt-4">Our academic programmes are designed to inspire a lifelong love for learning, nurture each child's unique strengths, and prepare them to thrive in a rapidly changing world. From the foundational years through to graduation, every stage of learning is purposeful, engaging, and built for excellence.</div>
    
    <div class="mt-10 grid grid-cols-3 gap-4">
      <!-- Early Years Foundation Stage -->
      <div class="relative group cursor-pointer" @click.prevent="navigateTo('/academics/early-years')">
        <img class="h-[280px] w-full object-cover" src="/nursery.jpg" alt="Nursery" />
        <!-- Default label -->
        <div class="absolute bottom-0 left-0 right-0 bg-[#42529F] bg-opacity-75 border-t-8 border-red-500 text-white text-center py-3 group-hover:opacity-0 transition-all duration-500 ease-in-out">
          <span class="font-medium">Early Years Foundation Stage (EYFS)</span>
        </div>
        <!-- Hover description -->
        <div class="absolute inset-0 bg-[#42529F] bg-opacity-75 border-t-8 border-red-500 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform scale-95 group-hover:scale-100 flex items-center justify-center p-6">
          <div class="text-center">
            <h3 class="font-bold text-lg mb-3">Early Years Foundation Stage (EYFS)</h3>
            <p class="text-sm leading-relaxed">
              Bright Beginnings, Strong Foundations.
            </p>
            <button class="uppercase border border-white rounded-sm px-4 py-2 mt-4 font-medium">Learn more</button>
          </div>
        </div>
      </div>
      
      <!-- Primary School -->
      <div class="relative group cursor-pointer" @click.prevent="navigateTo('/academics/primary')">
        <img class="h-[280px] w-full object-cover" src="/nursery.jpg" alt="Primary" />
        <!-- Default label -->
        <div class="absolute bottom-0 left-0 right-0 bg-[#42529F] bg-opacity-75 border-t-8 border-red-500 text-white text-center py-3 group-hover:opacity-0 transition-opacity duration-300">
          <span class="font-medium">Primary School (Keystages 1 and 2)</span>
        </div>
        <!-- Hover description -->
        <div class="absolute inset-0 bg-[#42529F] bg-opacity-75 border-t-8 border-red-500 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform scale-95 group-hover:scale-100 flex items-center justify-center p-6">
          <div class="text-center">
            <h3 class="font-bold text-lg mb-3">Primary School (Keystages 1 and 2)</h3>
            <p class="text-sm leading-relaxed">
              Inspiring Young Minds, One Lesson at a Time.
            </p>
            <button class="uppercase border border-white rounded-sm px-4 py-2 mt-4 font-medium">Learn more</button>
          </div>
        </div>
      </div>
      
      <!-- Secondary School -->
      <div class="relative group cursor-pointer" @click.prevent="navigateTo('/academics/secondary')">
        <img class="h-[280px] w-full object-cover" src="/sec.jpg" alt="Secondary" />
        <!-- Default label -->
        <div class="absolute bottom-0 left-0 right-0 bg-[#42529F] bg-opacity-75 border-t-8 border-red-500 text-white text-center py-3 group-hover:opacity-0 transition-opacity duration-300">
          <span class="font-medium">Secondary School (Keystages 3 and 4)</span>
        </div>
        <!-- Hover description -->
        <div class="absolute inset-0 bg-[#42529F] bg-opacity-75 border-t-8 border-red-500 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
          <div class="text-center">
            <h3 class="font-bold text-lg mb-3">Secondary School (Keystages 3 and 4)</h3>
            <p class="text-sm leading-relaxed">
              Shaping Leaders for Tomorrow.
            </p>
            <button class="uppercase border border-white rounded-sm px-4 py-2 mt-4 font-medium">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>