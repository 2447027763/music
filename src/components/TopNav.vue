<template>
   <ul class="topnav">
       <li><router-link to="/">推荐音乐</router-link></li>
       <li><router-link to="/hot">热歌榜</router-link></li>
       <li><router-link to="/search">搜索</router-link></li>
   </ul>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    .topnav{
        display: flex;
        li{
            line-height: 40px;
            flex: 1 1 auto;
            font-size: 15px;
            a{
                display: inline-block;
                text-decoration: none;
                color: black;
                &.router-link-exact-active{
                    color:skyblue;
                    border-bottom:2px solid skyblue ;
                }
            }
        }
    }
</style>