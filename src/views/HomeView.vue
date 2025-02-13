<!-- eslint-disable no-unused-vars -->
<script setup>
import { useTicketsStore } from '@/stores/useTicketsStore';
import { computed, onMounted } from 'vue';

let ticketsStore = useTicketsStore();

onMounted(() => {
  ticketsStore.initialize();
});

</script>

<template>
  <main>
    <h1 class="bg-gray-700 font-bold p-5 text-center">Support Ticket System</h1>

    <div v-if="ticketsStore.tickets.length">
      <div v-for="ticket in ticketsStore.getTickets" :key="ticket.id">
        <h2>{{ ticket.title }}</h2>
      </div>
    </div>

    <div v-else>Nothing to show here</div>
  </main>
</template>
