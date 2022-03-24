<template>
    <input 
        :type="type" 
        class="field"
        :placeholder="label"
    />
</template>

<script setup>

defineProps({
    label: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        default: 'text'
    }
})
</script>