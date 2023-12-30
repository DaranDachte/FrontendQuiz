<template>
  <div class="flex w-full min-h-screen">
    <div class="flex justify-between w-[72.5rem] h-[28.5rem] m-auto">
      <div class="flex flex-col">
        <div class="text-[4rem] font-light text-[#313E51] leading-[4.50rem]">
          Quiz completed
        </div>
        <div class="text-[#313E51] text-[4rem] font-medium leading-[4.50rem]">
          You scored...
        </div>
      </div>
      <div class="flex flex-col">
        <div class="text-[1.25rem] italic text-[#626C7F] mt-[3rem]">
          {{ state.currentQuiz }} QUIZ
        </div>
        <div
          class="flex w-[35.25rem] h-[6rem] bg-[#FFF] border-4 p-[1.25rem] rounded-3xl cursor-pointer items-center mb-[1.5rem] shadow-[#8fa0c1]/15 shadow-[0px_16px_40px_0px]`"
        >
          <div
            class="rounded w-[3.5rem] h-[3.5rem] flex items-center justify-center cursor-pointer"
          ></div>

          <div class="bg-[#fff] ml-[2rem] text-[#313E51] text-[1.75rem]">
            {{ state.score }}
          </div>
        </div>
        <div><Button @click="playAgain" /></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { useRouter } from "vue-router";
const state = inject("store");
state.getScore();
const router = useRouter();
const playAgain = () => {
  state.reset();
  router.push("/");
};
</script>

<style scoped></style>
