<script>
import { useField } from 'vee-validate';
import BaseInput from './BaseInput.vue';
export default {
    methods: {
        Submitted() {
            console.log("submitted");
        }
    },
    components: { BaseInput }
}
</script>


<template>
    <form class="form" @submit.prevent="Submitted">
        <BaseInput id="name" label="Your name"/>
        <div class="subject">
            <BaseInput type="email" id="email" label="Your Email"/>
            <BaseInput id="subject" label="Subject"/>
        </div>
        
        <textarea id="message" placeholder="Your message" rows="8">
            Your message
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
    gap: 1rem;
    font-family: 'Cascadia Code', sans-serif;

}

.form .field,
.form textarea {
    border: 3px solid var(--primary-color);
    background: none;
    text-align: left;
    color: var(--primary-color);
    outline: none;
    padding: 1rem;
    font-size: 1.2rem;
    margin: 0;
}

input:focus, textarea:focus {
    color: var(--main-color);
    border: 3px solid var(--main-color);
    font-family: 'Cascadia Code', sans-serif;
    font-weight: 500;
    font-size: 1.2rem;
    padding: 1rem;
    text-align: left;
}

.form input::placeholder {
    text-align: left;
    color: var(--primary-color);
    font-family: 'Cascadia Code', sans-serif;
    font-weight: 500;
    font-size: 1.2rem;
}


.subject {
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
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
    background: none;
    color: var(--main-color);
}

</style>