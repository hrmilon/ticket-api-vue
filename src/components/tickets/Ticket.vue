<script setup>
import { useTicketsStore } from '@/stores/useTicketsStore';
import Header from './Header.vue';
import Table from './Table.vue';
import { onMounted } from 'vue';
let ticketStore = useTicketsStore()

// onMounted(() => {
//   ticketStore.initialize()
// })

</script>

<template>
  <router-view />

<!-- {{ $route.query }} -->
  <div class="bg-gray-900 p-8">
    <div class="max-w-4xl mx-auto">
      <Header info="Ticket Info" :store="ticketStore"/>
      <Table />
    </div>
  </div>
</template>
