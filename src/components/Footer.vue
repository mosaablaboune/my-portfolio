<template>
    <footer>
        <p>© Mosaab Laboune 2022 <a href="https://github.com/mosaablaboune/my-portfolio" target="_blank" rel="noopener noreferrer">{Github Repository}</a></p>
    </footer>
</template>

<style scoped>
footer {
    width: 1320px;
    margin: 0 auto .2rem;
}


p {
    font-family: 'Cascadia Code', sans-serif;
    font-weight: 400;
    font-size: .85rem;
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
    height: 3px;
    top: 90%;
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