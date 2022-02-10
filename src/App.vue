<template>
    <div id="main">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data(){
        return {}
    },
    created: function (){
        console.log('这是首页')
    },
    methods: {},
    mounted(){
    }
}
</script>
<style lang="scss" scoped>

</style>
