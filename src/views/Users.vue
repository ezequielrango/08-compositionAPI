<template>
    <div class="textContainer">
        <h2 v-if="isLoading">Espere por favor</h2>
        <h2 v-else>Usuarios</h2>
        <h5 v-if="users.length === 0">Error en la carga</h5>
        <div v-if="users.length > 0">
            <UserList 
                :users="users"
                v-slot="{user}"
            >
            <h5>{{user.first_name}} - {{user.last_name}}</h5>
            <h5>{{ user.email }}</h5>
            </UserList>
        </div>
        <div class="btnContainer">
    
            <button @click="previousPage">Atrás</button>
            <button @click="nextPage">Siguiente</button>
            <span>Página: {{currentPage}}</span>
        </div>
    </div>
</template>

<script>

import useUsers from '../composables/useUsers'
import UserList from '../components/UserList.vue'
export default {
    components: {UserList},
    setup(){
        const {
            isLoading,
            currentPage,
            errorMessage,
            previousPage,
            nextPage,
            users
        } = useUsers()

        return {
            isLoading,
            currentPage,
            errorMessage,
            previousPage,
            nextPage,
            users
        }
    }
}
</script>

<style scoped>
h2{
    text-align: center;
    width: 100%;
}

div{
    display: flex;
    justify-content: center;
    text-align: center;
}
button{
    width: 10%;
}
.btnContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.textContainer{
    display: flex;
    flex-direction: column;
}
</style>