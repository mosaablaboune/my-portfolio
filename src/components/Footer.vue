<template>
    <footer>
        <p>© Mosaab Laboune 2022 <a href="https://github.com/mosaablaboune/my-portfolio" target="_blank" rel="noopener noreferrer">{Github Repository}</a></p>
    </footer>
</template>

<style scoped>
footer {
    width: 1320px;
    margin: 0 auto .8rem;
    padding: 0;
}

p {
    font-family: 'Cascadia Code', sans-serif;
    font-weight: 400;
    font-size: .85rem;
    color: #a1b4c4;
    text-align: left;
}
a {
    color: #2b9ccc;
    text-decoration: none;
    font-weight: 700;
    position: relative;
}
a::before {
    position: absolute;
    content: '';
    top: 0;
    opacity: 0;
    color: #d4ecf6;
    transition: all .35 ease;
}
a:hover::after {
    opacity: 1;
}
</style>