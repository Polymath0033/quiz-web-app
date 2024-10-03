<template>
    <section class="flex flex-col md:flex-row gap-5 mt-10">
        <article class="grow w-full ">
            <h1 class="text-dark-navy dark:text-white text-heading-large ">Welcome to the
                <span class="!font-medium">
                    Frontend Quiz!
                </span>
            </h1>
            <p class="text-grey-navy dark:text-light-bluish mt-12 italic text-xl !leading-[150%] font-normal ">
                Pick a subject to get started.
            </p>
        </article>
        <ul class="grow w-full grid gap-6 mb-20">
            <li class="">
                <nuxt-link to="/"
                    class=" shadow-option-shadow dark:shadow-option-dark-shadow bg-white dark:bg-navy p-5 max-w-[546px] flex items-center text-heading-small text-navy dark:text-white gap-8 rounded-3xl">
                    <div class="p-2 rounded-md h-fit bg-[#FFF1E9] w-fit">
                        <nuxt-img src="images/icon-html.svg" width="40" height="40"></nuxt-img>
                    </div>
                    HTML
                </nuxt-link>
            </li>

            <li class="">
                <nuxt-link to="/"
                    class=" shadow-option-shadow dark:shadow-option-dark-shadow bg-white dark:bg-navy p-5 max-w-[546px] flex items-center text-heading-small text-navy dark:text-white gap-8 rounded-3xl">
                    <div class="p-2 rounded-md h-fit bg-[#E0FDEF;] w-fit">
                        <nuxt-img src="images/icon-css.svg" width="40" height="40"></nuxt-img>
                    </div>
                    CSS
                </nuxt-link>
            </li>
            <li class="">
                <nuxt-link to="/"
                    class=" shadow-option-shadow dark:shadow-option-dark-shadow bg-white dark:bg-navy p-5 max-w-[546px] flex items-center text-heading-small text-navy dark:text-white gap-8 rounded-3xl">
                    <div class="p-2 rounded-md h-fit bg-[#EBF0FF] w-fit">
                        <nuxt-img src="images/icon-js.svg" width="40" height="40"></nuxt-img>
                    </div>
                    Javascript
                </nuxt-link>
            </li>
            <li class="">
                <nuxt-link to="/"
                    class=" shadow-option-shadow dark:shadow-option-dark-shadow bg-white dark:bg-navy p-5 max-w-[546px] flex items-center text-heading-small text-navy dark:text-white gap-8 rounded-3xl">
                    <div class="p-2 rounded-md h-fit bg-[#F6E7FF] w-fit">
                        <nuxt-img src="images/icon-accessibility.svg" width="40" height="40"></nuxt-img>
                    </div>
                    Accessibility
                </nuxt-link>
            </li>
        </ul>
    </section>
</template>