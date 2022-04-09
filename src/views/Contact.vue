<script setup>
import SocialButton from '@/components/Buttons/SocialButton.vue';
import Form from '@/components/Form/Form.vue';


</script>
<template>
    <section class="contact">
        <main>
            <h5># Contact me</h5>
            <h1>Get In Touch</h1>
        </main>

    </section>
    <section class="get-in-touch">
        <main class="contact-form">
            <Form/>
        </main>
        <main class="cntact-info">
            <p class="cta">It's nice to work on your project and turn it on live. <span>let's work togethere <span class="plus">-></span></span></p>
            <div class="info">
                <div class="detail">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    <p><a href="https://goo.gl/maps/6QrYT4wueR8aVhKN8" target="_blank">El Eulma, Setif, Algeria</a></p>
                </div>
                <div class="detail">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-at-sign"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
                    <p><a href="mailto:mosaab.laboune@gmail.com" target="_blank">mosaab.laboune@gmail.com</a></p>
                </div>
                <div class="detail">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    <p><a href="tel:+213660438114">+213-660-43-81-14</a></p>
                </div>
            </div>
            <p>Or, you can find me here:</p>
            <SocialButton direction="row" class="primary"/>
        </main>
    </section>
</template>

<style scoped>
.contact {
    width: 1320px;
    margin: 0 auto .1rem;
    flex-direction: column;
    display: flex;
}

.contact h5 {
    font-family: 'Cascadia Code', sans-serif;
    font-weight: 600;
    font-size: 1.6rem;
    color: #2b9ccc;
    margin-top: 2rem;
    margin-bottom: 0;
}

.contact h1 {
    margin: 2.5rem 0 0;
    font-size: 3.5rem;
    font-weight: 700;
    font-family: 'IBM Plex Sans Arabic', sans-serif;
    line-height: 0;
    color: #d4ecf6;
}

/* Contact Form */
.contact-form {
    margin: 0;
    padding: 0;
}

.get-in-touch {
    display: flex;
    flex-direction: row;
    width: 1320px;
    margin: 0 auto 2rem;
    align-items: center;
}

/* Contact Info */
.cntact-info {
    display: flex;
    flex-direction: column;
    margin: 0 0 0 10rem;
    padding: 0;
}
.cntact-info p{
    color: var(--secondary-color);
    font-size: 1.95rem;
    font-weight: 500;
    margin: 0 0 1rem;
}

.cta span{
    color: var(--primary-color);
    position: relative;
    font-weight: 600;
}

.plus {
    font-family: 'Cascadia Code', sans-serif;
    display: inline-block;
    font-weight: 700;
    animation: speed 1s ease .5s infinite normal forwards;
}

@keyframes speed {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(.8rem) rotate(180deg);
    }
}
.plus::after {
    display: none;
}


.info {
    margin: 2.2rem 0;
    display: flex;
    flex-direction: column;
}

.info .detail {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1.2rem;
}

.detail svg {
    color: var(--primary-color);
    width: 2.5rem;
    height: 2.5rem;
}

.detail p {
    margin: 0 0 0 1.2rem;
    font-size: 1.75rem;
}

.detail p a {
    color: var(--secondary-color);
    text-decoration: none;
    transition: color .35s;
    cursor: pointer;
    position: relative;
}
.detail p a::after {
    content: '';
    width: 0;
    position: absolute;
    height: 5px;
    top: 90%;
    transition: all 0.35s ease;
    right: 0;
    background-color: var(--main-color);
}
.detail p a:hover::after {
    width: 100%;
    right: auto;
    left: 0;
}

.detail p a:hover,
.detail p a:focus {
    color: var(--primary-color);
}
.primary a svg {
    color: var(--primary-color);
}
</style>