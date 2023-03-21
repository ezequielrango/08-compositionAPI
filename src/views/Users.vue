<template>
    <div class="textContainer">
        <h2 v-if="isLoading">Espere por favor</h2>
        <h2 v-else>Usuarios</h2>
        <h5 v-if="users.length === 0">Error en la carga</h5>
        <div v-if="users.length > 0">
            <ul>
                <li v-for="{first_name, last_name, id , email} in users" :key="id">
                    <h4>{{first_name}} - {{ last_name }}</h4>
                    <h6>{{email}}</h6>
                </li>
            </ul>
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

export default {
    
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