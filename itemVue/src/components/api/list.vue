<template>
   <div>
       {{asd}}
       <ul>
           <li  v-for= "item in floorFlashPart" :class="['blue',{'green': $index%2==0,'red': $index%2!=0}]"> {{item.shopCode}}</li>
       </ul>
       <p v-if="bool">
           大于0.5
       </p>
       <p v-else>
           小于0.5
       </p>
    <button @click="math">大小</button>
       <!--<pre v-for= s in sites>-->
           <!--{{s.name}}-->
<!--</pre>-->
   </div>

</template>

<script>
//   import {alert} from "../../vuex/actions"
    export default{
        components:{

        },
        data () {
            return{
                bool:'',
                floorFlashPart:[]
            }


        },
        ready:function (){
            var self=this;
            self.quer=function(){
                $.ajax({
                    url: 'http://m.tputiandi.com/appServer/index/popup/list/query',
                    data:{},
                    type: 'GET',
                    dataType: 'json'

                }).done(function (data) {
                    self.floorFlashPart = data.result.result;
                });
            }
            self.quer();


        },
        methods: {
            math:function(){
                var val=Math.random();
                if(val>0.5){
                    this.bool=true
                }else{
                    this.bool=false
                }
            }

        },
        vuex:{
            getters:{
                asd(state){
                    return state.num
                }
            }
        }



    }

</script>