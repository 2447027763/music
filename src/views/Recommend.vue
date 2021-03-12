<template>
    <div class="recommend">
        <Title>推荐歌单</Title>
        <ul class="recommendList">
            <router-link :to="'/songlist/'+v.id" tag="li" v-for="v in recommendMusicList" :key="v.id">
                <div>
                    <img :src="v.picUrl" alt="">
                    <span>{{v.playCount|formatNum}}</span>
                </div>
                <p>{{v.name |substr(26)}}</p>
            </router-link>
        </ul>
        <Loading v-if="recommendMusicList.length<=0"/>
        <Title>最新音乐</Title>
        <MusicItem :newMusicList="newMusicList"></MusicItem>
    </div>
</template>
<script>
import Title from '../components/Title'
import MusicItem from "../components/MusicItem.vue"
import Loading from "../components/Loading"
export default {
    name:"Recommend",
    components:{
        Title,
        MusicItem,
        Loading
    },
    data(){
         return {
             recommendMusicList:[],
             newMusicList:[]
         }
    },
    beforeRouteEnter(to,from,next){
        next(vm=>{
             vm.$axios("/personalized?limit=6").then(data=>{
                 vm.recommendMusicList=data.data.result;
            });
             vm.$axios("/personalized/newsong").then(data=>{
                 vm.newMusicList=data.data.result;
            });
        });
    },
    filters:{
        formatNum(value){
            return (value/10000).toFixed(1)+"万"
        },
        substr(value,len){
            return value.substr(0,len)+"..."
        }
    }
}
</script>
<style lang="less" scoped>
    .recommend{
        border-top:1px solid #eee;
    }
    ul.recommendList{
        
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-bottom: 16px;
        li{
            width: 33%;
            margin-bottom:16px ;
            div{
                position: relative;
                span{
                    text-indent: 1.2em;
                    top: 2px;
                    right: 3px;
                    position: absolute;
                    color: white;
                    text-shadow: 1px 1px 3px rgba(0, 0,0,0.5);
                    font-size: 12px;
                    // background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMiAyMCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjMDQwMDAwIiBkPSJNMjIgMTYuNzc3YzAgMS4yMzMtMS4xMjEgMi4yMzMtMi41MDYgMi4yMzMtMS4zODQgMC0yLjUwNi0xLTIuNTA2LTIuMjMzdi0yLjU1M2MwLTEuMjM0IDEuMTIyLTIuMjMzIDIuNTA2LTIuMjMzLjE3NCAwIC4zNDMuMDE3LjUwNi4wNDZ2LTEuMzdoLS4wMzNjLjAxNy0uMjIuMDMzLS40NDEuMDMzLS42NjZhOCA4IDAgMCAwLTE2IDBjMCAuMjI1LjAxNi40NDYuMDM0LjY2Nkg0djEuMzdjLjE2My0uMDI5LjMzMy0uMDQ2LjUwNS0uMDQ2IDEuMzg0IDAgMi41MDYuOTk5IDIuNTA2IDIuMjMzdjIuNTUzYzAgMS4yMzMtMS4xMjIgMi4yMzMtMi41MDYgMi4yMzNTMiAxOC4wMTEgMiAxNi43Nzd2LTIuNTUzYzAtLjI1OC4wNTktLjUwMS4xNDgtLjczQS45ODIuOTgyIDAgMCAxIDIgMTMuMDAxdi0yLjY2N2MwLS4wMjMuMDEyLS4wNDMuMDEzLS4wNjctLjAwNC0uMDg4LS4wMTMtLjE3Ni0uMDEzLS4yNjYgMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMHMxMCA0LjQ3NyAxMCAxMGMwIC4wOS0uMDA5LjE3OC0uMDE0LjI2Ni4wMDIuMDI0LjAxNC4wNDQuMDE0LjA2N3YyYS45ODguOTg4IDAgMCAxLS4zNi43NTNjLjIyNC4zMzQuMzYuNzIuMzYgMS4xMzh2Mi41NTIiIG9wYWNpdHk9Ii4xNSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZmZiIgZD0iTTIwIDE2Ljc3N2MwIDEuMjMzLTEuMTIxIDIuMjMzLTIuNTA2IDIuMjMzLTEuMzg0IDAtMi41MDYtMS0yLjUwNi0yLjIzM3YtMi41NTNjMC0xLjIzNCAxLjEyMi0yLjIzMyAyLjUwNi0yLjIzMy4xNzQgMCAuMzQzLjAxNy41MDYuMDQ2di0xLjM3aC0uMDMzYy4wMTctLjIyLjAzMy0uNDQxLjAzMy0uNjY2YTggOCAwIDAgMC0xNiAwYzAgLjIyNS4wMTYuNDQ2LjAzNC42NjZIMnYxLjM3Yy4xNjMtLjAyOS4zMzMtLjA0Ni41MDUtLjA0NiAxLjM4NCAwIDIuNTA2Ljk5OSAyLjUwNiAyLjIzM3YyLjU1M2MwIDEuMjMzLTEuMTIyIDIuMjMzLTIuNTA2IDIuMjMzUzAgMTguMDExIDAgMTYuNzc3di0yLjU1M2MwLS4yNTguMDU5LS41MDEuMTQ4LS43M0EuOTgyLjk4MiAwIDAgMSAwIDEzLjAwMXYtMi42NjdjMC0uMDIzLjAxMi0uMDQzLjAxMy0uMDY3LS4wMDQtLjA4OC0uMDEzLS4xNzYtLjAxMy0uMjY2IDAtNS41MjMgNC40NzctMTAgMTAtMTBzMTAgNC40NzcgMTAgMTBjMCAuMDktLjAwOS4xNzgtLjAxNC4yNjYuMDAyLjAyNC4wMTQuMDQ0LjAxNC4wNjd2MmEuOTg4Ljk4OCAwIDAgMS0uMzYuNzUzYy4yMjQuMzM0LjM2LjcyLjM2IDEuMTM4djIuNTUyIi8+PC9zdmc+);
                    // background-repeat: no-repeat;
                }
            }
            p{
                text-align: left;
                font-size: 12px;
                word-wrap: none;
            }
            

        }
    }
</style>