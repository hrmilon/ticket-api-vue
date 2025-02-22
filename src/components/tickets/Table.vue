<script setup>
import { useTicketsStore } from '@/stores/useTicketsStore';
import { onMounted, ref, watch } from 'vue';
import TableTD from './TableTD.vue';
import TableTH from './TableTH.vue';
import Filter from './Filter.vue';
let ticketStore = useTicketsStore()

let more = ref(null)
let pageCount = 2 //start from second page
let showFilter = ref(false)

onMounted(() => {
  ticketStore.initialize();

  //implementing IntersectionObserver
  let callback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        ticketStore.fetchTickets(pageCount)
        pageCount++
      }
    });
  };

  let observer = new IntersectionObserver(callback)
  observer.observe(more.value)

});


</script>

<template>
  <div>
    <button @click="showFilter = !showFilter" class="bg-green-600 px-3 rounded">Filter</button>
    <Filter :show-filter="showFilter" />
  </div>
  <div class="bg-gray-800 shadow-lg rounded-lg overflow-hidden">

    <table class="min-w-full leading-normal">
      <thead>
        <tr>
          <TableTH />
        </tr>
      </thead>
      <tbody class="" v-if="ticketStore.getTotalTicket">
        <tr v-for="ticket in ticketStore.getTickets" v-bind:key="ticket.id">
          <TableTD v-for="(value, index) in [
            ticket.id.toString(),
            ticket.attributes.title,
            ticket.attributes.status,
            ticket.type,
            ticket.attributes.createdAt.substring(0, 10)
          ]" :key="index" :array-element="value" />
        </tr>
      </tbody>
      <tbody class="flex items-center justify-center p-10" v-else>
        <tr>There is no issued Ticket</tr>
      </tbody>
    </table>

    <div ref="more" class="block p-4 bg-gray-800 items-center text-whit font-bold">
      {{ ticketStore.getTotalTicket ? 'Load More' : '' }}
    </div>

  </div>
</template>
