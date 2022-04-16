<template>
  <section class="home">
      <main class="info">
        <h5 id="welcome"># Hi!, I'm</h5>
        <h1 id="name">Mosaab Laboune</h1>
        <h1 id="build">I build modern websites.</h1>
        <p class="description">
            <span>Frontned web developer</span>, who care about the look & functionality of web apps.
            also i share my Knowledge in social media to help people learn web dev in arabic.
        </p>
        <div class="cta">
            <router-link :to="{ name: 'Contact'}">
                <CtaButton>
                    Hire me <span>+</span>
                </CtaButton>
            </router-link>
            <router-link :to="{ name: 'About'}">
                <CtaButton type="stroke">
                    More about me <span>-></span>
                </CtaButton>
            </router-link>
        </div>
      </main>
        <SocialButton :direction="column"></SocialButton>
  </section>
</template>

<script setup>

import CtaButton from '@/components/Buttons/CtaButton.vue';
import SocialButton from '@/components/Buttons/SocialButton.vue';

</script>

<style scoped>
.home {
    width: 1320px;
    margin: 0 auto;
    flex-direction: row;
    display: flex;
    align-items: center;
}
.info {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
}
#welcome {
    font-family: 'Cascadia Code', sans-serif;
    font-weight: 600;
    font-size: 1.8rem;
    color: var(--main-color);
    margin-top: 4rem;
    margin-bottom: 0;
}

.info h1 {
    margin: 0;
    font-size: 5.4rem;
    font-weight: 700;
    font-family: 'IBM Plex Sans Arabic', sans-serif;
    line-height: 0;
}

#name {
    color: var(--primary-color);
    margin-top: 3.5rem;
    margin-left: -6px;
}

#build {
    position: relative;
    color: var(--secondary-color);
    margin-top: 6rem;
}

.description {
    margin-top: 3.8rem;
    margin-bottom: 0;
    width: 72%;
    color: var(--secondary-color);
    font-size: 1.95rem;
    font-weight: 500;
    line-height: 1.4;
    
}

.description span {
    font-weight: 600;
    position: relative;
    color: var(--main-color);
}


.cta {
    margin-top: 2.5rem;
    margin-bottom: 3rem;
    display: flex;
    width: 35%;
    flex-direction: row;
    justify-content: space-between;
}

</style>