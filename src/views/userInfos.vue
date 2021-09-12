<template>
    <div>
        <p>我的名字是：{{text}},原值：{{num}}，过滤数值：{{num | currencydecimal}},自动加：{{changewords}}</p>
        <p>单价：<input type="text" v-model="price"></p>
        <p>测试输入：<input type="text" v-model="amount">,值为：{{amount}}</p>
        <p>计算金额：{{sum}}</p>
        <p>测试sessionStorage：{{token}}</p>
        <userInfo></userInfo>
        <router-link to="/userInfo">userInfo</router-link>
        <router-link to="/userInfo">userCenters</router-link>
        <a  @click="addfn('test')">调整页面</a>
    </div>   
</template>
<style>
    p{
        display: block;
        background: #77FFFF;
    }
</style>

<script>
    import api from '@/services/api.js'
    import axios from 'axios'
    import userInfo from './userInfo'
    export default {
        num:"swiper",
        components:{userInfo},
        data() {
            return {
                text: 'Hello kitty',
                num:10.668899,
                price:10,
                sum:10,
                loading:false,
                errored:false,
                token:sessionStorage.getItem("token"),
                arr:['1','2'],
                amount:'1',
                dataObject:{
                    input:'test',
                    numinput:'6',
                    dynamicId:'666',
                    textarea:'8',
                    checked:'true',
                    checkedes:['teemo'],
                    radio:'One',
                    selected:'AD',
                    selecteds:['AD'],
                    toggle:'1'
                },
            };
        },
        mounted() {
            this .getValueList();
        },
        filters: {
            currencydecimal (value) {
                return value.toFixed(2)
            }
        },
        computed:{
            changewords(){
                return this.num+10
            }
        },
        watch:{
            // 监听的参数的
            price(){
                console.log(this.price)
                if(this.price > 10){
                    this.sum = this.price*100
                }else{
                    this.sum = "$"+this.price*-1
                }
            },
            arr:function(news,olds){
                console.log(news);
                console.log(olds);
            }
        },
        methods: {
            addfn:function(value){
               this.$store.commit(`setEms`, this.dataObject);     
               this.$router.push({name:"userInfo",params: {content: "123",valuestr:value}});
            },
            getValueList:function(){
                 console.log('我来了')
                 this.arr.push("666")
                  sessionStorage.setItem("token","897897dfsdfef87");
                //  axios.get('api/getData.php',{       // 还可以直接把参数拼接在url后边
                //     params:{
                //         title:'眼镜'
                //     }
                // }).then(function(res){
                //     this.goodsList = res.data;
                // }).catch(function (error) {
                //     console.log(error);
                // });
                // axios.post('http://27.0.0.1:8088/infoDemo/api/getToken',{}) .then(response => {
                //     sessionStorage.setItem("token",response.data);
                // })
                // .catch(error => {
                //     console.log(error)
                //     this.errored = true
                // })
                // .finally(() => this.loading = false);
                // api.getTokenStr().then(function(res){
                //     console.log(res.data);
                // }).catch(function (error) {
                //     console.log(error);
                // });
            },
           
        }
    };
</script>