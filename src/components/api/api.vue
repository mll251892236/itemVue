<template>
    <div>
        <item></item>
        <list></list>
        <input type="text" v-model="msg">
        <input type="text" v-model="num">
        {{msg|he}}

        <input type="text" @keydown="gg" v-model="txt">
        <ul>

            <li>
                {{todo}}

            </li>

        </ul>

    </div>


</template>

<script>
    Vue.filter("he", function(value) {   //全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
        return parseFloat(value) + parseFloat(this.num);
    });

    import item from "./item.vue"
    import list from "./list.vue"
    import store from "../../vuex/store"
    export default{
        data(){
            return{
                msg:'',
                num:'',
                li:'',
                txt:"",
                todo:[
                    {"title": "Professional JavaScript"},
                    { "authors": ["Nicholas C. Zakas"]},
                    {edition: 3},
                    {year: 2011}
                ]
            }
        },
        components:{
            item,list
        },
        ready(){



        },
        methods:{
            gg:function () {
                this.$nextTick(function () {
                    var pp=this.txt;

                    var jsonText = JSON.stringify(this.todo, function(key, value){
                        key=pp;
                        console.log(key);
                        switch(key){
                            case "a":
                                return value.join(",")
                            case "b":
                                return 5000;
                            case "c":
                                return undefined;
                            default:
                                return value;
                        }


                    });
                    this.todo=jsonText
                    console.log(jsonText);
                })

            }


    },






        store
    }

</script>