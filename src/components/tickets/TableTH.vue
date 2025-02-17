<template>
  <th v-for="head in tableHead" :key="head"
    class="px-5 py-3 border-b border-gray-700 bg-gray-800 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
    {{head}}
  </th>
</template>
<script setup>

let tableHead = [
  "ID", "Title", "Status", "Type", "Created At"
];
</script>
