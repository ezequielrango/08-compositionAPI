<template>
    <h1>Aprendiendo Slots</h1>
    <button> Abrir Modal</button>

    <modal title="Hola Mundo">
        <!-- <h2>Titulo del modal</h2>
        <p>Lorem ipsum d oinim. Ad reipsam sunts e!</p>
        <button>Salir</button> -->
        
        <template v-slot:header>
            <h2>Titulo del modal</h2>
        </template>
        <template v-slot:body>
            <p>Lorem ipsum d oinim. Ad reipsam sunts e!</p>
        </template>
        <template v-slot:footer>
            <button>Salir</button>
        </template>
    </modal>

</template>

<script>

import Modal from '../components/Modal.vue'

export default {
    components : {Modal},
    setup(){

    }
    
}
</script>

<style scoped>

</style>