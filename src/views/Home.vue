<template>
  <section class="home">
      <h5>Hi!, I'm</h5>
      <h1 id="name">Mosaab Laboune</h1>
      <h1 id="build">I build modern websites</h1>
      <p>
          Frontned web developer, who care about the look & functionality of web apps.
          also i share my Knowledge in social media to help people learn web dev in arabic.
      </p>
      <div class="cta">
          <ButtonFill/>
          
      </div>
  </section>
</template>

<script setup>
import ButtonFill from '@/components/Buttons/ButtonFill.vue';
import ButtonStroke from '../components/Buttons/ButtonStroke.vue';

</script>

<style>
.home {
    width: 1320px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}

h5 {
    font-family: 'Cascadia Code', sans-serif;
    font-weight: 600;
    font-size: 2rem;
    color: #d4ecf6;
    margin: 2.5rem 0;
}

h1 {
    font-size: 5.5rem;
    margin: 0;
    font-weight: 700;
    font-family: 'IBM Plex Sans Arabic', sans-serif;
    line-height: 0;
}

#name {
    color: #2b9ccc;
    margin-top: 1.2rem;
    
}

#build {
    color: #a1b4c4;
    margin-top: 6.7rem;
}

p {
    margin-top: 3.5rem;
    width: 68%;
    color: #a1b4c4;
    font-size: 1.9rem;
    font-weight: 500;
    line-height: 1.4;
}
.cta {
    display: flex;

}
</style>