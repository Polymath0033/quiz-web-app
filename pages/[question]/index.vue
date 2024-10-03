<script setup lang="ts">
definePageMeta({
    layout: false
})
const route = useRoute()
const question = route.params.question
</script>
<template>
    <AppHeader>
        <div class="flex items-center gap-4">
            <div class="w-12 h-12">
                <nuxt-img src="/images/icon-accessibility.svg" width="40" height="40" class="w-full h-full"></nuxt-img>
            </div>

            <h1 class="font-medium text-[28px] capitalize leading-[100%] ">{{ question }}</h1>
        </div>
    </AppHeader>
    <p>Hello world {{ question }} jus</p>
</template>