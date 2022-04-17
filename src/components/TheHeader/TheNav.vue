<script setup>

</script>

<template>
    <nav>
        <ul>
            <li>
                <router-link to="/"><span>>=</span>Home</router-link>
            </li>
            <li>
                <router-link :to="{name: 'About'}"><span>>=</span>About</router-link>
            </li>
            <li>
                <router-link :to="{name: 'Services'}"><span>>=</span>Services</router-link>
            </li>
            <li>
                <router-link :to="{name: 'Works'}"><span>>=</span>Works</router-link>
            </li>
            <li>
                <router-link :to="{name: 'Contact'}"><span>>=</span>Contact</router-link>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
nav {
    margin: 0;
}
nav ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    
}
nav ul li {
    padding: 0 1.5rem;
}
nav ul li a {
    text-decoration: none;
    color: var(--primary-color);
    font-family: 'Cascadia Code', sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
    transition: color ease .35s;
    position: relative;
    padding-bottom: .1rem;
}

nav ul li a::after{
    content: '';
    width: 0;
    position: absolute;
    height: .9rem;
    top: 50%;
    transition: all 0.35s ease;
    right: 0;
    z-index: -1;
    opacity: .7;
    background-color: var(--main-color);
}

nav ul li a:hover::after {
    width: 100%;
    right: auto;
    left: 0;
}


.active:hover {
    color: var(--primary-color);
}
.active {
    color: var(--main-color);

}

</style>