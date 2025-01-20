<template>
    <section class="mt-16">
        <div class="text-center">
            <div
                class="px-48 py-3 flex items-center text-sm text-gray-800 before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600">
                <h2 class="max-w-xl mb-2 text-2xl tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-black">
                    Projects</h2>
            </div>
        </div>
        <ProjectTile :reversed=false title="Smart Energy Management System Dashboard"
            description="An energy managment dashboard that allows users to understand their household consumption and turn appliances on/off whenever needed"
            :imageURL="SHEMS" gitURL="https://github.com/MonashSmartCityLivingLab/react_dashboard">
        </ProjectTile>
        <ProjectTile :reversed=true title="Smart Trolley"
            description="A smart shopping trolley that is aimed to simplify the shopping experience by taking away the load from the shopper. Built using geared motors, h-bridge, arduino, BLE and a range of sensors. Controlled through a simple web interface"
            :imageURL="trolley" gitURL="https://github.com/devireddyprasanth22/Smart-trolley-control">
        </ProjectTile>
        <ProjectTile :reversed= false title="RentConnect"
            description="A web based rental management application that enables easy-to-use access to rental applications for both renters and property managers, and is an effective tool to manage rental properties"
            :imageURL="Rentconnect" gitURL="https://github.com/devireddyprasanth22/RentConnect/tree/main">
        </ProjectTile>
        <ProjectTile :reversed= true title="Password Manager"
            description="A CLI password management tool built out of my personal need of storing my passwords in a safe and easily accessible manner"
            :imageURL="pswd" gitURL="https://github.com/devireddyprasanth22/Password-Manager">
        </ProjectTile>
    </section>
</template>
<script setup lang="ts">
import SHEMS from '@/assets/images/SHEMS.png'
import trolley from '@/assets/images/trolley.png'
import Rentconnect from '@/assets/images/Rentconnect.png'
import pswd from '@/assets/images/pswd.png'
import ProjectTile from '@/components/ProjectTile.vue';

</script>