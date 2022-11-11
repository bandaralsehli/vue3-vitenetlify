<script setup>
import {storeToRefs} from "pinia";

import {useAlertStore} from "@/stores";

const alertStore = useAlertStore();
const { alert } = storeToRefs(alertStore);
</script>

<template>
  <div
    v-if="alert"
    class="mb-4 rounded-lg bg-red-100 p-4 text-sm text-red-700 dark:bg-red-200 dark:text-red-800"
    role="alert"
    :class="alert.type"
  >
    <button @click="alertStore.clear()" class="btn btn-link close">
      &times;
    </button>
    i am commm alart {{ alert.message }}
  </div>
</template>
