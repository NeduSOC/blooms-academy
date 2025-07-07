<template>
  <section>
    <Hero className="Academics" background="/academics.svg" />
    
    <!-- Academics Overview -->
    <section class="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div class="max-w-6xl mx-auto px-5">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-5xl font-bold text-gray-800 mb-5 tracking-wide">ACADEMICS</h1>
          <h2 class="text-2xl text-gray-600 mb-8 font-semibold">Where Every Child's Potential Blooms</h2>
          <p class="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
            At Blooms Academy, we do more than educate — we empower. Our academic programmes are designed to inspire a lifelong love for learning, nurture each child's unique strengths, and prepare them to thrive in a rapidly changing world. From the foundational years through to graduation, every stage of learning is purposeful, engaging, and built for excellence.
          </p>
        </div>
      </div>
    </section>

    <!-- Early Years Foundation Stage -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-5">
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <div class="space-y-6">
            <h2 class="text-4xl font-bold text-gray-800">Early Years Foundation Stage (EYFS)</h2>
            <h3 class="text-xl text-red-500 font-semibold">Bright Beginnings, Strong Foundations</h3>
            <p class="text-lg leading-relaxed text-gray-700">
              In our Early Years programme, young learners are welcomed into a warm, nurturing space where curiosity is celebrated and discovery is a daily adventure. Aligned with international EYFS standards, our approach blends structured learning with purposeful play, helping children develop confidence, communication skills, and a strong academic foundation. Every child is guided with care to explore, create, and grow — socially, emotionally, and intellectually.
            </p>
          </div>
          <div class="flex justify-center">
            <div class="w-80 h-80 bg-gradient-to-br from-pink-400 to-purple-300 rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <span class="text-6xl">🌱</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Primary School -->
    <section class="py-20 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
      <div class="max-w-6xl mx-auto px-5">
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <div class="flex justify-center order-2 md:order-1">
            <div class="w-80 h-80 bg-gradient-to-br from-teal-300 to-pink-300 rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <span class="text-6xl">📚</span>
            </div>
          </div>
          <div class="space-y-6 order-1 md:order-2">
            <h2 class="text-4xl font-bold text-white">Primary School (Keystages 1 and 2)</h2>
            <h3 class="text-xl text-yellow-300 font-semibold">Inspiring Young Minds, One Lesson at a Time</h3>
            <p class="text-lg leading-relaxed text-blue-100">
              Our Primary School offers a dynamic, well-rounded curriculum that challenges and excites. Core subjects like English, Math, and Science are taught alongside creative and digital disciplines, developing both analytical and imaginative thinking. Through engaging projects, interactive learning, and personalized support, we help students become confident problem-solvers and thoughtful team players. At this stage, children build not just knowledge — they build character.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Secondary School -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-5">
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <div class="space-y-6">
            <h2 class="text-4xl font-bold text-gray-800">Secondary School (Keystages 3 and 4)</h2>
            <h3 class="text-xl text-red-500 font-semibold">Shaping Leaders for Tomorrow</h3>
            <p class="text-lg leading-relaxed text-gray-700">
              At the Secondary level, learning becomes more specialized, strategic, and student-driven. Our curriculum is globally aligned and future-focused, preparing students for top-tier national and international exams. But it's more than academics — it's about equipping young people with the skills, mindset, and values they need to lead in a global world. From leadership programmes to real-world learning experiences, we position every student for success in university, career, and life.
            </p>
          </div>
          <div class="flex justify-center">
            <div class="w-80 h-80 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <span class="text-6xl">🎓</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div class="max-w-6xl mx-auto px-5">
        <div class="text-center max-w-2xl mx-auto">
          <h2 class="text-4xl font-bold mb-5">Academic excellence starts here.</h2>
          <p class="text-xl mb-10 text-gray-300">The future begins at Blooms.</p>
          <button class="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-red-600 hover:to-red-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl">
            Explore Our Programs
          </button>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
  import Hero from "~/components/admissions/Hero.vue";
</script>