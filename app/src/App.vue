<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue';
import Interests from './components/Interests.vue'

</script>

<template>
        <NavBar></NavBar>
        <HeroSection></HeroSection>
        <Interests></Interests>
</template>
