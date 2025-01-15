<template>
    <div v-if="reversed"
        class="tile-sp:hidden hover:translate-y-[-5px] w-[70%] mx-auto my-[75px] bg-gray-800 drop-shadow-xl border-solid border-b-[5px] border-accent border-opacity-100 flex flex-row">
        <div class="w-3/6 object-cover  flex justify-center align-center overflow-hidden">
        </div>
        <div class="w-3/6 mt-[15px] mx-[5px] p-[20px] bg-inherit relative"> 

        <!--add svg of star-->

        <!-- Title -->
        <h2 class=" hover:text-accent text-[25px] mb-[20px] text-white font-semibold bg-inherit">{{ title }}
        </h2>

        <!-- Description -->
        <p class="text-main text-small bg-inherit mb-[5px]">
            {{ description }}
        </p>

        <!-- Links -->
        <!-- <div>
</div> -->

    </div>

    </div>
    <!--Content on left and project pic on left-->
    <div v-else
        class="tile-sp:hidden hover:translate-y-[-5px] w-[70%] mx-auto my-[75px] bg-gray-800 drop-shadow-xl border-solid border-b-[5px] border-accent border-opacity-100 flex flex-row">
        <!-- Content Container -->
        <div class="w-3/6 mt-[15px] mx-[5px] p-[20px] bg-inherit relative">

            <!--add svg of star-->

            <!-- Title -->
            <h2 class=" hover:text-accent text-[25px] mb-[20px] text-white font-semibold bg-inherit">{{ title }}
            </h2>

            <!-- Description -->
            <p class="text-main text-small bg-inherit mb-[5px]">
                {{ description }}
            </p>

            <!-- Links -->
            <!-- <div>
            </div> -->

        </div>

        <!-- Image -->
        <!-- <div class="w-3/6 object-cover  flex justify-center align-center overflow-hidden">
        </div> -->
    </div>

</template>
<script>
export default {
    name: 'ProjectTile',
    props: {
        reversed: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
    }
}
</script>