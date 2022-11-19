<script setup>
import { RouterView ,useRouter } from "vue-router";
import Navbar from "@/components/Nav-bar.vue";
import Alertcomp from "@/components/Alert-comp.vue";
import router from "@/router";



</script>

<template>

    <!-- <Navbar  v-show="$route.name!=='/account/login'" /> -->
    <!-- <Navbar/> -->

  <div>

    <RouterView />

    <Alertcomp />
  </div>

</template>
