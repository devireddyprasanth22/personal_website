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

    <!--Large screen-->
    <div div v-if="reversed" class="hidden lg:flex hover:translate-y-[-5px] w-[70%] mx-auto my-[75px] bg-gray-800 border-accent border-opacity-100 shadow-lg"

        style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;">
        <!-- Image -->
        <div class="w-3/6 object-cover flex justify-center items-center overflow-hidden">
            <a :href=gitURL target="_blank" style="height: 100%; padding: 0; object-fit: contain;">
                <img v-if="imageURL" class="opacity-50 hover:opacity-100 shrink-0 min-h-full min-w-full max-h-[400px]" :src=imageURL
                    alt="Project Image" loading="lazy">
            </a>
        </div>
        <div class="w-3/6 mt-[15px] mx-[5px] p-[20px] bg-inherit relative">

            <!-- Title -->
            <h2 class=" hover:text-accent text-[25px] mb-[20px] text-white font-semibold bg-inherit">{{ title }}
            </h2>

            <!-- Description -->
            <p class="text-main text-small bg-inherit mb-[5px]">
                {{ description }}
            </p>

            <!-- Links -->
            <a :href=gitURL target="_blank">
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

            </a>

        </div>

    </div>
    <!--Content on left and project pic on left-->
    <div v-else class="hidden lg:flex hover:translate-y-[-5px] w-[70%] mx-auto my-[75px] bg-gray-800 border-accent border-opacity-100 shadow-lg"

        style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;">
        <!-- Content Container -->
        <div class="w-3/6 mt-[15px] mx-[5px] p-[20px] bg-inherit relative">

            <!-- Title -->
            <h2 class=" hover:text-accent text-[25px] mb-[20px] text-white font-semibold bg-inherit">{{ title }}
            </h2>

            <!-- Description -->
            <p class="text-main text-small bg-inherit mb-[5px]">
                {{ description }}
            </p>

            <!-- Links -->
            <a :href=gitURL target="_blank">
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

            </a>

        </div>

        <!-- Image -->
        <div class="w-3/6 object-cover  flex justify-center items-center overflow-hidden">
            <a :href=gitURL target="_blank" style="height: 100%; padding: 0; object-fit: contain;">
                <img v-if="imageURL" class=" opacity-50 hover:opacity-100 shrink-0 min-h-full min-w-full " :src=imageURL
                    alt="Project Image" loading="lazy">
            </a>
        </div>
    </div>

</template>
<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';
interface Props {
    special: boolean
    reversed: boolean;
    title: string;
    description: string;
    imageURL: string;
    gitURL: string;
}

defineProps<Props>();

// export default {
//     name: 'ProjectTile',
//     props: {
//         reversed: {
//             type: Boolean,
//             default: false
//         },
//         title: {
//             type: String,
//             required: true
//         },
//         description: {
//             type: String,
//             required: true
//         },
//         imageURL: {
//             type: String,
//             required: true
//         },
//         gitURL: {
//             type: String,
//             required: true
//         }
//     }
// }
</script>