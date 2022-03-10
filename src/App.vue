<script setup>
import { ref, watch } from 'vue';
import TheHeader from './components/TheHeader/TheHeader.vue';




</script>

<template>
  <TheHeader/>
  <router-view/>
</template>

<style>
#app {
  margin: 0;
  padding: 0;
  height: 100vh;
  background-color: #091F29;
  background-image: url(src/assets/BG-.png);
  background-position: center center;
  background-size: 85rem;
  font-family: ibm-plex-arabic, sans-serif;
}
</style>
