<script setup>
import router from '@/router';
import { ref, watch } from 'vue';
import NavLink from '../navbar/NavLink.vue';
defineProps({
  showFilter: Boolean
})

//catch the value from dropdown
let statusFilter = ref('')

watch(statusFilter, (newValue, oldValue) => {
  router.push(('?' + newValue))
})

</script>

<template>
  <!-- {{ statusFilter }} -->
  <div v-if="showFilter" class="">
    <div class="bg-gray-800 p-4">
      <div class="bg-gray-700 rounded-lg shadow p-4 mb-4 flex items-center space-x-4">
        <div class="flex-grow">
          <div class="flex space-x-4">
            <div>
              <label for="statusFilter" class="block text-sm font-medium text-gray-300">Status:</label>
              <select v-model="statusFilter" id="statusFilter" name="statusFilter"
                class="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 sm:text-sm">
                <option>All</option>
                <option>Pending</option>
                <option>InProgress</option>
                <option value="status=completed">Completed</option>
              </select>
            </div>

            <div>
              <label for="sortBy" class="block text-sm font-medium text-gray-300">Sort By:</label>
              <select id="sortBy" name="sortBy"
                class="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 sm:text-sm">
                <option value="dateAsc">Date (Ascending)</option>
                <option value="dateDesc">Date (Descending)</option>
                <option value="titleAsc">Title (Ascending)</option>
                <option value="titleDesc">Title (Descending)</option>
              </select>
            </div>
          </div>
        </div>
        <button
          class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Apply
        </button>
      </div>

      <div id="contentArea">
      </div>
    </div>
  </div>
</template>
