<script setup>
import { useTicketsStore } from '@/stores/useTicketsStore';
import { onMounted } from 'vue';

let ticketStore = useTicketsStore()

onMounted(() => {
  ticketStore.initialize();
});


</script>

<template>
  <div class="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
    <table class="min-w-full leading-normal">
      <thead>
        <tr>
          <th
            class="px-5 py-3 border-b border-gray-700 bg-gray-800 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
            ID
          </th>
          <th
            class="px-5 py-3 border-b border-gray-700 bg-gray-800 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Title
          </th>
          <th
            class="px-5 py-3 border-b border-gray-700 bg-gray-800 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Status
          </th>
          <th
            class="px-5 py-3 border-b border-gray-700 bg-gray-800 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Type
          </th>
          <th
            class="px-5 py-3 border-b border-gray-700 bg-gray-800 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Created At
          </th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr>
          <td class="px-5 py-5 border-b border-gray-700 bg-gray-800 text-sm">
            <p class="text-gray-300 whitespace-no-wrap">1</p>
          </td>
          <td class="px-5 py-5 border-b border-gray-700 bg-gray-800 text-sm">
            <p class="text-gray-300 whitespace-no-wrap">eum</p>
          </td>
          <td class="px-5 py-5 border-b border-gray-700 bg-gray-800 text-sm">
            <span class="inline-block rounded-full px-3 py-1 text-xs font-semibold bg-gray-700 text-gray-300">
              X
            </span>
          </td>
          <td class="px-5 py-5 border-b border-gray-700 bg-gray-800 text-sm">
            <p class="text-gray-300 whitespace-no-wrap">Ticket</p>
          </td>
          <td class="px-5 py-5 border-b border-gray-700 bg-gray-800 text-sm">
            <p class="text-gray-300 whitespace-no-wrap">10 Dec 2025</p>
          </td>
        </tr> -->

        <!-- testing -->


        <tr v-for="ticket in ticketStore.getTickets" v-bind:key="ticket.id">
          <td class="px-5 py-5 border-b border-gray-700 bg-gray-800 text-sm">
            <p class="text-gray-300 whitespace-no-wrap">{{ ticket.id }}</p>
          </td>
          <td class="px-5 py-5 border-b border-gray-700 bg-gray-800 text-sm">
            <p class="text-gray-300 whitespace-no-wrap">{{ ticket.attributes.title }}</p>
          </td>
          <td class="px-5 py-5 border-b border-gray-700 bg-gray-800 text-sm">
            <span class="inline-block rounded-full px-3 py-1 text-xs font-semibold bg-gray-700 text-gray-300">
              {{ ticket.attributes.status }}
            </span>
          </td>
          <td class="px-5 py-5 border-b border-gray-700 bg-gray-800 text-sm">
            <p class="text-gray-300 whitespace-no-wrap">{{ ticket.type }}</p>
          </td>
          <td class="px-5 py-5 border-b border-gray-700 bg-gray-800 text-sm">
            <p class="text-gray-300 whitespace-no-wrap">{{ ticket.attributes.createdAt.substring(0, 10) }}</p>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</template>
