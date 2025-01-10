<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue';
import About from './components/About.vue'

</script>

<template>
        <NavBar></NavBar>
        <HeroSection></HeroSection>
        <About></About>
</template>
