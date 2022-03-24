<script setup>

defineProps({
    type: {
        type: String,
        default: 'fill'
    }
})

</script>

<template>
    <button :class="type">
        <slot>

        </slot>
    </button>
</template>


<style>
button {
    position: relative;
    outline: none;
    border: none;
    cursor: pointer;
    padding: 1rem;
    font-family: 'Cascadia Code', sans-serif;
    font-weight: 500;
    font-size: 1.4rem;
    transition: all .35s;
}

/* fill background */
.fill {
    border: 3px solid transparent;
    background-color: var(--main-color);
    color: var(--primary-color);
}

.fill:hover{
    background-color: transparent;
    color: var(--main-color);
    border: 3px solid var(--main-color);
}


/* border stroke */

.stroke {
    background-color: transparent;
    border: 3px solid var(--main-color);
    color: var(--main-color);
}

.stroke::after {
    content: '';
    top: 0;
    right: 0;
    width: 0;
    height: 100%;
    position: absolute;
    border: 3px solid transparent;
    transition: all .35s;
    background-color: var(--main-color);
    transform-origin: top right;
}

.stroke span {
    transition: all .35s;
}

.storke:hover span {
    transform: translateX(.2rem);
}



.stroke:hover {
    border: 3px solid transparent;
    color: var(--main-color);
}

.stroke:hover::after,
.stroke:focus::after {
    right: auto;
    left: 0;
    width: 100%;
}
</style>