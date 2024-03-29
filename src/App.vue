<script setup lang="ts">
import { RouterView } from 'vue-router';

import Footer from './components/Footer.vue';

// Refactoring!

</script>

<template class="bg-gray-200">

<nav class="mx-auto max-w-6xl border border-grey-600 bg-gray-100 shadow-lg">


<div class="flex justify-between items-center">
  <div class="flex space-x-8">
    <div>
      <RouterLin to="/">
      <a href="#">
        <span class="block  p-4 font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Doctor App</span>
      </a>
      </RouterLin>
    </div>

    <ul class="flex space-x-4 items-center">
      <ll>
        <RouterLink to="#" class="nav-item">Home</RouterLink>
      </ll>

       <ll>
        <RouterLink to="#" class="nav-item">Doctors</RouterLink>
      </ll>

       <ll>
        <RouterLink to="#" class="nav-item">Contact</RouterLink>
      </ll>
    </ul>


   
  </div>

   <div class="flex space-x-2 px-4">
      <RouterLink to="/login" class="button">Login</RouterLink>
       <RouterLink to="/signup" class="button-pink">Signup</RouterLink>
    </div>
</div>


</nav>
  
  <RouterView />


  <!-- Footer will go here -->
</template>
