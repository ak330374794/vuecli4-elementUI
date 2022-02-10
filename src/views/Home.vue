<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue'

export default {
    name: 'Home',
    components: {
        HelloWorld
    },
    data(){
        return {}
    },
    created: function (){
        console.log('HOME')
    },
    methods: {},
    mounted(){

    }
}
</script>
<style lang="scss" scoped>
$blue: #1235e7;
.home {
    background: $blue;
}
</style>
