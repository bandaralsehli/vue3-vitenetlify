<script setup>
// import { useAuthStore } from "@/stores";
// import router from "@/router";
import Navbar from "@/components/Nav-bar.vue";
// redirect home if already logged in
// const authStore = useAuthStore();
// if (authStore.user) {
//   router.push("/");
// }
</script>

<template>
   <Navbar />
  <bannaves />
  <div class="container">

    <div class="row">
      <div class="col-sm-8 offset-sm-2 mt-5">
        <RouterView />
      </div>
    </div>
  </div>
</template>
