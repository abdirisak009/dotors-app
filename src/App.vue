<script setup lang="ts">
import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';

// Refactoring!


const handlesubmit=(event: Event)=>{
  console.log("handle submit");
}

</script>

<template class="bg-gray-200">
<Navbar/>


  

  <RouterView />


  <!-- Footer will go here -->
</template>
