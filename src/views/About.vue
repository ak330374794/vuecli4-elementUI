<template>
    <div class="about">
        <div @click="goIndex">index</div>
        <div @click="goAbout">goAbout</div>
        <h1>This is an about page</h1>
        <div class="aaa">
      <span>
              鞍山的鞍山的as打算的asd123123
      </span>
        </div>
    </div>
</template>
<script>

import { mixinsTab } from '@mixins/tabs.js'

export default {

    mixins: [mixinsTab],
    data(){
        return {}
    },
    created: function (){
        console.log('这是about ')
    },
    methods: {},
    mounted(){

    }
}
</script>
<style lang="scss" scoped>
.aaa {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    span {
        color: #000;
    }
}
</style>
