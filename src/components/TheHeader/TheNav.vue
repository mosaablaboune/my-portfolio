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
    transition: color ease .35s;
    position: relative;
}

nav ul li a::after{
    content: '';
    width: 0;
    position: absolute;
    height: 9px;
    top: 90%;
    transition: all 0.35s ease;
    left: 0;
    background-color: #2b9ccc;
}

nav ul li a:hover::after, 
.active::after{
    width: 100%;
    
}

nav ul li a:hover,
.active {
    color: #2b9ccc;
}


</style>