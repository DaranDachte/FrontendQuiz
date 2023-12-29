<script setup lang="ts">
import store from "./store/store.ts";
import { provide } from "vue";
provide("store", store);

const answers = {
  html: [],
  css: [],
  js: [],
  acc: [],
};
</script>

<template>
  <RouterView></RouterView>
</template>
