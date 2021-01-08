<template>
    <div class="hot">
        <div class="hotTop" @click="add">
            <div>
                <div class="hotpic"></div>
                <span>更新日期</span>
            </div>
            
        </div>
        <div class="hotList">
                <ul class="hotTopList">
                    <li v-for="(v,k) in changeMusicList" :key="k">{{k+1|addZero}}</li>
                </ul>
                <MusicItem :newMusicList="changeMusicList"></MusicItem>
        </div>
    </div>
</template>
<script>
import MusicItem from "../components/MusicItem.vue"
export default {
    components:{
        MusicItem
    },
    data(){
        return {
            newMusicList:[],
            changeMusicList:[]
        }
    },
    methods:{
        add(){
            console.log(this.changeMusicList);
        }
    },
    filters:{
        addZero(value){
            return value<10?"0"+value:value;
        }
    },
    beforeRouteEnter(to,from,next){
        next(vm=>{
             vm.$axios("/search/hot/detail").then(data=>{
                 vm.newMusicList=data.data.data;
                 console.log(vm.newMusicList);
                for(let i=0;i<vm.newMusicList.length-1;i++){
                    let songName=vm.newMusicList[i].searchWord;
                    vm.$axios("/search/suggest?keywords="+songName).then(datas=>{
                         let singer=datas.data.result.albums[0].artist.name;
                         console.log(singer);
                         let songId=datas.data.result.albums[0].id;
                         
                         vm.changeMusicList.push({
                            name:singer,
                            songId:songId,
                            song:{artists:[{name:songName}]}
                        });
                    });
                   
                }
            });
            // vm.newMusicList=vm.changeMusicList
           
        });
    }
}
</script>
<style lang="less" scoped>
    .hot{
        height: 100%;
    }
    .hotTop{
        width: 100%;
        height: 145px;
        background: url("https://s3.music.126.net/mobile-new/img/hot_music_bg_2x.jpg?f01a252389c26bcf016816242eaa6aee=") no-repeat;
        background-size:contain ;
        div{
           display: flex;
           margin-left:20px ;
           width: 100%;
           height: 100%;
           flex-direction:column ;
           justify-content: center;
           div.hotpic{
                background: url("https://s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28c3767992ca4bb6d4887c74880=") no-repeat;
                background-size:166px 97px;
                background-position: -24px -30px;
                width: 142px;
                height: 67px;
           }
           span{
               width: 100px;
               font-size: 12px;
               color: #FFFEFE;

           }
       }
   
    }
    .hotList{
        
        .hotTopList{
            width: 40px;
            float: left;
            li{
                height: 60px;
                line-height: 60px;
            }
        }
    }
</style>