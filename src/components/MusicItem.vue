<template>

    <ul class="newMusicList">
        <li v-for="v in newMusicList" :key="v.id" @click.stop="playBigMusic(v.id||v.songId)">
            <div class="numSort" v-if="v.num">{{v.num}}</div>
            <div class="left">
                <div>{{v.name}}</div>
                <p><i v-show="v.song.privilege.maxbr>320000"></i>{{v.song.artists[0].name}} - {{v.name}}</p>
            </div>
            <div class="right" @click.stop.self="playMusic(v.id||v.songId)">
                {{v.id}}
            </div>
        </li>
        <Loading v-show="newMusicList.length==0"/>
    </ul>
    
</template>
<script>
import Loading from "../components/Loading"
export default {
    components:{
        Loading
    },
    name:"MusicItem",
    props:{
        newMusicList:{
            type:Array,
            default:()=>{
                return [
                    {
                       
                    }
                ]
            }
        }
    },
   methods:{
    // 只触发底部的音乐播放
       playMusic(id){
        //    console.log(this.newMusicList);
        //    console.log("id====>",id);
        //    console.log("this.newMusciList===>",this.newMusicList);
           this.$root.playingMusic.musicID=id;
           this.$root.playingMusic.playList=[];
        //    console.log("this.newMusicList==>",this.newMusicList);
           this.$root.playingMusic.playList=this.newMusicList.map(data=>{
               if(data.id){
                   return data.id;
               }else{
                   return data.songId;
               }
               
           });
            for(let i=0;i<this.$root.playingMusic.playList.length;i++){
                if(this.$root.playingMusic.playList[i]==id){
                    this.$root.playingMusic.playCount=i;
                    break;
                }
            }
       },
       //触发全屏音乐播放
       playBigMusic(id){
           
           this.$root.playingMusic.isFullLrc=true;
           this.$root.playingMusic.musicID=id;
           this.$root.playingMusic.playList=this.newMusicList.map(data=>{
               return data.id;
           });
           for(let i=0;i<this.$root.playingMusic.playList.length;i++){
                if(this.$root.playingMusic.playList[i]==id){
                    this.$root.playingMusic.playCount=i;
                    break;
                }
            }
       }
   }
}
</script>
<style lang="less" scoped>
    .newMusicList{
        background: #FCFCFD;
        .numSort{
            padding: 0 10px;
            height: 100%;
        }
        li{
            display: flex;
            margin-top:10px ;
            padding-left: 10px;
            align-items: center;
            div.left{
                flex: 1;
                text-align: left;
                border-bottom: 1px solid #ddd;
                height: 100%;
                overflow: hidden;
                div{
                    font-size: 17px;
                    color: black;
                    height: 23px;
                    line-height: 23px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                p{
                    font-size: 12px;
                    color: #888;
                    height: 26px;
                    line-height: 26px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    i{
                        background: url(https://s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28c3767992ca4bb6d4887c74880=) no-repeat;
                        background-size: 166px 97px;
                        display: inline-block;
                        width: 12px;
                        height: 8px;
                        margin-right: 4px;
                    }
                }
            }
            div.right{
                width: 22px;
                height: 22px;
                background:url("https://s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28c3767992ca4bb6d4887c74880=") no-repeat;
                background-size: 166px 97px;
                background-position:-24px 10px ;
                text-indent: 99999px;
                border-bottom: 1px solid #ddd;
                padding: 24.5px 15px;

            }
        }
    }
</style>
