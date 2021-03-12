<template>
    <ul class="suggest">
        <li class="suggestHeader">
            搜索:"{{keyValue}}"
        </li>
        <Loading v-show="suggests.length==0"></Loading>
        <li v-for="s in suggests" :key="s.id" @click="$emit('searchResult',s.name)">{{s|filtType}}{{s.name}}</li>
    </ul>
</template>
<script>
import Loading from "../components/Loading"
export default {
    components:{
        Loading
    },
    props:{
        suggests:{
            type:Array,
            default:function(){
                return [];
            }
        },
        keyValue:String
    },
    filters:{
        filtType(v){
            if(typeof v.artists !="undefined"){
                return "歌曲:"
            }else if(typeof v.artist !="undefined"){
                return "专辑:"
            }else{
                return "歌手:"
            }
        }
    }
}
</script>
<style lang="less" scoped>
    .suggest{
        height: 100%;
        li{
            height: 45px;
            line-height: 45px;
            border: 1px solid #eee;
        }
        li.suggestHeader{
            text-align: left;
            text-indent: 2em;
        }
    }
</style>