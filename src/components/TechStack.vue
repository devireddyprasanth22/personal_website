<template>
 <div>
        <section class="grid gap-1" style="gap: 2rem">
            <article class="container__main flex-column gap-1">
                <div class="container__techstacks">
    <h2 class="font-bold lg:text-2xl dark:text-gray-100 light:text-gray-300 text-center md:text-left">
        Tech and tools I use
    </h2>
    <div
        class="container__techstacks flex gap-1
               flex-wrap justify-center
               md:justify-start md:flex-nowrap"
    >
        <img
            v-for="techstack in techStack"
            :key="techstack.name"
            :src="techstack.icon"
            :alt="techstack.name"
            :title="techstack.name"
            class="techstack__icon"
        />
    </div>
</div>
                </article>
                </section>
 </div>
</template>
<script lang="ts" setup>
import {techStack} from "@/assets/images/tech/tt"
</script>
