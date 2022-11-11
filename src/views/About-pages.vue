<template>
  <h1 class="my-20 mx-20 text-center text-3xl">
    معلومات عن الشركة والتواصل معها
  </h1>

  <!-- <div id="app">
    <h1>Using Font Awesome "Brand" icons in Vue.js</h1>
    <p>Have a phone call: <font-awesome-icon icon="phones" /></p>
    <p>Have a module of JavaScript: <font-awesome-icon icon="js" /></p>
    <p>Have a module of Vue.js: <font-awesome-icon icon="[ 'fab', 'vuejs' ]" size="4x" /></p>
  </div> -->

  <!-- <font-awesome-icon icon="wrench"  size="4x" />
<font-awesome-icon icon="ambulance"  size="4x" />
<font-awesome-icon icon="coffee"  size="4x" />
<font-awesome-icon icon="spinner" size="4x" /> -->
  <font-awesome-icon :icon="['fab', 'instagram']" size="4x" />
  <font-awesome-icon :icon="['fab', 'twitter']" size="4x" />
  <font-awesome-icon :icon="['fab', 'vuejs']" rotation="270" size="4x" />

  <!-- <div class='mt-20'>
  <h1>Rotation</h1>
<font-awesome-icon icon="spinner" rotation="270" size="4x"  />
<font-awesome-icon :icon="[ 'fab', 'vuejs' ]" rotation="270" size="4x"  />
<font-awesome-icon  icon='fab' size="4x"/>
</div> -->
</template>
