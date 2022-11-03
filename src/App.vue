<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from './components/sections/Header.vue'
import Home from './components/sections/Home.vue'
</script>



<template>

  <Header></Header>


  <RouterView />
</template>




<style>
.router-link-active {
  color: rgba(0, 0, 0, 0.9) !important;
  border-bottom: 2px solid rgba(0, 0, 0, 0.9) !important;
}
</style>
