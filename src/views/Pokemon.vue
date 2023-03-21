<template>
    <h1 v-if="!pokemon && !errorMessage">Buscando...</h1>
  <h1 v-else-if="errorMessage">{{errorMessage}}</h1>
  <template v-else>
    <h3>{{ pokemon.name }}</h3>
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
  <router-link :to="{name: 'pokemon-search'}" > Regresar</router-link>
  </template>
</template>

<script>
import usePokemon from '../composables/usePokemon'

import { useRoute } from 'vue-router';

export default {
 setup() {
    const route = useRoute()
    console.log(route.params);
    const {pokemon,isLoading,errorMessage} = usePokemon(route.params.id)
 

    return {
        pokemon,
        isLoading,
        errorMessage
    }
}
}
</script>

<style>

</style>