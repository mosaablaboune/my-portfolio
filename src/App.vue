<script setup>
import { ref, watch } from 'vue';
import TheHeader from './components/TheHeader/TheHeader.vue';
import Footer from './components/Footer.vue';
import Cursor from './components/Cursor.vue';
import SocialButton from './components/Buttons/SocialButton.vue';


const lanche = ref(true)


</script>

<template>
  <!--<Cursor/>-->
  <div class="applictation" v-if="!lanche">
    <TheHeader/>
    <router-view/>
    <Footer/>
  </div>
  <div class="mantain" v-else>
    <h1>Something cool is coming! <span>:)</span></h1>
    <p class="tuned">#Stay_tuned</p>
    <p class="socials">You can find me here:</p>
    <SocialButton direction="row" class="primary"/>
  </div>
</template>

<style>

:root {
  --main-color: #2b9ccc;
  --background: #091F29;
  --primary-color: #d4ecf6;
  --secondary-color: #a1b4c4;
}


#app {
  padding: 0;
  font-family: ibm-plex-arabic, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;  
  align-items: center;
  /*animation: slide 6s linear infinite alternate;*/
  position: relative;
  height: 100%;
  margin: 0 .5rem;
}

.mantain {
  width: 100%;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.mantain span {
  color: var(--main-color);
}

.mantain h1 {
  font-family: ibm-plex-arabic, sans-serif;
  font-size: 5rem;
  color: #ffffff;
  position: relative;
  margin: 0;
}
.mantain h1::after {
    content: '';
    width: 93%;
    position: absolute;
    height: 2.8rem;
    top: 57%;
    left: 0;
    z-index: -1;
    opacity: .7;
    background-color: var(--main-color);
}
.mantain .tuned {
  color: var(--secondary-color);
  font-size: 3rem;
  font-family: 'Cascadia Code', sans-serif;
  font-weight: 600;
  margin-top: 2rem;
}

.socials {
  color: #ffffff;
  font-size: 3rem;
  font-weight: 600;
  margin: 0 0 5px;
}


/*@keyframes slide {
  0% {
    background-position: center center;
  }
  100% {
    background-position: right center;
  }
}*/


@media only screen and (max-width: 600px) {  
  .mantain {
    margin-top: 3rem;
  }
  .mantain h1 {
    font-size: 4rem;
    line-height: 1.2;
  }
  .mantain h1::after {
    width: 0;
  }
  .socials {
    margin: 0 0 10px;
  } 
}

</style>



