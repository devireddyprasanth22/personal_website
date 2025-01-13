<template>
    <div
        class="hover:translate-y-[-5px] w-[70%] mx-auto my-[75px] bg-gray-800 drop-shadow-xl border-solid border-b-[5px] border-accent border-opacity-100 flex flex-row">
        <!-- Content Container -->
        <div class="w-3/6 mt-[15px] mx-[5px] p-[20px] bg-inherit relative">

            <!--add svg of star-->

            <!-- Title -->
            <h2>{{ title }}
            </h2>

            <!-- Description -->
            <p>
                {{ description }}
            </p>

            <!-- Links -->
            <div>
            </div>

        </div>

        <!-- Image -->
        <div>
        </div>
    </div>

</template>
<script>
export default {
    name: 'ProjectTile'
}
</script>