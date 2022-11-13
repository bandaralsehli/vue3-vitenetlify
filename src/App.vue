<script setup>
import { RouterView } from "vue-router";
import Navbar from "@/components/Nav-bar.vue";
import Alertcomp from "@/components/Alert-comp.vue";
import router from "@/router";
</script>

<template>
  <Alertcomp />
  <Navbar />
  <div>
    <RouterView />
  </div>
</template>
