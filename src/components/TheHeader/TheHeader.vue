<script setup>

import TheNav from "./TheNav.vue";
import SwitchBar from "./SwitchBar.vue";



</script>

<template>
    <header>
        <div id="logo">
            <a href="../../../index.html">
                <img src="@/assets/Logo_main.png" alt="">
            </a>
        </div>
        <the-nav/>
        <switch-bar/>
    </header>
</template>

<style scoped>
header {
    margin: 0 auto;
    padding: .3rem 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 1320px;
}
#logo img{
    max-width: 6.2rem;
}

</style>