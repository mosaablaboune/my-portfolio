<template>
  <section class="home">
      <main class="info">
        <h5 id="welcome">#Hi!, my name is</h5>
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
    width: 100%;
    margin: 0 auto 3rem;
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
    margin-top: 2rem;
    margin-bottom: 0;
}

.info h1 {
    margin: 0;
    font-size: 5.5rem;
    font-weight: 700;
    font-family: 'IBM Plex Sans Arabic', sans-serif;
    line-height: 0;
}

#name {
    color: var(--primary-color);
    margin-top: 4rem;
    margin-left: -5px;
}

#build {
    position: relative;
    color: var(--secondary-color);
    margin-top: 7rem;
}

.description {
    margin-top: 4rem;
    margin-bottom: 0;
    width: 75%;
    color: var(--secondary-color);
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.6;
    
}

.description span {
    font-weight: 600;
    position: relative;
    color: var(--primary-color);
}

.description span::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1rem;
    top: 60%;
    right: 0;
    z-index: -1;
    opacity: .7;
    background-color: var(--main-color);
}


.cta {
    margin: 2rem 0 0;
    display: flex;
    width: 40%;
    flex-direction: row;
    justify-content: space-between;
}

</style>