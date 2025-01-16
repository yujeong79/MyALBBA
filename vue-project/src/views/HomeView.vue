<template>
  <div>
    <div>
      <RouterLink :to="{name: 'schedule'}">스케줄 공유</RouterLink>
    </div>
    <div>
      <RouterLink :to="{name: 'notebook'}">알림장</RouterLink>
    </div> 
    <div>
      <RouterLink :to="{name: 'salary'}">월급 계산</RouterLink> 
    </div>

    <RouterView/>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>