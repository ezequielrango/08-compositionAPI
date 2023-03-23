<template>
    <h1>Lista de tareas de Thanos</h1>
    <h4>Tareas pendientes: {{pending.length}} </h4>
    <ul>
        <li v-for="todo in pending" :key="todo.id + Math.random()"> Pendiente: {{ todo.text }}</li>
    </ul>
</template>

<script>
import {computed} from 'vue'
import {useStore} from 'vuex'

export default {
    setup(){


        const store = useStore()
        
        return{
            //el getter es un objeto del cual quiero obtener los pending todo. Es reactivo 
            pending: computed(() => store.getters['pendingTodos'])

        }
    }
}
</script>

<style>
</style>