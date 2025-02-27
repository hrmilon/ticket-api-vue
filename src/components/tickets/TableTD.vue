<script setup>
defineProps({
  arrayElement: [String, Number]
})
</script>

<template>
  <td class="px-5 py-5 border-b border-gray-700 bg-gray-800 text-sm">
    <p class="text-gray-300 whitespace-no-wrap">{{ arrayElement }}</p>
  </td>
</template>

