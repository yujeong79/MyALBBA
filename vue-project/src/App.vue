<template>
  <div>
    <TheHeaderNav/>
    <RouterView/>
  </div>
</template>

<script setup>
  import TheHeaderNav from './components/common/TheHeaderNav.vue';
  import HomeView from './views/HomeView.vue';
</script>

<style lang="scss" scoped>

</style>