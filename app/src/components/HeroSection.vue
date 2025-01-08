<template>
    <section class="py-32">
    <div class="max-w-screen-xl px-4 py-8 mx-auto flex mb-4">

        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 w-1/2 h-12 ">
        <div class="mr-auto place-self-center lg:col-span-7">
            <span class="flex">
            <h2 class="max-w-xl mb-2 text-2xl tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Hi, I am Prasanth <span class="wave">👋</span></h2>
        </span>
            <p class="leading-8 max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-2xl dark:text-gray-400 ">A software engineer dedicated to exploring different technologies and applying learning in practical environments</p>
        </div>
        </div>
    <div class="w-1/2 h-12 " width="384" height="512">
        <img src="../../public/hero_pic.jpg">
    </div>
    </div>
</section> 
</template>
<script>
</script>
<style scoped>
.wave {
  animation-name: wave-animation;  /* Refers to the name of your @keyframes element below */
  animation-duration: 2.5s;        /* Change to speed up or slow down */
  animation-iteration-count: infinite;  /* Never stop waving :) */
  transform-origin: 70% 70%;       /* Pivot around the bottom-left palm */
  display: inline-block;
}

@keyframes wave-animation {
    0% { transform: rotate( 0.0deg) }
   10% { transform: rotate(14.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
   20% { transform: rotate(-8.0deg) }
   30% { transform: rotate(14.0deg) }
   40% { transform: rotate(-4.0deg) }
   50% { transform: rotate(10.0deg) }
   60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
  100% { transform: rotate( 0.0deg) }
}
</style>