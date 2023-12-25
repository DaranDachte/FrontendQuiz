<script setup lang="ts">
export type ItemProps = {
  svgPath: string;
  text: string;
  altText: string;
};
defineProps<ItemProps>();
</script>

<template>
  <div
    class="flex w-[35.25rem] h-[6rem] bg-[#FFF] p-[1.25rem] rounded-3xl items-center mb-[1.5rem] shadow-[#8fa0c1]/15 shadow-[0px_16px_40px_0px]"
  >
    <div class="rounded">
      <img
        class="rounded w-[3.5rem] h-[3.5rem]"
        :src="svgPath"
        :alt="altText"
      />
    </div>

    <div class="bg-[#fff] ml-[2rem] text-[#313E51] text-[1.75rem]">
      {{ text }}
    </div>
  </div>
</template>
