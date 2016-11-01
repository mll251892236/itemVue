<template>
    <button @click="s(su)">点击++</button>

</template>

<script>
    import {alert} from "../../vuex/actions"

    export default{
        components:{

        },
        data:function () {
            return{
                su:8
            }
        },
        ready:function(){
        },
        methods:{
        },
        vuex:{
            actions:{
              s:alert

            }
        },



    }

</script>