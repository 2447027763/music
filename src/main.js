import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
let playingMusic={
  musicID:0,
  playingList:[],
  isPlay:false,  // 是否播放
  playHistoryList:[],  //播放历史列表
  isFullLrc:false,   //歌词是否全屏
  playList:[],   //播放列表
  playCount:0  //播放的下标
}
new Vue({
  router,
  data:{
    playingMusic
  },
  render: h => h(App)
}).$mount('#app')
