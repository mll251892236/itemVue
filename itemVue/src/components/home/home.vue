<template>
    <div class="index">
        <div class="section section1 box-show" id="StaffShortcut">
            <h3>快捷功能展示{{floorFlashPart}}
            </h3>
        </div>
    </div>
</template>
   
<script>

    export default {
        components: { //引入组件
        },
        ready: function () {   
        	this.getFloorFlashPart();
        },
        methods: {
        	getFloorFlashPart:function(){
                var self = this;
                $.ajax({  
                    url: '/erpServer/appservice/ws/status',
                    data:{},
                    type: 'GET',
                    dataType: 'json',
                    contentType:"application/json"
                }).done(function (data) {
                   self.floorFlashPart = data;
                });
            }
        },
        data () {
        	 return {
        		 floorFlashPart: false
             }
        },
    }
</script>