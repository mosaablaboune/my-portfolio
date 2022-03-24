<script setup>
import SwitchModeButton from '../Buttons/SwitchModeButton.vue';


</script>


<template>
    <div class="switch">
        <div class="lang">
            <button>ع</button>
        </div>
        <SwitchModeButton></SwitchModeButton>
    </div>
</template>


<style scoped>
.switch {
    display: flex;
    flex-direction: row;
    margin-top: .6rem;
}

.lang {
    margin-right: 1.2rem;
}
.lang button {
    color: var(--primary-color);
    font-family: 'IBM Plex Sans Arabic', sans-serif;
    font-size: 1.45rem;
    font-weight: 500;
    background-color: var(--main-color);
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    line-height: 0;
    border: 2px solid transparent;
    transition: all .35s;
    padding: 0 0 .3rem;
    outline: none;
    border: none;
    cursor: pointer;
}

.lang button:hover {
    background-color: transparent;
    color: var(--main-color);
    transform: translateX(.15rem);
}

</style>