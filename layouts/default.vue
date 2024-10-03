<script setup lang="ts">
</script>
<template>
    <div
        class="relative top-0 left-0 w-full min-h-screen h-full bg-bg-desktop dark:bg-bg-dark-desktop bg-light-bluish dark:bg-dark-navy bg-cover">
        <header class="flex justify-end pt-4 md:pt-20 w-[calc(100%_-_20px)] md:w-[calc(100%_-_140px)] mx-auto">

            <app-toggle></app-toggle>
        </header>
        <main class="w-[calc(100%_-_20px)] md:w-[calc(100%_-_140px)] mx-auto">
            <slot></slot>
        </main>

    </div>
</template>