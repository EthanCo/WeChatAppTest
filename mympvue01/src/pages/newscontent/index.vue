<template>
    
    <div>
        <h2  class="title">{{list.title}}</h2>


        <div class="content" v-html="list.content">
           
        </div>

    </div>
</template>


<script>
//注意：创建页面的时候必须 暴露 、    不然可能会卡死
    export default{

        data(){
            return{                
                list:[]
            }
        },
        methods:{ 
         
            requestData(aid){

                var that=this;

                var api='http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+aid;
                wx.request({
                    url: api, //仅为示例，并非真实的接口地址               
                    header: {
                        'content-type': 'application/json' // 默认值
                    },
                    success: function(res) {
                        console.log(res.data);

                        that.list=res.data.result[0];
                    }
                })

            }
        },
        onLoad: function(options) {
            
           var aid=options.aid;

           this.requestData(aid);
        }
    }
</script>

<style>
    
    .content {

        line-height:2;


    }

     .content  img{

         max-width:90%;

         margin:0 auto;
     }
</style>