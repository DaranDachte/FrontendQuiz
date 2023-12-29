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
        <div><Button @click="emitAnswer" /></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { inject } from "vue";
import { useRoute } from "vue-router";
import Button from "../Components/Button.vue";

const route = useRoute();
const state = inject("store");

const letters = ["A", "B", "C", "D"];

const currentStepID = parseInt(route.params.stepId as string, 10); // TODO: add validation
const currentQuizType = route.params.quizType as string;

const title = state[currentQuizType].title;
const stepCount = state[currentQuizType].questions.length;

const currentQuestion = state[currentQuizType].questions[currentStepID - 1];

const currentAnswer = ref<string>("");

const setCurrentAnswer = (option: string) => {
  currentAnswer.value = option;
};

const emit = defineEmits<{
  (e: "setAnswer", currentQuizType: string, answer: string): void;
}>();

const emitAnswer = () => {
  emit("setAnswer", currentQuizType, currentAnswer.value);
};
</script>
