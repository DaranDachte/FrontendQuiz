<script setup lang="ts">
import { useRouter } from "vue-router";

import store from "./store/store.ts";
import { provide } from "vue";
provide("store", store);
const router = useRouter();
</script>

<template>
  <RouterView :key="router.currentRoute.value.fullPath"> </RouterView>
</template>
