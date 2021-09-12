<template>
    <div>
        <p>这是个人中心</p>
        <router-link to="/userInfo">用户信息</router-link>
        <router-link to="/userInfos">测试用户信息</router-link>
        <router-view></router-view>
    </div>
</template>

<style>
    p{
        display: block;
        background: #d6e9c6;
    }
</style>

<script>
    export default {}
</script>
