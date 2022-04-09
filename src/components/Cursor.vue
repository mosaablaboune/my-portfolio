<script setup>
import { onMounted } from "@vue/runtime-core";


const cursor = document.querySelectorAll(".cursor");

console.log('cursor: ',typeof cursor)

onMounted(()=> {
    window.addEventListener("mousemove", mouseMove)
})



function mouseMove(e) {
  let x = e.pageX
  let y = e.pageY

  cursor.forEach(el => {
    console.log("el", el)
  })

}




</script>


<template>
    <div class="cursor">
        <div class="inner"></div>
    </div>
</template>

<style scoped>
.cursor {
  border: 2.8px solid var(--primary-color);
  padding: 1rem;
  width: .15rem;
  height: .15rem;
  position: absolute;
  transform: translate(0%, 0%);
  pointer-events: none;
  transition: all .35s;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  border-radius: 50%;
}

.inner {
    background-color: var(--primary-color);
    width: .35rem;
    height: .35rem;
    border-radius: 50%;
}
</style>