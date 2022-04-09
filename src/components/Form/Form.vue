<script>
import { useField } from 'vee-validate';
import BaseInput from './BaseInput.vue';
import { ref } from '@vue/reactivity';
import emailjs from '@emailjs/browser';

export default {
    methods: {
        Submitted(val) {
            console.log("the val is: " + val);
        }
    },
    components: { BaseInput }
}
</script>

<script setup>

const  emailInfo = ref({
    name: null,
    email: null,
    subject: null,
    message: null
})


function sendEmail(e) {
    emailjs.sendForm('service_wyg5des', 'sendEmail', this.$refs.form, 'YOUR_USER_ID')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
}
</script>

<template>
    <form ref="form" class="form" @submit.prevent="sendEmail">
        <BaseInput id="name" v-model="emailInfo.name" label="Your name"/>
        <div class="subject">
            <BaseInput type="email" v-model="emailInfo.email" id="email" label="Your Email"/>
            <BaseInput id="subject" v-model="emailInfo.subject" label="Subject"/>
        </div>
        
        <textarea id="message" v-model="emailInfo.message" placeholder="Your message" rows="7">
        </textarea>
        <button type="submit">Submit</button>
    </form>
</template>

<style scoped>

.form {
    width: 100%;
    margin: 3rem 0 0;
    padding: 0;
    display: flex;
    flex-direction: column;
}

.form .field,
.form textarea {
    border: 3px solid var(--primary-color);
    background-color: var(--background);
    text-align: left;
    color: var(--primary-color);
    outline: none;
    padding: 1rem;
    font-size: 1.2rem;
    margin: 0 0 1rem;
    font-family: 'Cascadia Code', sans-serif;
}

.form .field:focus, .form textarea:focus {
    color: var(--main-color);
    border-color: var(--main-color);
    font-family: 'Cascadia Code', sans-serif;
    transition: all .35s;
}

.form .field::placeholder,
.form textarea::placeholder {
    color: var(--primary-color);
}

.subject {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
    margin: 0;
}

.form button {
    background-color: var(--main-color);
    border: 3px solid transparent;
    outline: none;
    color: var(--primary-color);
    transition: all .35s;
    padding: 1rem;
    cursor: pointer;
}

.form button:hover,
.form button:focus {
    border-color: var(--main-color);
    background: transparent;
    color: var(--main-color);
}

</style>