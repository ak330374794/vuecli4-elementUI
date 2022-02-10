<template>
    <div>
        <div @click="goIndex">index</div>
        <div @click="goAbout">goAbout</div>
        <Home></Home>
    </div>
</template>
<script>
import { mixinsTab } from '@mixins/tabs.js'
import Home from './Home.vue'

export default {
    mixins: [mixinsTab],
    components: {
        Home
    },
    data(){
        return {}
    },
    created: function (){
        console.log('这是index')
    },
    methods: {},
    mounted(){

    }
}
</script>
