<script setup>
import { ref, watch } from 'vue';
import TheHeader from './components/TheHeader/TheHeader.vue';
import Footer from './components/Footer.vue';




</script>

<template>
  <TheHeader/>
  <router-view/>
  <Footer/>
</template>

<style>
#app {
  margin: 0;
  padding: 0;
  background-attachment: fixed;
  height: 100vh;
  background-color: #091F29;
  background-image: url(src/assets/code_bg.png);
  background-position: center center;
  background-size: 85rem;
  font-family: ibm-plex-arabic, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
