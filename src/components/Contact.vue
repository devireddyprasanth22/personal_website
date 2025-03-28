<template>
    <section id="contact" class="mt-16">
        <div class="flex items-center justify-center text-center">
            <div
                class="px-6 sm:px-48 py-3 flex flex-col sm:flex-row items-center sm:items-center text-sm text-gray-800 before:w-64 before:border-t before:border-gray-200 before:me-6 after:w-64 after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600">
                <h2
                    class="text-center sm:text-left max-w-xl mb-2 text-5xl tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white text-black">
                    Contact Me
                </h2>
            </div>
        </div>
        <div
            class="max-w-screen-xl px-4 py-8 mx-auto nav-sm:w-[80%] ssm:w-[85%] w-2/3 flex flex-col sm:flex-row justify-between mx-auto select-none mb-[50px]">
            <!-- Form Section -->
            <div class="w-full sm:w-1/2 mb-8 sm:mb-0">
                <form name="contact" method="POST" data-netlify="true">
                    <!-- Hidden input to specify the form name for Netlify -->
                    <input type="hidden" name="form-name" value="contact">
                    <div>
                        <p>
                            <label class="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-950 text-left">Your
                                Name
                                <input type="text" name="name"
                                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-slate-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                    placeholder="Name" />
                            </label>
                        </p>
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-950 text-left">Your
                            email
                            <input type="email" name="email"
                                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-slate-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="name@email.com" required>
                        </label>
                    </div>

                    <div class="sm:col-span-2">
                        <label for="message"
                            class="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-950 text-left">Your
                            message
                            <textarea id="message" name="message" rows="6"
                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Leave a message..." required></textarea>
                        </label>
                    </div>

                    <button type="submit"
                        class="mt-2 bg-gray-800 hover:bg-gray-600 text-white font-mono font-bold py-2 px-4 rounded-full flex justify-between">Send
                        message</button>
                </form>
            </div>

            <!-- Contact Details Section -->
            <div class="w-full sm:w-1/2 mb-8 sm:mb-0 pl-0 sm:pl-24 mt-4 sm:mt-0 mx-auto text-center">
                <div class="mb-4">
                    <!-- Email Box -->
                    <div class="p-4 border border-gray-300 rounded-lg dark:bg-slate-800 flex items-center">
                        <span class="flex items-center flex-wrap"> <svg viewBox="0 -2.5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" width="16" height="16"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>email [#1572]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -922.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M294,774.474 L284,765.649 L284,777 L304,777 L304,765.649 L294,774.474 Z M294.001,771.812 L284,762.981 L284,762 L304,762 L304,762.981 L294.001,771.812 Z" id="email-[#1572]"> </path> </g> </g> </g> </g></svg><a href="mailto:devireddyprasanth22@gmail.com"
                                class="text-white ml-2 break-all">devireddyprasanth22@gmail.com</a></span>
                    </div>
                </div>

                <div class="mb-4">
                    <!-- Phone Box -->
                    <div class="p-4 border border-gray-300 rounded-lg dark:bg-slate-800 flex items-center">
                        <span class="flex items-center"><svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1 5V1H7V5L4.5 7.5L8.5 11.5L11 9H15V15H11C5.47715 15 1 10.5228 1 5Z" fill="#ffffff"></path> </g></svg> <a href="tel:+6593863823" class="text-white ml-2">+65 9386 3823</a></span>
                    </div>
                </div>

                <div class="mb-4">
                    <!-- Location Box -->
                    <div class="p-4 border border-gray-300 rounded-lg dark:bg-slate-800 flex items-center">
                        <span class="flex items-center"><svg viewBox="-4 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000" width="16" height="16"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>location</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-104.000000, -411.000000)" fill="#ffffff"> <path d="M116,426 C114.343,426 113,424.657 113,423 C113,421.343 114.343,420 116,420 C117.657,420 119,421.343 119,423 C119,424.657 117.657,426 116,426 L116,426 Z M116,418 C113.239,418 111,420.238 111,423 C111,425.762 113.239,428 116,428 C118.761,428 121,425.762 121,423 C121,420.238 118.761,418 116,418 L116,418 Z M116,440 C114.337,440.009 106,427.181 106,423 C106,417.478 110.477,413 116,413 C121.523,413 126,417.478 126,423 C126,427.125 117.637,440.009 116,440 L116,440 Z M116,411 C109.373,411 104,416.373 104,423 C104,428.018 114.005,443.011 116,443 C117.964,443.011 128,427.95 128,423 C128,416.373 122.627,411 116,411 L116,411 Z" id="location" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg> <p class="text-white ml-2">Singapore</p></span>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup lang="ts">
</script>
