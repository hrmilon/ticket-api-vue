<template>
  <div>
    <RouterLink to="/tickets"
      :class="[defaultClass, { 'bg-black text-white hover:bg-red-400': currentRoute.name === 'tickets' }]"
      aria-current="page">
      {{ $slots }}</RouterLink>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router';

defineProps({
   token : String
});

let defaultClass = 'rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700'
// eslint-disable-next-line no-unused-vars
let activeClass = 'bg-red-500'
const currentRoute = useRoute()
</script>
