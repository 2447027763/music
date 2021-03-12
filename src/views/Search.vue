<template>
    <div class="search">
        <div class="searchHeader">
            <div class="searchMid">
                <i></i><input @keydown.enter="enterSearch" ref="inputText" v-model="value" type="text" placeholder="搜索歌曲、歌手、专辑" ><span><i v-show="value" @click="clearValue"></i></span>
            </div>
        </div>
        <div class="searchList">
            <HotSearch :hotList="hotList" v-show="showHotList" @hotresultvalue="hotresultvalue"/>
            <SearchHistory @historyResult="historyResult" v-show="showHotList" :searchHistoryList="searchHistoryList" @removehistory="removehistory"></SearchHistory>
            <Suggest v-show="searching" :keyValue="value" :suggests="suggests" @searchResult="searchList"></Suggest>
            <Musicitem v-show="showList" :newMusicList="changeMusicList"></Musicitem>
            <Loading v-show="searching"/>
        </div>
        
    </div>
</template>
<script>
import Suggest from "../components/Suggest"
import Loading from "../components/Loading"
import Musicitem from "../components/MusicItem"
import HotSearch from "../components/HotSearch"
import SearchHistory from "../components/SearchHistory"
export default {
    components:{
        Suggest,  //搜索建议
        Loading,  
        Musicitem,  //数据插入
        HotSearch,  //热门搜索
        SearchHistory  //搜索历史
    },
    data(){
        return {
            value:"",
            suggests:[],
            searching:false,  //是否显示关键词列表
            searchMusicList:[],  //接收的 原始搜到的 歌曲建议列表
            showList:false,   // 是否显示搜索歌曲之后列表
            changeMusicList:[],  //搜索歌曲之后的列表
            showHotList:true ,  // 是否显示热搜列表
            hotList:[],  //热搜榜单
            searchHistoryList:[],  //搜索历史列表
            // showHistoryList:true  //是否显示搜索历史列表
        }
    },
    beforeRouteEnter(to,from,next){
        //请求热搜榜
        
        next(vm=>{
            if(vm.value!=""){
                next();
                return

            }
            vm.showHotList=true;
            vm.$axios("/search/hot/detail").then(data=>{
                vm.hotList= data.data.data.slice(0,10);
                next();
            })
        });
    },
    methods:{
        //清除input 的文字
        clearValue(){
           this.value="";
        },
        historyResult(val){
            //触发历史搜索
            this.value=val;
            this.searchList(val);
        },
        enterSearch(){
            //搜索回车触发事件
             this.searchList(this.value);
        },
        hotresultvalue(val){
            //热门搜索列表的点击
            this.value=val;
            this.searchList(val);
        },
        removehistory(value){
            // 历史列表的清除
            this.searchHistoryList=this.searchHistoryList.filter((v)=>{
                if(v==value){
                    return false
                }else{
                    return true
                }

            })
        },
        searchList(keywords){
            //搜索搜索歌曲,返回歌曲列表逻辑
            this.showHotList=false;
            this.searching=false;
            if(this.searchHistoryList.indexOf(keywords)==-1){
                console.log(keywords);
                this.searchHistoryList.unshift(keywords);
            }
            this.value=keywords;
            this.axios.get("/search?keywords="+keywords).then(d=>{
                if(d.data.code==200){
                    this.searching=false;
                    this.showList=true;
                    this.searchMusicList=d.data.result.songs;
                    // console.log(this.searchMusicList);
                    this.changeMusicList=[];
                        for(let i=0;i< this.searchMusicList.length;i++){
                            let singer=this.searchMusicList[i].name ;  //歌手
                            let songId=this.searchMusicList[i].id; //歌的id
                            this.changeMusicList.push({
                                name:singer,
                                id:songId,
                                song:{artists:[{name:this.searchMusicList[i].artists[0].name}], //歌名
                                    privilege:{maxbr:999999} 
                                }
                            });
                        }
                }
            })
        }
    },
    watch:{
        value(val){
            if(val==""){
                this.showHotList=true;
                this.searching=false;
                this.showList=false;
                this.suggests=[];
                return ;
            }
            //搜索建议逻辑
            this.$axios.get("/search/suggest?keywords="+val).then(data=>{
                this.showHotList=false;
                this.searching=true;
                this.showList=false;
                if(data.data.code==200&&data.data.result.order){
                    let result=data.data.result;
                    let re=result.order.reduce((prev,v)=>{
                        if(v!=="playlist"){
                             return  prev.concat(result[v]);
                        }
                       return prev;
                    },[]);
                    this.suggests=re;
                    this.showHotList=false;
                    this.showList=false;
                }
                
            }).finally(()=>{
               if(this.value==""){
                    this.showHotList=true;
                    this.searching=false;
                     this.showList=false;
                     this.suggests=[];
                    return ;
                }
            })
            
            
        }
    }
}
</script>

<style lang="less" scoped>
    .search{
        background: #FBFCFD;
        height: 100%;
        .searchList{
            height: 100%;
        }
        .searchHeader{
            height: 60px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #eee;
            .searchMid{
                background-color:#EBECEC;
                flex: 1;
                margin: 0 10px;
                height: 30px;
                display: flex;
                border-radius: 30px;
                align-items: center;
                i{
                    display: inline-block;
                    margin: 0 8px;
                    flex-grow: 0;
                    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNiAyNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljOWNhIiBkPSJNMjUuMTgxIDIzLjUzNWwtMS40MTQgMS40MTQtNy4zMTUtNy4zMTRBOS45NjYgOS45NjYgMCAwIDEgMTAgMjBDNC40NzcgMjAgMCAxNS41MjMgMCAxMFM0LjQ3NyAwIDEwIDBzMTAgNC40NzcgMTAgMTBjMCAyLjM0Mi0uODExIDQuNDktMi4xNiA2LjE5NWw3LjM0MSA3LjM0ek0xMCAyYTggOCAwIDEgMCAwIDE2IDggOCAwIDAgMCAwLTE2eiIvPjwvc3ZnPg==) no-repeat;
                    width: 13px;
                    height: 13px;
                }
                input{
                    outline: none;
                    flex-grow: 1;
                    height: 100%;
                    border: none;
                    background: transparent;
                }
                span{
                    flex-grow: 0;
                    display: inline-block;
                    display: flex;
                    align-items: center;
                    i{
                        display: inline-block;
                        width: 14px;
                        height: 14px;
                        background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOCAyOCI+PGcgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjYmNiZGJkIiBkPSJNMTQgMGM3LjczMiAwIDE0IDYuMjY4IDE0IDE0cy02LjI2OCAxNC0xNCAxNFMwIDIxLjczMiAwIDE0IDYuMjY4IDAgMTQgMHoiLz48cGF0aCBkPSJNMTkgOUw5IDE5TTkgOWwxMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZWJlY2ViIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+PC9nPjwvc3ZnPg==")no-repeat;
                        background-size: contain;
                    }
                
                }

            }
        }
    }
    
</style>