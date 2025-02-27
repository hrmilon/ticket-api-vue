<!-- eslint-disable no-unused-vars -->
<script setup>

import { useTestStore } from '@/stores/useTestStore';
import { useTicketsStore } from '@/stores/useTicketsStore';
import { compile, computed, onMounted, watch } from 'vue';

let ticketsStore = useTicketsStore();
let qparam = computed(() => ticketsStore.queryParams)
// console.log(qparam.value);


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
