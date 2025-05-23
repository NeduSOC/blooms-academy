<template>
    <div
      class="flex flex-col md:flex-row justify-between gap-10 px-6 md:px-20 py-16"
    >
      <!-- Text Area -->
      <div class="md:w-2/3">
        <div class="prose prose-lg text-[#060A31] max-w-none text-justify">
          <h1 class="text-3xl font-bold mb-6">Primary</h1>
  
          <p>
            I welcome you to the Primary School Section. I am so proud to be
            associated with a wonderful staff team, lively pupils and supportive
            parents.
          </p>
  
          <p>
            As a school, we are poised to providing quality education aimed at
            preparing learners to be useful and productive members of the society
            endowed with good morals.
          </p>
  
          <p>
            It is our mission to groom a total child whose well-being and academic
            excellence is prioritized, hence, we run a well harmonized
            Nigerian-British curriculum with committed qualified teachers and 21st
            century learning methodologies that are geared towards building
            pupils’ interests in learning. Our dedicated and willing members of
            staff work as a team. They go the extra mile in ensuring that every
            learner is inspired to learn and to apply knowledge gained in every
            setting they find themselves.
          </p>
  
          <p>
            Feel free to visit us. We look forward to welcoming you to our school.
          </p>
  
          <p class="mt-4">
            Mrs Elizabeth Chibiko<br />
            Head, Primary School
          </p>
        </div>
      </div>
  
      <!-- Book Image + Buttons (Desktop only) -->
      <div class="hidden md:flex flex-col items-center w-1/3">
        <img src="/book.jpg" alt="Book Image" class="w-[260px] mb-6" />
        <div class="flex gap-4">
          <button
            class="bg-[#42529F] text-white py-2 px-6 rounded text-sm font-semibold"
          >
            Inquire
          </button>
          <button
            class="bg-[#42529F] text-white py-2 px-6 rounded text-sm font-semibold"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
    .prose ul {
      list-style-type: disc;
      padding-left: 1.5rem;
    }
  </style>
  