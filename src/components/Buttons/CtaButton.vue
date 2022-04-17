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
    cursor: pointer;
    padding: 1rem;
    font-family: 'Cascadia Code', sans-serif;
    font-weight: 600;
    font-size: 1.5rem;
    transition: all .35s;
    border: 3px solid transparent;
}

/* fill background */
.fill {
    background-color: transparent;
    color: var(--primary-color);
    border: 3px solid var(--main-color);
}

.fill:hover{
    color: var(--main-color);
}

.fill:hover span {
    display: inline-block;
    transition: all .35s;
    animation: scale 1s ease 0s infinite normal forwards;
}

.fill::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 3px solid transparent;
    background-color: var(--main-color);
    top: -3px;
    left: 0;
    transition: all .35s;
    z-index: -1;
}

.fill:hover::after {
    width: 0;
    left: auto;
    right: -1px;
    visibility: hidden;
}

@keyframes scale {
    0% {
        transform: sacle(0);
    }
    50% {
        transform: sacle(.9);
    }
    100% {
        transform: scale(1.8) rotate(180deg);
    }
}

/* border stroke */

.stroke {
    position: relative;
    background-color: transparent;
    border-color: var(--main-color);
    border-style: solid;
    color: var(--main-color);
    z-index: 10;
}

.stroke:hover span {
    display: inline-block;
    transition: all .35s;
    animation: speed 1s ease .5s infinite normal forwards;
}

@keyframes speed {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(.8rem);
    }
}

.stroke::after {
    content: '';
    position: absolute;
    width: 0;
    height: 100%;
    border: 3px solid transparent;
    background-color: var(--main-color);
    top: -3px;
    right: 0;
    transition: all .35s;
    visibility: hidden;
    z-index: -1;
}

.stroke:hover::after {
    width: 99%;
    left: 0;
    right: auto;
    visibility: visible;
}

.stroke:hover {
    color: var(--primary-color);
}
</style>