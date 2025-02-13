<template>
    <h1 class="text-xl font-bold text-gray-100 mb-6">{{ info }}</h1>
</template>

<script setup>
defineProps({
    info : String
})
</script>