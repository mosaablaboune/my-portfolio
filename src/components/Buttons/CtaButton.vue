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

button::after {
    content: '';
    top: 0;
    right: 0;
    width: 0;
    height: 100%;
    position: absolute;
    transition: all .35s;
    z-index: -1;
}
button:hover::after{
    right: auto;
    left: 0;
    width: 100%;
}

/* fill background */
.fill {
    border: 3px solid transparent;
    background-color: #2b9ccc;
    color: #d4ecf6;
}

.fill::after{
    border: 3px solid #2b9ccc;
}

.fill:hover{
    background-color: transparent;
    color: #2b9ccc;
}


/* border stroke */

.stroke {
    background-color: transparent;
    border: 3px solid #2b9ccc;
    color: #2b9ccc;
}

.stroke::after {
    background-color: #2b9ccc;
}

.stroke:hover {
    color: #d4ecf6;
}


</style>