<script setup>
import { storeToRefs } from "pinia";

import { useAlertStore } from "@/stores";

const alertStore = useAlertStore();
const { alert } = storeToRefs(alertStore);
</script>

<template>
  <div
    v-if="alert"
    class="mb-4 rounded-lg bg-red-100 p-4 text-sm text-black dark:bg-red-200 dark:text-red-800 text-center"
    role="alert"
    :class="alert.type"
  >
    <button @click="alertStore.clear()" class="btn btn-link close">
      &times;
    </button>
     <span class="text-center mx-10 font-bold text-base">{{ alert.message }}</span>
  </div>
</template>
