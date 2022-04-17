<script setup>
import { ref, watch } from 'vue';
import TheHeader from './components/TheHeader/TheHeader.vue';
import Footer from './components/Footer.vue';
import Cursor from './components/Cursor.vue';



</script>

<template>
  <!--<Cursor/>-->
  <TheHeader/>
  <router-view/>
  <Footer/>
</template>

<style>

:root {
  --main-color: #2b9ccc;
  --background: #091F29;
  --primary-color: #d4ecf6;
  --secondary-color: #a1b4c4;
}


#app {
  margin: 0 auto;
  padding: 0;
  font-family: ibm-plex-arabic, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;  
  /*animation: slide 6s linear infinite alternate;*/
  position: relative;
  height: 100%;
  width: 1320px;
}





/*@keyframes slide {
  0% {
    background-position: center center;
  }
  100% {
    background-position: right center;
  }
}*/


</style>



