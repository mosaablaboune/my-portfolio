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
    align-items: center;
}

.lang {
    margin-right: 1.2rem;
}
.lang button {
    color: var(--primary-color);
    font-family: 'IBM Plex Sans Arabic', sans-serif;
    font-size: 1.6rem;
    font-weight: 600;
    background-color: var(--main-color);
    transition: all .35s;
    outline: none;
    cursor: pointer;
    width: 2.2rem;
    height: 2.2rem;
    padding: 0;
    line-height: 1;
    margin: 0;
}

.lang button:hover {
    background-color: transparent;
    color: var(--main-color);
}

</style>