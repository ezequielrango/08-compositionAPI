<template>
    <h1>Lista de tareas de Thanos</h1>
    <h4>Tareas pendientes: {{pending.length}} </h4>
    <div>
        <button 
            :class="{'active' : currentTab === 'all'}"
            @click="currentTab = 'all'"
            >Todos
        </button>
        <button 
            :class="{'active' : currentTab === 'pending'}"
            @click="currentTab = 'pending'"
            >Pendientes
        </button>
        <button 
            :class="{'active' : currentTab === 'completed'}"
            @click="currentTab = 'completed'"
            >Completados
        </button>
    </div>

    <div>
        <ul>
            <li v-for="todo in getTodosByTab" :key="todo.id"
                :class="{'completed' : todo.completed }"
                @dblclick="toggleTodo(todo.id)"
            >
                {{todo.text }}
            </li>
        </ul>
    </div>
</template>

<script>
import {computed,ref} from 'vue'
import {useStore} from 'vuex'

export default {
    setup(){


        const store = useStore()
        const currentTab = ref('all')

        const toggleTodo = ( id ) => {
            store.commit('toggleTodo', id)
        }

        return{
            currentTab,
            //el getter es un objeto del cual quiero obtener los pending todo. Es reactivo 
            pending: computed(() => store.getters['pendingTodos']),
            all : computed(() => store.getters['allTodos']),
            completed: computed(() => store.getters['completedTodos']),
            

            getTodosByTab: computed( () => store.getters['getTodosByTab'](currentTab.value)),
            toggleTodo: (id) => {
                store.commit('toggleTodo', id)
            }
        }
    }
}
</script>

<style scoped>
.active{
    background-color: #2c3e50;
    color: white;
}
.completed{
    text-decoration: line-through;
}
</style>