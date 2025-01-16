<template>
  <div>
    <TheHeaderNav/>
    <HomeView/> 
    <AboutView/>
  </div>
</template>

<script setup>
  import TheHeaderNav from './components/common/TheHeaderNav.vue';
  import HomeView from './views/HomeView.vue';
  import AboutView from './views/AboutView.vue';
</script>

<style lang="scss" scoped>

</style>