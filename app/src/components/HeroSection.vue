<template>
    <section class="mt-32">
        <div class="max-w-screen-xl px-4 py-8 mx-auto flex mb-4">

            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 w-2/3 h-12 ">
                <div class="mr-auto place-self-center lg:col-span-7 py-12">
                    <h2
                        class="max-w-xl mb-2 text-2xl tracking-tight leading-none md:text-5xl xl:text-7xl dark:text-black">
                        Hi, I am Prasanth <span class="wave">👋</span></h2>
                    <p
                        class="leading-8 max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-2xl dark:text-gray-800 ">
                        A software engineer dedicated to exploring different technologies and applying learning in
                        practical environments. </p>
                    <p
                        class="leading-8 max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-2xl dark:text-gray-800 ">
                        Some of my recent works include <span id="e1">smart energy management systems</span>, <span
                            id="e2"> molecular modelling using machine learning</span> and <span id="e3">HPC to solve
                            computationally intensive tasks</span></p>
                    <a href="https://drive.google.com/file/d/15N7mCcUF-9FiI2pAZCvAox23z95Qt768/view?usp=share_link"
                        target="_blank">
                        <button
                            class="cursor-pointer flex justify-between bg-gray-800 px-3 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-[120px]">
                            Resume
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" class="w-5 h-5 animate-bounce">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"></path>
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
            <div class="w-1/3 relative">
                <div id="carousel" class="rounded-lg shadow-lg overflow-hidden" style="height: 500px; position: relative;">
                    <div class="carousel-container" style="position: relative; height: 100%; width: 100%;">
                        <img class="carousel-image" src="/hero_pic.jpg" alt="Hero">
                        <img class="carousel-image" src="/boulder1.jpg" alt="Boulder">
                        <img class="carousel-image" src="/photo.jpg" alt="Photo">
                        <img class="carousel-image" src="/fyp.jpg" alt="Photo">
                        <img class="carousel-image" src="/cooking.jpg" alt="Photo">
                        <img class="carousel-image" src="/ocean.jpg" alt="Photo">
                    </div>
                </div>
                <button id="prev" class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-l-lg opacity-75 hover:opacity-100 transition-opacity -left-8">‹</button>
                <button id="next" class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-r-lg opacity-75 hover:opacity-100 transition-opacity -right-8">›</button>
            </div>
        </div>

    </section>
</template>
<style scoped>
.wave {
    animation-name: wave-animation;
    /* Refers to the name of your @keyframes element below */
    animation-duration: 2.5s;
    /* Change to speed up or slow down */
    animation-iteration-count: infinite;
    /* Never stop waving :) */
    transform-origin: 70% 70%;
    /* Pivot around the bottom-left palm */
    display: inline-block;
}
.carousel-container {
    position: relative;
}

.carousel-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}

.carousel-image.active {
    opacity: 1;
}


@keyframes wave-animation {
    0% {
        transform: rotate(0.0deg)
    }

    10% {
        transform: rotate(14.0deg)
    }

    /* The following five values can be played with to make the waving more or less extreme */
    20% {
        transform: rotate(-8.0deg)
    }

    30% {
        transform: rotate(14.0deg)
    }

    40% {
        transform: rotate(-4.0deg)
    }

    50% {
        transform: rotate(10.0deg)
    }

    60% {
        transform: rotate(0.0deg)
    }

    /* Reset for the last half to pause */
    100% {
        transform: rotate(0.0deg)
    }
}
</style>
<script setup lang="ts">
import { onMounted } from 'vue';
import { annotate, annotationGroup } from 'rough-notation';

// Carousel functionality
onMounted(() => {
     // Carousel setup
     const images = document.querySelectorAll('.carousel-image') as NodeListOf<HTMLElement>;
    const prevButton = document.getElementById('prev') as HTMLElement;
    const nextButton = document.getElementById('next') as HTMLElement;
    let currentIndex = 0;
    let interval: number;

    const showImage = (index: number) => {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    };

    const nextImage = () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    };

    const prevImage = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    };

    const startCarousel = () => {
        interval = window.setInterval(nextImage, 5000);
    };

    const stopCarousel = () => {
        clearInterval(interval);
    };

    // Initialize first image
    showImage(currentIndex);
    
    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => {
            stopCarousel();
            prevImage();
            startCarousel();
        });

        nextButton.addEventListener('click', () => {
            stopCarousel();
            nextImage();
            startCarousel();
        });
    }

    startCarousel();

    // Rough Notation functionality
    const e1: HTMLElement | null = document.querySelector('#e1');
    const e2: HTMLElement | null = document.querySelector('#e2');
    const e3: HTMLElement | null = document.querySelector('#e3');

    if (e1 && e2 && e3) {
        const a1 = annotate(e1, {
            type: 'underline',
            color: 'red',
            multiline: true,
            animationDuration: 1000,
            iterations: 1,
        });
        const a2 = annotate(e2, {
            type: 'underline',
            color: 'red',
            multiline: true,
            animationDuration: 1000,
            iterations: 1,
        });
        const a3 = annotate(e3, {
            type: 'underline',
            color: 'red',
            multiline: true,
            animationDuration: 1000,
            iterations: 1,
        });

        const arr = annotationGroup([a1, a2, a3]);
        arr.show();
    }
});
</script>
