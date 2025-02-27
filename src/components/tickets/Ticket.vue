<script setup>
import { useTicketsStore } from '@/stores/useTicketsStore';
import Header from './Header.vue';
import Table from './Table.vue';
import { computed, onMounted, ref, watch } from 'vue';
import { RouterView, useRoute } from 'vue-router';

let ticketStore = useTicketsStore()

//catch the params from dropdown -> filter
let route = useRoute()
const query = computed(() => route.query);

function acceptUrlParam(key, value) {
  let paramsKey = `${key[0]}`
  let paramsValue = `${key[1]}`

  let mapping = {
    ticketStatus: {
      status: 'filter[status]=',
      completed: 'C',
      accepted: 'A',
      cancelled: 'X',
      hold: 'H'
    }
  }

  let statusFromUrl = mapping.ticketStatus.status
  let valueFromUrl = mapping.ticketStatus.completed
  let combinedQueryStringApi = `${statusFromUrl}${valueFromUrl}`

  // ticketStore.fetchTickets(combinedQueryStringApi)
  ticketStore.queryParams = combinedQueryStringApi;
};

//watch if any params is caught by dropdown selection
watch(query, (newValue, ov) => {
  Object.entries(newValue).forEach((key, value) => {
    //each key-value pair turns into index based array
    //{status: completed} turns ["status", "completed"]
    acceptUrlParam(key, value)
  })
})


</script>

<template>

  <!-- {{ $route.query }} -->

  <RouterView />
  <div class="bg-gray-900 p-8">
    <div class="max-w-4xl mx-auto">
      <Header info="Ticket Info" :store="ticketStore" />
      <Table />
    </div>
  </div>
</template>
