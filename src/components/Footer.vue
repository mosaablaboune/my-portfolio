<template>
    <footer>
        <p>© Mosaab Laboune 2022 <a href="https://github.com/mosaablaboune/my-portfolio" target="_blank" rel="noopener noreferrer">{Github Repository}</a></p>
    </footer>
</template>

<style scoped>
footer {
    width: 100%;
    margin: 1rem auto 0;
}


p {
    font-family: 'Cascadia Code', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    color: var(--secondary-color);
    text-align: left;
    width: 100%;
}
a {
    color: var(--main-color);
    text-decoration: none;
    font-weight: 700;
    position: relative;
    transition: color .35s;
}
a::after{
    content: '';
    width: 0;
    position: absolute;
    height: .8rem;
    top: 50%;
    z-index: -1;
    opacity: .7;
    transition: all 0.35s ease;
    right: 0;
    background-color: var(--main-color);
}
a:hover {
    color: var(--primary-color);
}

a:hover::after {
    width: 100%;
    right: auto;
    left: 0;
}
</style>