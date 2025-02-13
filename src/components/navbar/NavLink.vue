<template>
    <div class="flex space-x-4">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <RouterLink to="/tickets" class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
            aria-current="page">Tickets</RouterLink>
        <RouterLink to="dashboard"
            class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
            Dashboard</RouterLink>
        <a href="#"
            class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Reports</a>
        <a href="#"
            class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</a>
    </div>
</template>
