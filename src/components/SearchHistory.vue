<template>
        <ul class="searchHistory">
            <li v-for="(v,k) in searchHistoryList" :key="k" ><span></span><div @click="$emit('historyResult',v)">{{v}}</div><i @click="$emit('removehistory',v)"></i></li>
        </ul>
</template>
<script>

export default {
    props:["searchHistoryList"],
    components:{
        
    }
}
</script>
<style lang="less" scoped>
    .searchHistory{
        li{
            width: 100%;
            height: 45px;
            display: flex;
            align-items: center;
            span{
                flex-grow: 0;
                display: inline-block;
                background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAzMCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljYWNhIiBkPSJNMTUgMzBDNi43MTYgMzAgMCAyMy4yODQgMCAxNVM2LjcxNiAwIDE1IDBzMTUgNi43MTYgMTUgMTUtNi43MTYgMTUtMTUgMTVtMC0yOEM3LjgyIDIgMiA3LjgyIDIgMTVzNS44MiAxMyAxMyAxMyAxMy01LjgyIDEzLTEzUzIyLjE4IDIgMTUgMm03IDE2aC04YTEgMSAwIDAgMS0xLTFWN2ExIDEgMCAxIDEgMiAwdjloN2ExIDEgMCAxIDEgMCAyIi8+PC9zdmc+") no-repeat;
                width: 15px;
                height: 15px;
                margin: 0 10px;
            }
            div{
               flex-grow: 1; 
               border-bottom:1px solid #eee ;
               height: 100%;
               line-height: 45px;
               text-align: left;
            }
            i{
                flex-grow: 0;
                display: inline-block;
                background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjOTk5ODk5IiBkPSJNMTMuMzc5IDEybDEwLjMzOCAxMC4zMzdhLjk3NS45NzUgMCAxIDEtMS4zNzggMS4zNzlMMTIuMDAxIDEzLjM3OCAxLjY2MyAyMy43MTZhLjk3NC45NzQgMCAxIDEtMS4zNzgtMS4zNzlMMTAuNjIzIDEyIC4yODUgMS42NjJBLjk3NC45NzQgMCAxIDEgMS42NjMuMjg0bDEwLjMzOCAxMC4zMzhMMjIuMzM5LjI4NGEuOTc0Ljk3NCAwIDEgMSAxLjM3OCAxLjM3OEwxMy4zNzkgMTIiLz48L3N2Zz4=") no-repeat;
                width: 12px;
                height: 12px;
                margin: 0 10px;
            }
        }
    }
</style>