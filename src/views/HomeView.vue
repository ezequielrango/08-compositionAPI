<script >
import { ref, reactive } from 'vue';


export default {
  name: 'HomeView',
  setup(){

    // es .value
     const ironman = ref({name: 'Tony', age: 50})

     // reactive solo funciona con objetos. No es .value
     const hulk = reactive({ name: 'Hulk', age: 40})

    const ironmanIsAlive = reactive(false)
    const hulkIsAlive = ref(true)


    const changeStatus = () => {
      hulkIsAlive.value = !hulkIsAlive.value
    }

     return {
      ironman,
      hulk,
      ironmanIsAlive,
      hulkIsAlive,
      changeStatus,


      changeIronman : () => {
        ironman.value.name = 'Tony Stark'
        ironman.value.age = 49
      },
      changeHulk : () => {
        hulk.age = 30
      }
     }
  }
}

</script>

<template>
  <main>
    <div class="home">
      <h1> Reactive vs ref</h1>

      <h2>{{ironman}}</h2>
      <h2>{{hulk}}</h2>
      <button @click="changeIronman">Cambiar Ironman</button>
      <button @click="changeHulk">Cambiar Hulk</button>
      <h2>Ironman: {{ironmanIsAlive}}</h2>
      <h2>Hulk: {{hulkIsAlive}}</h2>
      <button @click="changeStatus">Cambiar estado</button>
    </div>
  </main>
</template>
