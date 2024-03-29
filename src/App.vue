<script setup lang="ts">
import { RouterView } from 'vue-router';
import {ref} from '@vue/reactivity';

import Footer from './components/Footer.vue';

// Refactoring!
let isMenuHiden = ref(true)
const toggleMenu=()=>{
 isMenuHiden.value =!isMenuHiden.value;
}

</script>

<template class="bg-gray-200">

<div 
@click="toggleMenu"
class="w-screen h-screen fixed bg-opacity-75 md:hidden">

</div>

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

    <ul class="hidden md:flex space-x-4 items-center">
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

   <div class="hidden md:flex space-x-2 px-4">
      <RouterLink to="/login" class="button">Login</RouterLink>
       <RouterLink to="/signup" class="button-pink">Signup</RouterLink>
    </div>

    <button class="md:hidden text-gray-600 mr-4" @click="toggleMenu">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

    </button>
</div>

<div class="md:hidden bg-blue-100 w-64 transform  left-0 top-0 fixed h-screen transition flex flex-col space-y-4 items-center justify-center" :class="{'-translate-x-64': isMenuHiden }">
<h4 class="heading">Doctors App</h4>

<ul class="w-64 text-center">
  <li>
    <RouterLink to="/" class="block border-b border-t py-5  px-3 font-semibold border border-b-blue-200 tracking-widest hover:bg-blue-200 shadow-lg">Home</RouterLink>
  </li>
  <li>
    <RouterLink to="/doctors" class="block border-b py-5 px-3 font-semibold border border-b-blue-200 tracking-widest hover:bg-blue-200 shadow-lg">Doctors</RouterLink>
  </li>
  <li>
    <RouterLink to="/contact" class="block border-b py-5 px-3 font-semibold border border-b-blue-200 tracking-widest hover:bg-blue-200 shadow-lg">Contact</RouterLink>
  </li>
</ul>

   <div class="flex space-x-2 px-4 pt-10">
      <RouterLink to="/login" class="button">Login</RouterLink>
       <RouterLink to="/signup" class="button-pink">Signup</RouterLink>
    </div>
</div>
</nav>
  
  <div class="flex h-screen py-24 px-24">
    <div class="hidden md:block flex-1 p-5">
      <img src="/public/images/medicine.svg">
    </div>

    <div class="flex-1">
       <div class="max-w-96 bg-gray-50 shadow-lg rounded-xl p-8">
        <h1 class="text-2xl text-gray-600">Book Now</h1>

        <form class="mt-5 flex flex-col space-y-3">
          <div>
            <input placeholder="Location" class="py-2 px-4 w-full outline-none ring-1 rounded focus:ring">
          </div>
          <div>
            <Select class="py-2 px-4 w-full outline-none ring-1 rounded focus:ring">
              <option selected>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Select>
          </div>
          <div>
            <Select class="py-2 px-4 w-full outline-none ring-1 rounded focus:ring">
              <option selected>Select Speciality</option>
              <option value="Neerbe">Neerbe</option>
              <option value="Kalyo">Kalyo</option>
              <option value="Wadno">Wadno</option>
              <option value="Ilko">Ilko</option>
            </Select>
          </div>

          <div class="mt-5">
            <button type="submit" class="button bg-green-500">Search</button>
          </div>
        </form>

       </div>
    </div>
  </div>
  <RouterView />


  <!-- Footer will go here -->
</template>
