<template>
  <section>
    <Hero className="About Us" background="/academics.svg" />
    
    <div class="container mx-auto px-6 py-16">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Bloom and Blossom @ Blooms Academy, Abuja
        </h1>
        
        <p class="text-xl md:text-2xl text-primary font-medium mb-8 italic">
          Unlock Your Child's Potential
        </p>
        
        <div class="text-lg md:text-xl text-gray-700 leading-relaxed space-y-6 mb-12">
          <p>
            We are graced to tender children and young adults, as we nurture young minds to bloom into confident, curious, and creative individuals who are passionate about innovation, creativity, problem-solving and making the world a better place.
          </p>
          
          <p>
            Our Abuja-based school offers a dynamic learning environment, fostering academic excellence, character development and social responsibility.
          </p>
          
          <p>
            We invite you to experience the <strong><em>Blooms difference</em></strong>, where school is more than academics; it's a journey of discovery, purpose and joy.
          </p>
        </div>
        
        <div class="text-2xl md:text-3xl font-bold text-primary">
          <em>Join us. Let your child bloom!</em>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Hero from "~/components/admissions/Hero.vue";
</script>