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
    outline: none;
    border: none;
    cursor: pointer;
    padding: 1rem;
    font-family: 'Cascadia Code', sans-serif;
    font-weight: 500;
    font-size: 1.4rem;
    transition: all ease .35s;
    position: relative;
}

button::after{
    position: absolute;
    width: 0;
    transition: all 0.35s ease-in-out;
}

.fill {
    border: 3px solid transparent;
    background-color: #2b9ccc;
    color: #d4ecf6;
    
}
.fill:hover {
    border-color: #2b9ccc;
    color: #2b9ccc;
    background-color: transparent;
}
.stroke {
    background-color: transparent;
    border: 3px solid #2b9ccc;
    color: #2b9ccc;
}
.stroke:hover {
    background-color: #2b9ccc;
    border: 3px solid #2b9ccc;
    color: #d4ecf6;
}
</style>