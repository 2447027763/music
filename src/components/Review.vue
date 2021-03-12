<template>
    <div class="review">
        <div class="item" v-for="(v,k) in reviewList" :key="k">
            <div class="img">
                <img :src="v.user.avatarUrl" alt="">
            </div>
            <div class="reviewRight">
                <div class="users">
                    <div class="usersLeft">
                        <div class="userName">{{v.user.nickname}}</div><span class="vipImg" v-show="v.user.vipType>0"></span><br>
                        <div class="reviewTime">{{v.time|formatTime}}</div>
                    </div>
                    <div class="usersRight" @click="clickGood(v.likedCount)">
                        {{v.likedCount}}
                        <span><svg class="u-svg u-svg-unzancmt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><path fill="#999" d="m25.857 14.752c-.015.059-1.506 5.867-2.932 8.813-1.162 2.402-3 2.436-3.099 2.436h-12.826v-13c3 0 5.728-4 5.728-7.275 0-3.725 1.433-3.725 2.142-3.725 1.327 0 1.978 1.345 1.978 4 0 2.872-.832 4.525-.839 4.537-.161.31-.155.682.027.981.181.299.5.482.849.482h6.942c.922 0 1.551.215 1.866.64.467.626.286 1.705.164 2.112m-23.857 10.248v-10c0-1.795.659-1.981.855-2h2.145v13h-2.173c-.829 0-.827-.648-.827-1m25.309-13.54c-.713-.969-1.886-1.46-3.482-1.46h-5.519c.26-.932.519-2.285.519-4 0-5.221-2.507-6-4-6-1.909 0-4.185.993-4.185 5.725 0 2.206-1.923 5.275-3.815 5.275h-4-.011c-1.034.011-2.816.862-2.816 4v10.02c0 1.198.675 2.979 2.827 2.979h16.971.035c.364 0 3.224-.113 4.894-3.564 1.514-3.127 3.01-8.942 3.056-9.14.071-.23.664-2.289-.474-3.836"></path></svg></span>
                    </div>
                </div>
                <div class="userReview">
                    {{v.content}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:["reviewList"],
    data(){
        return {
            count:0
        }
    },
    created(){
    },
    filters:{
        formatTime(val){
            let time=new Date(val);
            let m=time.getMinutes();
            let h=time.getHours();
            if(h<0){
                m=m<10?"0"+m:m
                return m+"分钟前"
            }else{
                h=h<10?"0"+h:h
                m=m<10?"0"+m:m
                return h+":"+m
            }
            
        }
    },
    methods:{
       
    }
}
</script>
<style lang="less" scoped>
    .item{
        padding-top: 10px;
        display: flex;
        padding-right:10px ;
       
        .img{
            flex-grow: 0;
            width: 30px;
            height: 30px;
            border-radius:50%;
            overflow: hidden;
            margin: 0 10px;
        }
        .reviewRight{
            border-bottom:1px solid #eee ;
            flex-grow: 1;
            .userReview{
                text-align: left;
                padding-bottom: 10px;
               
            }
            
            .users{
                display: flex;
                .usersLeft{
                    flex-grow: 1;
                    .userName{
                        display: inline-block;
                        float: left;
                    }
                    .vipImg{
                        vertical-align: bottom;
                        float: left;
                        margin:  5px;
                        display: inline-block;
                        height: 11px;
                        width: 32px;
                        background: url("https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4213923094/81eb/9288/68a5/a427a0dbf899d616c3f715272a71ee59.png") no-repeat;
                        background-size: contain;

                    }
                    .reviewTime{
                        margin: 5px 0;
                        font-size: 9px;
                        width: 100%;
                        text-align: left;
                        float: left;
                        color: #999;
                    }
                }
                .usersRight{
                    flex-grow: 0;
                    color: #aaa;
                    font-size: 14px;
                     svg{
                        width: 14px;
                        height: 14px;
                    }
                }
            }
            
        }
    }
</style>