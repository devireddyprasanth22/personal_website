<template>
    <section class="mt-16">
        <div class="text-center">
            <div
                class="px-48 py-3 flex items-center text-sm text-gray-800 before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600">
                <h2 class="max-w-xl mb-2 text-2xl tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-black">
                    Interests</h2>
            </div>

            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg w-2/3 h-12 ">
            </div>
            <div class="w-1/3">
                <Spotify></Spotify>
            </div>

        </div>

    </section>
</template>
<script setup>
import Spotify from './Spotify.vue';
</script>