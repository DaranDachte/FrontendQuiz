<template>
  <div class="flex w-full min-h-screen">
    <div class="flex justify-between w-[72.5rem] h-[28.5rem] m-auto">
      <div class="flex flex-col">
        <div class="text-[4rem] font-light text-[#313E51] leading-[4.50rem]">
          Question {{ currentStepID }} of {{ stepCount }}
        </div>
        <div class="text-[#313E51] text-[4rem] font-medium leading-[4.50rem]">
          {{ currentQuestion.question }}
        </div>
        <div class="text-[1.25rem] italic text-[#626C7F] mt-[3rem]">
          {{ title }} QUIZ
        </div>
      </div>
      <div class="flex flex-col">
        <div
          v-for="(option, index) in currentQuestion.options"
          :class="`${
            option === currentAnswer ? 'border-[#A729F5]  ' : '  border-[#fff]'
          } flex w-[35.25rem] h-[6rem]  bg-[#FFF] border-4  p-[1.25rem] rounded-3xl cursor-pointer items-center mb-[1.5rem] shadow-[#8fa0c1]/15 shadow-[0px_16px_40px_0px]`"
          @click="setCurrentAnswer(option)"
        >
          <div
            class="rounded w-[3.5rem] h-[3.5rem] flex items-center justify-center cursor-pointer"
          >
            <p class="text-[1.75rem] font-medium text-[#626C7F]">
              {{ letters[index] }}
            </p>
          </div>

          <div class="bg-[#fff] ml-[2rem] text-[#313E51] text-[1.75rem]">
            {{ option }}
          </div>
        </div>
        <div><Button @click="submit" button-text="Submit Answer" /></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { inject } from "vue";
import { useRoute, useRouter } from "vue-router";
import type { StoreT } from "../store/store";
import Button from "../Components/Button.vue";

const route = useRoute(); //для извлечения параметров quizType  и StepId
const router = useRouter(); // для навигации на следующий путь

const state = inject<StoreT>("store")!;

const letters = ["A", "B", "C", "D"];

const currentStepID = parseInt(route.params.stepId as string, 10); // TODO: add validation
const currentQuizType = route.params.quizType as string;

state.setCurrentQuiz(currentQuizType);

const title = state.getTitle();
const stepCount = state.getLength();

const currentQuestion = state.getCurrentQuestion(currentStepID - 1);

const currentAnswer = ref<string>("");

const setCurrentAnswer = (option: string) => {
  currentAnswer.value = option;
};

const submit = () => {
  state.setUserAnswer(currentAnswer.value);
  currentAnswer.value = "";
  router.push(
    currentStepID === stepCount // степ каунт это сколько всего вопросов в массиве
      ? "/finish"
      : `/${currentQuizType}/step/${currentStepID + 1}`
  );
};
</script>
