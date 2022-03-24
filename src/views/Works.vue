<script setup>
import { ref } from "@vue/reactivity";


const works = ref(true)
</script>
<template>
    <section class="works" v-if="!works">
        <main>
            <h5># My Works</h5>
            <h1>This is what I built</h1>
            <div class="projects">
                
            </div>
        </main>
    </section>
    <section class="no-works" v-else>
        <p>/* No Projects for now! */</p>
    </section>
</template>

<style scoped>
.works {
    width: 1320px;
    margin: 0 auto;
    flex-direction: column;
    display: flex;
    margin-bottom: 2rem;
}


main {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
}
h5 {
    font-family: 'Cascadia Code', sans-serif;
    font-weight: 600;
    font-size: 1.6rem;
    color: var(--main-color);
    margin-top: 2rem;
    margin-bottom: 0;
}

h1 {
    margin: 2.5rem 0 0;
    font-size: 3.5rem;
    font-weight: 700;
    font-family: 'IBM Plex Sans Arabic', sans-serif;
    line-height: 0;
    color: var(--primary-color);
}
.projects {
    margin-top: 2rem;
    height: 26.9rem;
}

.no-works {
    margin: 0;
    padding: 10rem;
    height: 15.3rem;
}
.no-works p {
    text-align: center;
    color: var(--secondary-color);
    font-size: 2.5rem;
    font-weight: 700;
}



</style>