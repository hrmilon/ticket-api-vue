<script setup>
import { useTicketsStore } from '@/stores/useTicketsStore';
import Header from './Header.vue';
import Table from './Table.vue';
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
let ticketStore = useTicketsStore()

// onMounted(() => {
//   ticketStore.initialize()
// })

</script>

<template>
  <RouterView />

  <!-- {{ $route.query }} -->
  <div class="bg-gray-900 p-8">
    <div class="max-w-4xl mx-auto">
      <Header info="Ticket Info" :store="ticketStore" />
      <Table />
    </div>
  </div>
</template>
