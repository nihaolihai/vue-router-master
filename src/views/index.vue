<template>
    <div>
        <p>这是首页{{flags}},{{userRole}}</p>
        <img :src="bookImg" style="width:100px;height:130px">
        <p>其实我觉得vue的原理基本上就相当于代理者模式+订阅发布模式来实现的, 我觉得看源码就要直奔主题，先把主枝干理清除，了解自己想要得到什么，整个过程就会清晰明了, 主要放一个自己的ts版的简单实现，写的很简陋，但是能够大概看出vue的原理，有兴趣的可以看下 ts版vue简易原理。</p>
    </div>
</template>

<style>
    p{
        display: block;
        background: #ffe87c;
    }
</style>

<script>
export default {
    data () {
        return {
            // 图片路径
            logoImg: require('@/assets/logo.png'),
            bookImg: require('@/images/20210812130238.png'),
            flags:this.$store.state.perflag,
            userRole:localStorage.getItem("userRole")
        }
    },
    created () {

    },
    mounted () {
        console.log(this.$route.params)
  }
}
</script>