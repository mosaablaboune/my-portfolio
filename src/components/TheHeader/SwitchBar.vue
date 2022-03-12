<script setup>

</script>


<template>
    <div class="switch">
        <div class="lang">
            <button>ع</button>
        </div>
        <div class="mode">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>                
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

.lang {
    margin-right: 1.2rem;
}
.lang button {
    color: #d4ecf6;
    font-family: 'IBM Plex Sans Arabic', sans-serif;
    font-size: 1.45rem;
    font-weight: 500;
    background-color: #2b9ccc;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    line-height: 0;
    border: 2px solid transparent;
    transition: all .35s;
    padding: 0 0 .3rem;
}

.lang button:hover {
    background-color: transparent;
    color: #2b9ccc;
    transform: translateX(.15rem);
}

button {
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
}

.mode button svg{
    color: #d4ecf6;
    transition: all .35s;
}
.mode button svg:hover {
    color: #2b9ccc;
    transform: translateX(.15rem);
}
</style>