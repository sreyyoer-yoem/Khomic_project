<template>
  <!-- <Suspense>
    <TheNavigation v-if="$route.path !== '/login' && $route.path !== '/register'" />
  </Suspense> -->
  <TheNavigation v-if="$route.path !== '/login' && $route.path !== '/register'"></TheNavigation>
  <router-view></router-view>
</template>

<script setup>
import TheNavigation from './components/TheNavigation.vue';
</script>

<style>
ul {
  display: flex;

}

li {
  margin: 10px;

}
</style>
