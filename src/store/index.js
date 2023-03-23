import { createStore } from "vuex";

export default createStore({
    state: {
        todos: [
            {
                id: '1',
                text: 'Recolectar las gemas del infinito',
                completed: false
            },
            {
                id: '2',
                text: 'Piedra del alma',
                completed: false
            },
            {
                id: '3',
                text: 'Piedra del tiempo',
                completed: false
            },
            {
                id: '4',
                text: 'Piedra de la realidad',
                completed: false
            },
            {
                id: '5',
                text: 'Piedra del poder',
                completed: false
            },
        ]
    },
    mutations: {

    },
    actions: {

    },
    modules: {

    }
})