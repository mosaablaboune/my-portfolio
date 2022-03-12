<template>
    <section class="services">
        <main>
            <h5># My Services</h5>
            <h1>What I can do for you?</h1>
            <div class="services-cards">
                <div class="card">
                    <h3>Web Developement</h3>
                    <p>I can build your website using the latest technologies and
                        turn it live public
                    </p>
                </div>
                <div class="card">
                    <h3>Web Design</h3>
                    <p>I know how to apply the right rules of UI / UX in your web app</p>
                </div>
                <div class="card">
                    <h3>Content writing</h3>
                    <p>I usually write content so i can provide some of my knowledge</p>
                </div>
            </div>
        </main>
        
    </section>
</template>


<style scoped>
.services {
    width: 1320px;
    margin: 0 auto;
    flex-direction: column;
    display: flex;
}


main {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
}
h5 {
    font-family: 'Cascadia Code', sans-serif;
    font-weight: 600;
    font-size: 1.6rem;
    color: #2b9ccc;
    margin-top: 2rem;
    margin-bottom: 0;
}

h1 {
    margin: 2.5rem 0 0;
    font-size: 3.5rem;
    font-weight: 700;
    font-family: 'IBM Plex Sans Arabic', sans-serif;
    line-height: 0;
    color: #d4ecf6;
}

</style>