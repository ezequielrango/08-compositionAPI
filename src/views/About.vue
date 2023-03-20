<template>

    <div class="about">
        <h1>{{title}}</h1>
        <button @click="changeTitle">Cambiar titulo</button>
    </div>
</template>
<script>
import { 
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onErrorCaptured,
    onUnmounted,
    onRenderTracked,
    onRenderTriggered,
    onActivated,
    onDeactivated,
    ref

} from 'vue';

export default {

    //no hay que meclar los ciclos de vida de composition API con los de optionsAPI
    setup() {

        const title = ref('About')
        
        onBeforeMount(() => {
            console.log('onBeforeMount');
        })
        onMounted(() => {
            console.log('onMounted');
        })
        onBeforeUpdate(() => {
            console.log('obBeforeUpdate');
        })
        onUpdated(() => {
            console.log('OnUpdated');
        })
        onBeforeUnmount(() => {
          console.log('onBeforeUnmount');  
        })
        onUnmounted(() => {
            console.log('OnUnmounted');
        })
        onErrorCaptured(() => {
            console.log('onErrorCaptured');
        })
        onRenderTracked(() => {
            console.log('onRenderTracked');
        })
        onRenderTriggered(() => {
            console.log('OnRenderTriggered');
        })
        onActivated(() => {
            console.log('onActivated');
        })
        onDeactivated(() => {
            console.log('onDeactivated');
        })
        return {
            title,
            changeTitle : () => {
                title.value = 'Titulo cambiado'
            }
        }
    },
}
</script>