
<template>
  <div class="flex space-x-4">
    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
    <div v-if="loginCheck.token" class="flex justify-center items-center">
      <RouterLink to="/tickets"
        :class="[defaultClass, { 'bg-black text-white hover:bg-red-400': currentRoute.name === 'tickets' }]"
        aria-current="page">
        Tickets</RouterLink>
      <RouterLink to="dashboard"
        :class="[defaultClass, { 'bg-black text-white hover:bg-red-400': currentRoute.name === 'dashboard' }]">
        Dashboard</RouterLink>
      <a href="#"
        :class="[defaultClass, { 'bg-black text-white hover:bg-red-400': currentRoute.name === 'reports' }]">Reports</a>
    </div>

    <div class="flex justify-center items-center">
      <a href="#"
        :class="[defaultClass, { 'bg-black text-white hover:bg-red-400': currentRoute.name === 'reports' }]">About</a>
    </div>
  </div>
</template>
<script setup>
import { useLoginStore } from '@/stores/useLoginStore';
import { useRoute } from 'vue-router';

let loginCheck = useLoginStore();
const currentRoute = useRoute()
let defaultClass = 'rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700'
// eslint-disable-next-line no-unused-vars
let activeClass = 'bg-red-500'

</script>
