<template>
    <div class="lang">
        <button>ع</button>
    </div>
</template>

<style scoped>
.lang {
    margin: -.1rem 2rem 0 0;
    padding: 0;
}
.lang button {
    color: var(--primary-color);
    font-family: 'IBM Plex Sans Arabic', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    transition: all .35s;
    outline: none;
    border: none;
    cursor: pointer;
    padding: 0 ;
    margin: 0;
    line-height: 0;
    position: relative;
}

.lang button::after{
    content: '';
    width: 0;
    position: absolute;
    height: .9rem;
    top: 90%;
    transition: all 0.35s ease;
    right: 0;
    z-index: -1;
    background-color: var(--main-color);
}

.lang button:hover::after {
    width: 100%;
    right: auto;
    left: 0;
}


</style>