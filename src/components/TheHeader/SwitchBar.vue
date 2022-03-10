<script setup>

</script>


<template>
    <div class="switch">
        <div class="lang">
            <button>ع</button>
        </div>
        <div class="mode">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                </svg>
            </button>
            
        </div>
    </div>
</template>


<style scoped>
.switch {
    display: flex;
    flex-direction: row;
    margin-top: .6rem;
}

.lang button {
    color: #d4ecf6;
    font-family: 'IBM Plex Sans Arabic', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    background-color: #2b9ccc;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    line-height: 1;
    margin-right: 1.2rem;
}

button {
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
}

.mode button svg{
    stroke: #d4ecf6;
    font-size: 1.2rem;
    
}
</style>