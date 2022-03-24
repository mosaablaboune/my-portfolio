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

:root {
  --main-color: #2b9ccc;
  --background: #091F29;
  --primary-color: #d4ecf6;
  --secondary-color: #a1b4c4;
}

:root.white-theme {
  --background: #ffffff;
  --primary-color: #292C2C;
  --secondary-color: #596369;
}

#app {
  margin: 0;
  padding: 0;
  font-family: ibm-plex-arabic, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 16px;
  background-color: var(--background);
  background-image: url(@/assets/code_bg.png);
  background-position: center center;
  background-attachment: fixed;
  background-size: 85rem;
  height: 100%;
  animation: slide 6s linear infinite alternate;
  backdrop-filter: blur(2px);
}


#app::-webkit-scrollbar-track
{
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
}

#app::-webkit-scrollbar
{
  width: 12px;
  background-color: #F5F5F5;
}

#app::-webkit-scrollbar-thumb
{
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #555;
}

@keyframes slide {
  0% {
    background-position: center center;
  }
  100% {
    background-position: right center;
  }
}
.white-mode {
  transition: all .35s;
}


</style>
