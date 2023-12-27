<script setup lang="ts">
import store from "./store/store.ts";
import { provide } from "vue";
provide("store", store);
</script>

<template>
  <RouterView></RouterView>
</template>
