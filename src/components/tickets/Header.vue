<template>
  <div class="flex justify-between px-5">
    <div>
      <h1 class="text-xl font-bold text-gray-100 mb-6">{{ info }}</h1>
    </div>
    <div>
      <h2>Total({{ store.getTotalTicket }}) </h2>
    </div>
  </div>


</template>

<script setup>
defineProps({
  info: String,
  store: Object
})
</script>
