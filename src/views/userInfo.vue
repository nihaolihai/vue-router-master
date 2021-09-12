<template>
    <div>
        <p>我的名字是：{{defaultText}},测试store名称：{{storeValue}},路由传参：{{content}}，{{valuestr}}</p>
         <a  @click="goBacks()">返回</a>
    </div>
</template>

<style>
    p{
        display: block;
        background: #77FFFF;
    }
</style>

<script>
    export default {
        name:"userInfo",
         data() {
            return {
                defaultText: 'Hello Heaton',
                storeValue:this.$store.state.selectedVal.input?this.$store.state.selectedVal.input:'store失败',
                content:this.$route.params.content,
                valuestr:this.$route.params.valuestr,
            };
        },
         methods: {
              goBacks:function(){
                this.$router.go(-1);//返回上一页
            }
         }
    }
</script>