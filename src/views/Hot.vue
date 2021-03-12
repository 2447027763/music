<template>
    <div class="hot">
        <div class="hotTop" >
            <div>
                <div class="hotpic"></div>
                <span>更新日期{{updateDate|formatDate}}</span>
            </div>
            
        </div>
        <div class="hotList">
                <MusicItem :newMusicList="changeMusicList"></MusicItem>
                <!-- <Loading v-if="changeMusicList.length<=0"/> -->
                <button @click="addmore" v-show="listCount>0">查看更多</button>
                <div class="space"></div>
        </div>
    </div>
</template>
<script>
import MusicItem from "../components/MusicItem.vue"
export default {
    components:{
        MusicItem,
    },
    data(){
        return {
            newMusicList:[],
            changeMusicList:[],
            updateDate:0,
            listCount:1,
        }
    },
    methods:{
        addmore(){//请求条数加一倍,同时触发请求
            this.listCount++;
            this.more(this);
        },
    //  加载更多
        more(vm){
            
             let url="/song/detail?ids="
             for(let i=0;i<20*vm.listCount;i++){
                let songID=vm.newMusicList[i].id;
                url+=songID+",";
            }
            url=url.slice(0,url.length-1);
            vm.$axios(url).then(datas=>{
                // console.log("datas==>",datas);
                        let returnData=datas.data.songs;
                        vm.changeMusicList=[];
                        for(let i=0;i<returnData.length;i++){
                            let singer=returnData[i].name;  //歌手
                            let songId=returnData[i].id; //歌的id
                            vm.changeMusicList.push({
                                name:singer,
                                songId:songId,
                                song:{artists:[{name:returnData[i].ar[0].name}], //歌名
                                    privilege:{maxbr:datas.data.privileges[i].maxbr} 
                                },
                                num:i+1
                            });
                        }
                });
        },
        
    },
    filters:{
        addZero(value){
            return value<10?"0"+value:value;
        },
        formatDate(value){
            let d=new Date(value);
            let month=d.getMonth()+1;
            return (month<10?"0"+month:month)+"月"+d.getDate()+"日"
        }
    },
    beforeRouteEnter(to,from,next){
        
        next(vm=>{
            //请求热歌榜
            vm.listCount=1;
             vm.$axios("/artist/top/song?id=6452").then(data=>{
                 vm.newMusicList=data.data.songs;
                 vm.updateDate=data.data.songs[0].publishTime;
                //  console.log("HOtData==>",data);
                 vm.more(vm);
            }).catch(error=>{
                // vm.$axios("/personalized/newsong").then(data=>{
                //     console.log("HOtData==>",data);
                //     vm.changeMusicList=data.data.result;
                // });
                console.log(error+"服务器内部错误");
            });
            // vm.$axios("/top/list?idx=1").then(data=>{
            //      vm.newMusicList=data.data.playlist.trackIds;
            //      vm.updateDate=data.data.playlist.updateTime;
            //      console.log("HOtData==>",data);
            //      vm.more(vm);
            // }).catch(error=>{
            //     // vm.$axios("/personalized/newsong").then(data=>{
            //     //     console.log("HOtData==>",data);
            //     //     vm.changeMusicList=data.data.result;
            //     // });
            //     console.log(error+"服务器内部错误");
            // });
            // vm.newMusicList=vm.changeMusicList
           
        });
    }
}
</script>
<style lang="less" scoped>
    .active{
        color: red;
    }
    .hot{
        width: 100%;
        height: 100%;
        .hotList{
            button{
                height: 30px;
                line-height: 30px;
                width: 100px;
                text-align: center;
                background: none;
                border: none;
                outline:none;
                color: #888;
                margin: 0 auto;
            }
            .space{
                width: 100%;
                height: 90px;
            }
        }
    }
    .hotTop{
        width: 100%;
        height: 145px;
        background: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile06.16sucai.com%2F2015%2F1126%2F7707af7c7f02761da0ad7c4a30bc48ce.jpg&refer=http%3A%2F%2Ffile06.16sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617702274&t=b875d9358c9714e8b90d3cc62771c91a") no-repeat;
        background-size:100% auto;
        div{
           
           display: flex;
           margin-left:20px ;
           width: 100%;
           height: 100%;
           flex-direction:column ;
           justify-content: center;
           div.hotpic{
                margin-left:0px ;
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
    
</style>