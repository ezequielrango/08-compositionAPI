import {computed,ref} from 'vue'
import {useStore} from 'vuex'


const useTodos = () => {
    
    const store = useStore()
    const currentTab = ref('all')


    return{
        currentTab,
        //el getter es un objeto del cual quiero obtener los pending todo. Es reactivo 
        pending: computed(() => store.getters['pendingTodos']),
        all : computed(() => store.getters['allTodos']),
        completed: computed(() => store.getters['completedTodos']),
        

        getTodosByTab: computed( () => store.getters['getTodosByTab'](currentTab.value)),
        toggleTodo: (id) => {
            store.commit('toggleTodo', id)
        },
        store,
        currentTab
    }
}

export default useTodos;