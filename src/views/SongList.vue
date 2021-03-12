<template>
    <div class="songList" >
        <router-link to="/" class="back"><svg t="1610418695875" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2510" width="200" height="200"><path d="M820.976419 105.561423L414.688386 511.879565l406.197706 406.197706-105.62164 105.65175L309.036636 617.501206l-0.120435 0.150543-105.651749-105.651749 0.150544-0.120435-0.421523-0.421523 105.62164-105.65175 0.421523 0.421523L715.354778-0.060218l105.621641 105.621641z" p-id="2511" fill="#696969"></path></svg></router-link>
        <div class="songListTop" :style="{background:`url(${playlist.coverImgUrl})`}">
            <div class="songListBox">
                <p class="songListTitle">{{playlist.name}}</p>
                <div class="updateTime">{{playlist.updateTime|formatTime}}更新</div>
                <div class="introduce">{{playlist.description}}</div>
            </div>
        </div>
        <h5>歌曲列表</h5>
        <MusicItem :newMusicList="changeMusicList"></MusicItem>
        <h5>最新评论({{reviewList.length}})</h5>
        <Review :reviewList="reviewList"></Review>
        <Loading v-show="changeMusicList.length==0&&reviewList.length==0"></Loading>
    </div>
</template>
<script>
import Loading from "../components/Loading"
import MusicItem from '../components/MusicItem';
import Review from "../components/Review";
export default {
    components:{
        MusicItem,
        Review,
        Loading
    },
    props:["songListId"],
    data(){
        return {
            playlist:{},
            changeMusicList:[],
            reviewList:[]
        }
    },
    filters:{
        formatTime(val){
            let arr=["一","二","三","四","五","六","日",];
            let times=new Date(val);
            let index= times.getDay();
            if(!index){
                index=1;
            }
            return "星期"+arr[index-1];
            
        }
    },
    beforeRouteEnter(to,from,next){
        next(vm=>{
            console.log("vm.songListId======>",vm.songListId);
            //请求歌曲列表
            vm.$axios.get("/playlist/detail?id="+vm.songListId).then((data)=>{
                vm.playlist=data.data.playlist;
                let datas=data.data.playlist.trackIds;
                let url="/song/detail?ids=";
                for(let i=0;i<datas.length;i++){
                    url+=datas[i].id+",";
                }
                //拼接id
                url=url.slice(0,url.length-1);
                vm.$axios.get(url).then((datas)=>{   //请求可乐8的接口获取多个歌曲id和其他歌曲的信息
                    let returnData=datas.data.songs;
                        vm.changeMusicList=[];
                        for(let i=0;i<returnData.length;i++){
                            let singer=returnData[i].name;  //歌手
                            let songId=returnData[i].id; //歌的id
                            vm.changeMusicList.push({
                                name:singer,
                                id:songId,
                                song:{artists:[{name:returnData[i].ar[0].name}], //歌名
                                    privilege:{maxbr:datas.data.privileges[i].maxbr} 
                                },
                                num:i+1
                            });
                        }
                });

                vm.$axios.get("/comment/playlist?id="+vm.songListId).then((datas)=>{  //请求歌单评论
                    vm.reviewList=datas.data.comments;
                    // console.log(vm.reviewList);
                })
            })
        })
    }
}
</script>
<style lang="less" scoped>
    .songList{
        h5{
            text-align: left;
            font-size: 12px;
            text-indent: 1em;
            background: #EEEFF0;
            padding: 4px 0;
        }
        .back{
            position: fixed;
            top: 10px;
            left: 10px;
            width: 30px;
            height: 30px;
            opacity: 0.5;
            svg{
                width: 100%;
                height: 100%;
            }
        }
        .songListTop{
            width: 100%;
            background-size:cover !important;
            background-position: 50% !important;
            height: 210px;
            display: flex;
            align-items: center;
            justify-items: center;
            .songListBox{
                padding: 0 20px;
                height:145px;
                color: white;
                text-align: left;
                .songListTitle{
                    font-size: 18px;
                    margin-bottom: 20px;
                    text-shadow: 0 0 10px rgba(53, 48, 48, 0.933)
                }
                .updateTime{
                    display: inline;
                    padding: 3px;
                    font-size: 12px;
                    color: #eee;
                    background: #888;
                    opacity: 0.8;
                }
                .introduce{
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    margin-top:20px ;
                    font-size: 14px;
                    color: #ccc;
                    height: 60px;
                    text-shadow: 0 0 10px rgba(53, 48, 48, 0.933)
                }

            }
        }
    }
    
</style>