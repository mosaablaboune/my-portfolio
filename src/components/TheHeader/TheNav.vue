<script setup>

</script>

<template>
    <nav>
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link :to="{name: 'About'}">About</router-link>
            </li>
            <li>
                <router-link :to="{name: 'Services'}">Services</router-link>
            </li>
            <li>
                <router-link :to="{name: 'Works'}">Works</router-link>
            </li>
            <li>
                <router-link :to="{name: 'Contact'}">Contact</router-link>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
nav ul {
    display: flex;
    flex-direction: row;
    list-style: none;
}
nav ul li {
    padding: 0 1.6rem;
}
nav ul li a {
    text-decoration: none;
    color: #d4ecf6;
    padding-bottom: .45rem;
    font-family: 'Cascadia Code', sans-serif;
    font-weight: 450;
    font-size: 1.34rem;
    transition: color, border-bottom cubic-bezier(.25, 1, .30, 1) .25s;
}
nav ul li a::before {
    background-color: #2b9ccc;
    height: 0.8rem;
    left: 1rem;
    top: 1rem;
    width: 2rem;
}
nav ul li a:hover, 
.active {
    color: #2b9ccc;
}
</style>