<template>
    <div class="counterContainer">
        <h1>Counter view</h1>
        <h2>{{counter}}</h2>
    
        <button @click="increase">+1</button>
        <button @click="decrease">-1</button>

    </div>

</template>

<script>
import useCounter from '@/composables/useCounter'

    export default{
        name: 'Counter',
        props: {},
        emits: [],
        setup() {

            const { counter, increase, decrease} = useCounter(25)

            return {
                counter, increase, decrease
            }
        }
    }
</script>
<style scoped>
.counterContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
}
button{
    width: 50%;
}
</style>