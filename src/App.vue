<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/navbar/Navbar.vue';
import { ref } from 'vue';

</script>

<template>
  <header>
    <Navbar />
  </header>

  <RouterView />
</template>
