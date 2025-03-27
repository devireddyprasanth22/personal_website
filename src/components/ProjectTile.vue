<template>
    <!--small-->
    <div class="ssm:w-[90%] md:w-[70%] lg:hidden w-[80%] mx-auto my-[40px] bg-gray-800 drop-shadow-2xl border-solid border-b-[5px] border-accent border-opacity-100 hover:translate-y-[-5px]">
        <!-- Image -->
        <div class="sm:hidden">
            <a :href="gitURL" target="_blank">
                <img class="w-[100%] opacity-50 hover:opacity-100 object-cover" :src="imageURL" alt="Project Image">
            </a>
        </div>
        
        <!-- Content Container -->
        <div class="mx-[5px] p-[20px] bg-inherit relative bg-cover">
            <!-- Project Details -->
            <h2 class="hover:text-accent text-[25px] mb-[20px] text-white font-semibold bg-inherit">{{ title }}</h2>
            <p class="text-main text-small bg-inherit mb-[5px]">{{ description }}</p>

            <!-- GitHub Link -->
            <a :href="gitURL" target="_blank" class="mt-4 inline-block">
                <button class="bg-slate-700 hover:bg-slate-950 text-white font-mono font-bold py-2 px-4 rounded-full flex justify-between">
                    View on Github
                    <svg class="mx-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50" style="fill:#FFFFFF;">
                        <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"/>
                    </svg>
                </button>
            </a>
        </div>
    </div>
    
    <div 
    class="relative bg-black text-white rounded-lg overflow-hidden transition-all duration-300 hover:ring-2 hover:ring-gray-400 w-[30%]"
    @click="toggleExpand"
  >
    <!-- Project Image -->
    <div class="relative">
      <img :src="imageURL" class="w-full h-64 object-cover opacity-80 transition-opacity duration-300 p-2" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      <h3 class="absolute bottom-6 left-6 text-2xl font-bold">{{ title }}</h3>
    </div>

    <!-- Description & Dropdown -->
    <div class="transition-all duration-300" :class="isExpanded ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'">
      <div class="px-6 py-4 bg-gray-900 rounded-b-lg">
        <p class="text-gray-300 text-sm mb-3">{{ description }}</p>
        
        <div class="flex flex-wrap gap-2 mb-4">
          <span v-for="tag in tags" :key="tag" class="px-2 py-1 text-xs font-semibold bg-gray-700 rounded">
            {{ tag }}
          </span>
        </div>

        <div class="flex gap-4">
            <button
                    class="bg-slate-700 hover:bg-slate-950 text-white font-mono font-bold py-2 px-4 rounded-full flex justify-between ">
                    View on Github
                    <svg class="mx-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50"
                        style="fill:#FFFFFF;">
                        <path
                            d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z">
                        </path>
                    </svg>
                </button>
        </div>
      </div>
    </div>

    <!-- Dropdown Arrow -->
    <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 transition-transform duration-300" :class="isExpanded ? 'rotate-180' : ''" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M6 9l6 6 6-6"></path>
      </svg>
    </div>
  </div>


</template>
<script setup lang="ts">
import { ref } from "vue";

defineProps(["title", "description", "imageURL", "gitURL", "tags"]);
const isExpanded = ref(false);

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};
</script>
