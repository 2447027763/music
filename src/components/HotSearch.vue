<template>
    <div class="hotSearch">
        <div class="hotSearchHeader">
             <div class="hotSearchTitle">
                热门搜索
            </div>
            <ul class="hot">
                <Loading v-show="hotList.length==0"></Loading>
                <li v-for="(v,k) in hotList" :key="k" @click="$emit('hotresultvalue',v.searchWord)">{{v.searchWord}}</li>
            </ul>
        </div>

    </div>
</template>
<script>
import Loading from '../components/Loading'
export default {
    components:{
        Loading
    },
    props:{
        hotList:{
            type:Array,
            default:function(){
                return [];
            }
        }
    }

}
</script>
<style lang="less" scoped>
    .hotSearch{
        width: 100%;
        display: flex;
        .hotSearchHeader{
           flex: 1;
           padding: 15px 10px 0;
           .hotSearchTitle{
               text-align: left;
               font-size: 12px;
               margin-bottom:10px ;
           }
           ul.hot{
               width: 100%;
               li{
                   float: left;
                   margin:0 8px;
                   margin-bottom:10px ;
                   padding: 5px 10px;
                   border-radius:30px ;
                   font-size: 14px;
                   border: 1px solid #eee;
               }
           }
        }
    }
</style>