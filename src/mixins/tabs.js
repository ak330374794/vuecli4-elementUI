export const mixinsTab = {
    data(){
        return {}
    },
    created: function (){
    },
    methods: {
        goIndex(){
            this.$router.push('/index')
        },
        goAbout(){
            this.$router.push('/About')
        }
    }
}
