<template>
  <section class="flex flex-col md:flex-row w-full">
    <EducationStageCard
      title="Early Years"
      ageRange="1 to 5 Years"
      image="/nursery.jpg"
      hoverText="Nurturing young minds through innovative education, personalized mentorship, and diverse"
    />
    <EducationStageCard
      title="Primary"
      ageRange="6 to 12 Years"
      image="/primary.jpg"
      hoverText="Nurturing young minds through innovative education, personalized mentorship, and diverse"
    />
    <EducationStageCard
      title="Secondary"
      ageRange="12 and above"
      image="/secondary.jpg"
      hoverText="Nurturing young minds through innovative education, personalized mentorship, and diverse"
    />
  </section>
</template>

<script setup>
  import EducationStageCard from "~/components/EducationStageCard.vue";
</script>
