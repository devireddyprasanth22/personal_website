<template>
    <section id="contact" class="mt-16">
        <div class="text-center">
            <div
                class="px-48 py-3 flex items-center text-sm text-gray-800 before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600">
                <h2 class="max-w-xl mb-2 text-2xl tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-black">
                    Contact Me</h2>
            </div>
            <div class="nav-sm:w-[80%] ssm:w-[85%] w-2/3 flex justify-center flex-col  mx-auto select-none mb-[50px]">
                <form name="contact" method="POST" data-netlify="true">
                    <!-- Hidden input to specify the form name for Netlify -->
                    <input type="hidden" name="form-name" value="contact">
                    <div>
                        <p>
                            <label class="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-950 text-left">Your
                                Name <input type="text" name="name"
                                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-slate-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                    placeholder="Name" /></label>
                        </p>
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-950 text-left">Your email
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
                        class="mt-2 bg-gray-800 hover:bg-slate-950 text-white font-mono font-bold py-2 px-4 rounded-full flex justify-between ">Send
                        message</button>
                </form>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
</script>
