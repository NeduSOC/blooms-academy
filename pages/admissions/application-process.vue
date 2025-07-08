<template>
    <div>
        <AdmissionsHero background="/ad.jpg" />
        <div class="max-w-7xl mx-auto py-14 px-4">
            <div class="text-[#42529F] text-4xl font-medium">Application Process</div>
            <div class="mt-5">Our classrooms are safe havens where teachers are not just educators but also mentors. At Blooms Academy, we don't just teach, we care. Students thrive in a warm, inclusive environment where every voice is heard, and every child matters.</div>
            <div class="mt-4">We invite you to experience the Blooms difference, where school is more than academics; it's a journey of discovery, purpose and joy.</div>
            <div class="font-semibold mt-4">Join us. Let your child bloom!</div>
            
            <!-- Accordion Section -->
            <div class="mt-12">
                <div class="font-medium text-[#42529F] mb-6">ADMISSIONS PROCESS</div>
                
                <div class="border border-gray-500 rounded-sm overflow-hidden">
                    <!-- Step 1 -->
                    <div class="border-b border-gray-300 last:border-b-0">
                        <button 
                            @click="toggleStep(1)"
                            class="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                        >
                            <div class="flex items-center">
                                <span class="text-[#42529F] mr-3">+</span>
                                <span class="font-medium">STEP 1: SUBMIT THE ADMISSIONS APPLICATION</span>
                            </div>
                            <svg 
                                :class="{ 'rotate-180': activeStep === 1 }"
                                class="w-5 h-5 text-gray-500 transition-transform duration-200"
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div 
                            v-show="activeStep === 1"
                            class="px-6 pb-4 bg-gray-50 text-gray-700"
                        >
                            Complete and submit your admissions application through our online portal or visit our admissions office.
                        </div>
                    </div>

                    <!-- Step 2 -->
                    <div class="border-b border-gray-300 last:border-b-0">
                        <button 
                            @click="toggleStep(2)"
                            class="w-full px-6 py-4 text-left bg-orange-200 hover:bg-orange-300 focus:outline-none focus:bg-orange-300 transition-colors duration-200 flex items-center justify-between"
                        >
                            <div class="flex items-center">
                                <span class="text-[#42529F] mr-3">-</span>
                                <span class="font-medium text-gray-800">STEP 2: REGISTER FOR A PLACEMENT TEST</span>
                            </div>
                            <svg 
                                :class="{ 'rotate-180': activeStep === 2 }"
                                class="w-5 h-5 text-gray-500 transition-transform duration-200"
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div 
                            v-show="activeStep === 2"
                            class="px-6 pb-4 bg-orange-100 text-gray-700"
                        >
                            <p class="mb-4">Click the following links for test registration and details.</p>
                            <ul class="space-y-2">
                                <li><strong>WPPSI</strong> for Kindergarten and 1st grade applicants</li>
                                <li><strong>WISC</strong> for 2nd through 4th grade applicants</li>
                                <li><strong>ISEE</strong> for 5th through 12th grade applicants</li>
                            </ul>
                            <p class="mt-4 text-sm">
                                Applicants may test at any school administering the <strong>ISEE</strong>, or they may use the ISEE's at-home option, but scores must be sent to STE using our school code (443433).
                            </p>
                        </div>
                    </div>

                    <!-- Step 3 -->
                    <div class="border-b border-gray-300 last:border-b-0">
                        <button 
                            @click="toggleStep(3)"
                            class="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                        >
                            <div class="flex items-center">
                                <span class="text-[#42529F] mr-3">+</span>
                                <span class="font-medium text-gray-800">STEP 3: SUBMIT TRANSCRIPTS</span>
                            </div>
                            <svg 
                                :class="{ 'rotate-180': activeStep === 3 }"
                                class="w-5 h-5 text-gray-500 transition-transform duration-200"
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div 
                            v-show="activeStep === 3"
                            class="px-6 pb-4 bg-gray-50 text-gray-700"
                        >
                            Submit official transcripts from your child's current or previous school to complete the application process.
                        </div>
                    </div>

                    <!-- Step 4 -->
                    <div class="border-b border-gray-300 last:border-b-0">
                        <button 
                            @click="toggleStep(4)"
                            class="w-full px-6 py-4 text-left bg-red-900 text-white hover:bg-red-800 focus:outline-none focus:bg-red-800 transition-colors duration-200 flex items-center justify-between"
                        >
                            <div class="flex items-center">
                                <span class="text-white mr-3">-</span>
                                <span class="font-medium">STEP 4: PROVIDE RECOMMENDATION(S)</span>
                            </div>
                            <svg 
                                :class="{ 'rotate-180': activeStep === 4 }"
                                class="w-5 h-5 text-gray-300 transition-transform duration-200"
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div 
                            v-show="activeStep === 4"
                            class="px-6 pb-4 bg-red-100 text-gray-700"
                        >
                            Provide letters of recommendation from teachers, counselors, or other relevant educators who can speak to your child's academic abilities and character.
                        </div>
                    </div>

                    <!-- Step 5 -->
                    <div class="border-b border-gray-300 last:border-b-0">
                        <button 
                            @click="toggleStep(5)"
                            class="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                        >
                            <div class="flex items-center">
                                <span class="text-[#42529F] mr-3">+</span>
                                <span class="font-medium text-gray-800">STEP 5: ATTEND A FAMILY INTERVIEW OR OBSERVATION</span>
                            </div>
                            <svg 
                                :class="{ 'rotate-180': activeStep === 5 }"
                                class="w-5 h-5 text-gray-500 transition-transform duration-200"
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div 
                            v-show="activeStep === 5"
                            class="px-6 pb-4 bg-gray-50 text-gray-700"
                        >
                            Schedule and attend a family interview or classroom observation as part of the final admissions process.
                        </div>
                    </div>
                </div>

                <!-- Please Note Section -->
                <div class="mt-6 text-gray-700">
                    <div class="font-semibold mb-2">Please Note</div>
                    <div class="text-sm">
                        If applying for need-based financial aid, fill out a 
                        <a href="#" class="text-blue-600 underline">confidential application online</a> 
                        by March 1. Should you have questions, visit 
                        <a href="#" class="text-blue-600 underline">Tuition & Financial Aid</a> 
                        or contact the Business Office at 
                        <a href="tel:713.666.3111" class="text-blue-600 underline">713.666.3111</a>.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const activeStep = ref(2) // Step 2 is initially open as shown in the image

const toggleStep = (step) => {
    activeStep.value = activeStep.value === step ? null : step
}
</script>

<style scoped>
</style>