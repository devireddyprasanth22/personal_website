<template>
  <nav
    id="navbar"
    class="bg-slate-800 w-full fixed top-0 left-0 z-50 border-b border-white transition-transform duration-300"
    :class="{ '-translate-y-full': !showNavbar }"
  >
    <div class="px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex items-baseline space-x-4 ml-auto">
          <a href="#about"
            class="text-gray-300 hover:underline hover:decoration-blue-500 decoration-4 px-3 py-2 rounded-md text-sm font-medium transition duration-200">About Me</a>
          <a href="#projects"
            class="text-gray-300 hover:underline hover:decoration-blue-500 decoration-4 px-3 py-2 rounded-md text-sm font-medium transition duration-200">Projects</a>
          <a href="#contact"
            class="text-gray-300 hover:underline hover:decoration-blue-500 decoration-4 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const showNavbar = ref(true);
let prevScrollPos = window.scrollY;

const handleScroll = () => {
  const currentScrollPos = window.scrollY;

  // Show navbar when scrolling up, hide when scrolling down
  showNavbar.value = prevScrollPos > currentScrollPos || currentScrollPos <= 0;

  // Update previous scroll position
  prevScrollPos = currentScrollPos;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
nav {
  transition: transform 0.3s ease-in-out;
}
</style>
