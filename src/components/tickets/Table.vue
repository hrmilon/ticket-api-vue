<script setup>
import { useTicketsStore } from '@/stores/useTicketsStore';
import { onMounted, ref } from 'vue';
import TableTD from './TableTD.vue';
import TableTH from './TableTH.vue';
let ticketStore = useTicketsStore()

let more = ref(null)

onMounted(() => {
  ticketStore.initialize();

  //implementing IntersectionObserver
  let callback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        ticketStore.initialize(3)
      }
    });
  };

  let observer = new IntersectionObserver(callback)
  observer.observe(more.value)


});


</script>

<template>
  <div class="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
    <table class="min-w-full leading-normal">
      <thead>
        <tr>
          <TableTH />
        </tr>
      </thead>
      <tbody>

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
    </table>

    <div ref="more" class="block p-4 bg-amber-400 items-center text-black">Load More</div>

  </div>
</template>
