<script setup lang="ts">
import { useTicketsStore } from '@/stores/useTicketsStore';
import Header from './Header.vue';
import Table from './Table.vue';


</script>

<template>

  <div class="bg-gray-900 p-8">
    <div class="max-w-4xl mx-auto">
      <Header info="Ticket Info" />
      <Table />
    </div>
  </div>
</template>
