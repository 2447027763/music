<template>

    <ul class="newMusicList">
        <router-link v-for="v in newMusicList" :key="v.id" tag="li" to="/">
            <div class="left">
                <div>{{v.name}}</div>
                <p><i></i>{{v.song.artists[0].name}} - {{v.name}}</p>
            </div>
            <div class="right" @click="add">
                
            </div>
        </router-link>
    </ul>
    
</template>
<script>

export default {
    name:"MusicItem",
    props:{
        newMusicList:Array
    },
   methods:{
       add(){
           console.log(this.newMusicList);
       }
   }
}
</script>
<style lang="less" scoped>
    .newMusicList{
        li{
            display: flex;
            margin-top:10px ;
            padding-left: 10px;
            align-items: center;
            div.left{
                flex: 1;
                text-align: left;
                border-bottom: 1px solid #ddd;
                div{
                    font-size: 17px;
                    color: black;
                }
                p{
                    font-size: 12px;
                    color: #888;
                    padding: 5px 0;
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
                border-bottom:1px solid #ddd ;
                padding: 24.5px 15px;

            }
        }
    }
</style>
