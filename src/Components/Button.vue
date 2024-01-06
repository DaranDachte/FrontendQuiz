<script setup lang="ts">
type ButtonProps = {
  buttonText: string;
};

defineProps<ButtonProps>();
</script>

<template>
  <button
    class="w-[35.25rem] h-[5.75rem] rounded-3xl bg-[#A729F5] hover:bg-[#d290f2] text-[#FFF] text-[1.75rem] font-medium"
  >
    {{ buttonText }}
  </button>
</template>
