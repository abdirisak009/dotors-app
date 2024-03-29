<script lang="ts">
</script>


<template>
      <div class="flex h-screen py-4 md:px-24  px-4">
    <div class="hidden md:block flex-1 p-5">
      <img src="/public/images/medicine.svg">
    </div>

    <div class="flex-1">
       <div class="max-w-96 bg-gray-50 shadow-lg rounded-xl p-8">
        <h1 class="text-2xl text-gray-600 text-center font-semibold">Book Now</h1>

        <form @submit.prevent="handlesubmit" class="mt-5 flex flex-col space-y-3">
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

          <div class="mt-5 text-center">
            <button type="submit" class="button bg-green-500 text-white w-48 ">Search</button>
          </div>
        </form>

       </div>
    </div>
  </div>
</template>