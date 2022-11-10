<script setup>
import { RouterView } from 'vue-router';
import Navbars from '@/components/Navbar.vue';

</script>

<template>


<Navbars/>
  <div><RouterLink to="/"> home by RouterLink</RouterLink></div>
  <div><RouterLink to="/about"> about by RouterLink</RouterLink></div>
  <div>
    <RouterView/>
  </div>






</template>
