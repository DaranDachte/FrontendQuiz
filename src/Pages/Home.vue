<script setup lang="ts">
import Items from "../Components/Items.vue";
</script>

<template>
  <div class="flex w-full min-h-screen">
    <div class="flex justify-between w-[72.5rem] h-[28.5rem] m-auto">
      <div class="flex flex-col">
        <div class="text-[4rem] font-light text-[#313E51] leading-[4.50rem]">
          Welcome to the
        </div>
        <div class="text-[#313E51] text-[4rem] font-medium leading-[4.50rem]">
          Frontend Quiz!
        </div>
        <div class="text-[1.25rem] italic text-[#626C7F] mt-[3rem]">
          Pick a subject to get started.
        </div>
      </div>
      <Items />
    </div>
  </div>
</template>
