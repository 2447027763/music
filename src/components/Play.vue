<template>
  <div class="play">
    <audio
      autoplay
      ref="musicplayer"
      :src="`https://music.163.com/song/media/outer/url?id=${$root.playingMusic.musicID}.mp3`"
      @timeupdate="timeupdate"
    ></audio>
    <div
      class="playerBar"
      :style="{
        background: `white url(${song.al.picUrl}) no-repeat !important`,
      }"
    >
      <i :class="$root.playingMusic.isPlay ? 'roll' : ''">
        <img :src="song.al.picUrl" alt="" />
      </i>
      <i
        @click="showFull"
        :style="{ color: `${song.al.picUrl ? '#fff' : 'pink'}` }"
        >{{ song.name }}-{{ song.ar[0].name }}</i
      >
      <i @click="togglePlay" :class="$root.playingMusic.isPlay ? 'roll' : ''">
        <i class="playIcon" v-show="$root.playingMusic.isPlay"
          ><svg
            t="1610536658945"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="26681"
            data-spm-anchor-id="a313x.7781069.0.i7"
            width="200"
            height="200"
          >
            <path
              d="M970.624 756.89984a218.84416 218.84416 0 1 0-218.84416 218.84416 218.84416 218.84416 0 0 0 218.84416-218.84416z"
              fill="#F4CA1C"
              p-id="26682"
            ></path>
            <path
              d="M512 957.44a445.44 445.44 0 1 1 445.44-445.44 445.952 445.952 0 0 1-445.44 445.44z m0-819.03104A373.59616 373.59616 0 1 0 885.59616 512 374.016 374.016 0 0 0 512 138.40896z m-102.62016 576.512a35.92192 35.92192 0 0 1-35.92192-35.92192V372.46976a35.92192 35.92192 0 1 1 71.84384 0v306.5344a35.92192 35.92192 0 0 1-35.92192 35.92192z m205.952 0a35.92192 35.92192 0 0 1-35.92192-35.92192V372.46976a35.92192 35.92192 0 1 1 71.84384 0v306.5344a35.92192 35.92192 0 0 1-35.92192 35.92192z"
              fill="#e5b8e6"
              p-id="26683"
              data-spm-anchor-id="a313x.7781069.0.i8"
              class="selected"
            ></path></svg
        ></i>
        <i class="playIcon" v-show="!$root.playingMusic.isPlay"
          ><svg t="1615126127672" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2161" width="81" height="81"><path d="M507.456 64C262.528 64 64 262.752 64 507.904c0 245.12 198.528 443.872 443.456 443.872 244.896 0 443.456-198.752 443.456-443.872C950.912 262.752 752.352 64 507.456 64z m0 843.408c-220.432 0-399.136-178.88-399.136-399.504C108.32 287.2 287.04 108.368 507.456 108.368c220.432 0 399.136 178.88 399.136 399.536 0 220.624-178.704 399.504-399.136 399.504z m201.28-430.96C639.76 429.44 514.656 359.072 443.36 315.52c-29.232-18.496-53.776-11.088-56.144 21.504-1.728 87.248 0 255.52 0 344.32 1.44 33.04 30.592 37.408 55.92 24.08L708.16 544.736c-0.496-0.272 54.272-30.464 0.592-68.288z" p-id="2162" fill="#FFC0CB"></path></svg></i>
        <canvas ref="canvas" width="50" height="50"></canvas>
      </i>
    </div>
    <!-- 全屏 -->
    <div
      class="fullLrc"
      v-show="$root.playingMusic.isFullLrc"
      :style="{
        background: ` url(${
          song.al.picUrl ||
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fd-paper.i4.cn%2Fmax%2F2017%2F03%2F09%2F15%2F1489045175442_906184.jpg&refer=http%3A%2F%2Fd-paper.i4.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617588336&t=f4fac4392c1a5f2cb917a3a9be7e0407'
        })white no-repeat`,
        '-webkit-filter': 'grayscale(70%)',
      }"
    >
      <div class="back" @click="$root.playingMusic.isFullLrc = false">
        <svg
          t="1610418695875"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2510"
          width="200"
          height="200"
        >
          <path
            d="M820.976419 105.561423L414.688386 511.879565l406.197706 406.197706-105.62164 105.65175L309.036636 617.501206l-0.120435 0.150543-105.651749-105.651749 0.150544-0.120435-0.421523-0.421523 105.62164-105.65175 0.421523 0.421523L715.354778-0.060218l105.621641 105.621641z"
            p-id="2511"
            fill="#696969"
          ></path>
        </svg>
      </div>
      <div class="fullLrcHeader">
        <h1>{{ song.name }}</h1>
        <h3>{{ song.ar[0].name }}</h3>
      </div>
      <div class="lrc">
        <ul :style="{ transform: `translateY(-${(currentIndex - 6) * 30}px)` }">
          <li
            :class="{ active: currentIndex == k }"
            v-for="(v, k) in lyr"
            :key="k"
          >
            {{ v.lyric }}
          </li>
        </ul>
      </div>
      <div class="lrcBottom">
        <div class="lrcTime">
          <span class="left">{{ currentTime | changeMinutes }}</span>
          <span class="right">{{ durationTime | changeMinutes }}</span>
        </div>
        <div ref="progressBar" class="progressBar">
          <div class="progressBarLine" ref="progressBarLine"></div>
          <span class="progressBall" ref="progressBall"></span>
          <div class="mask" @touchstart="jumpProgress"></div>
        </div>
        <div class="players">
          <div class="playMethod" @click="switchPlayMethod">
              <svg v-show="playmMethodIndex==0" t="1615022434526" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5589" width="81" height="81"><path d="M941 414.6H83c-11 0-20-9-20-20s9-20 20-20h858c11 0 20 9 20 20s-8.9 20-20 20z" p-id="5590" fill="#ffffff"></path><path d="M937.2 405.4c-5.1 0-10.2-2-14.1-5.9L780.7 257.1c-7.8-7.8-7.8-20.5 0-28.3 7.8-7.8 20.5-7.8 28.3 0l142.4 142.4c7.8 7.8 7.8 20.5 0 28.3-4 3.9-9.1 5.9-14.2 5.9zM941 649.4H83c-11 0-20-9-20-20s9-20 20-20h858c11 0 20 9 20 20s-8.9 20-20 20z" p-id="5591" fill="#ffffff"></path><path d="M794.8 801c-5.1 0-10.2-2-14.1-5.9-7.8-7.8-7.8-20.5 0-28.3L923 624.5c7.8-7.8 20.5-7.8 28.3 0s7.8 20.5 0 28.3L808.9 795.1c-3.9 3.9-9 5.9-14.1 5.9z" p-id="5592" fill="#ffffff"></path></svg>
              <svg v-show="playmMethodIndex==1" t="1615022601919" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5792" width="81" height="81"><path d="M545.3 630.5c-11 0-20-9-20-20V405.9c0-11 9-20 20-20s20 9 20 20v204.6c0 11-9 20-20 20z" p-id="5793" fill="#ffffff"></path><path d="M478.5 491.2c-5.1 0-10.2-2-14.1-5.9-7.8-7.8-7.8-20.5 0-28.3l67.1-67.1c7.8-7.8 20.5-7.8 28.3 0s7.8 20.5 0 28.3l-67.1 67.1c-4 4-9.1 5.9-14.2 5.9z" p-id="5794" fill="#ffffff"></path><path d="M169.6 791c-5.7 0-11.4-2.4-15.3-7.1-27.4-32.6-48.8-69.2-63.5-109-15.3-41.1-23-84.4-23-128.7 0-49.9 9.8-98.3 29-143.8 18.6-44 45.2-83.5 79.2-117.4 33.9-33.9 73.4-60.6 117.4-79.2 45.6-19.3 93.9-29 143.8-29h274c11 0 20 9 20 20s-9 20-20 20h-274c-181.7 0-329.5 147.8-329.5 329.5 0 77.5 27.4 152.7 77.2 211.9 7.1 8.5 6 21.1-2.4 28.2-3.8 3-8.4 4.6-12.9 4.6z" p-id="5795" fill="#ffffff"></path><path d="M712.7 215.5c-5.1 0-10.2-2-14.1-5.9l-67.1-67.1c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l67.1 67.1c7.8 7.8 7.8 20.5 0 28.3-4 3.9-9.1 5.9-14.2 5.9z" p-id="5796" fill="#ffffff"></path><path d="M586.9 847.3h-274c-11 0-20-9-20-20s9-20 20-20h274c181.7 0 329.5-147.8 329.5-329.5 0-77.5-27.4-152.7-77.2-211.9-7.1-8.5-6-21.1 2.4-28.2 8.5-7.1 21.1-6 28.2 2.4 27.4 32.6 48.8 69.2 63.5 109 15.3 41.1 23 84.4 23 128.7 0 49.9-9.8 98.3-29 143.8-18.6 44-45.2 83.5-79.2 117.4s-73.4 60.6-117.4 79.2c-45.6 19.3-94 29.1-143.8 29.1z" p-id="5797" fill="#ffffff"></path><path d="M378.4 915.6c-5.1 0-10.2-2-14.1-5.9l-67.1-67.1c-7.8-7.8-7.8-20.5 0-28.3 7.8-7.8 20.5-7.8 28.3 0l67.1 67.1c7.8 7.8 7.8 20.5 0 28.3-3.9 4-9.1 5.9-14.2 5.9z" p-id="5798" fill="#ffffff"></path></svg>
              <svg v-show="playmMethodIndex==2" t="1615022628321" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6002" width="81" height="81"><path d="M756.8 701.4c-28.6 0-56.1-3.7-82.8-10.9-46.7-12.8-90.8-37.1-131.3-72.5C500 580.7 460 529.8 424 466.9c-57.2-100-131-165.8-219.2-195.7-65.9-22.2-115.7-15.1-116.2-15-10.9 1.7-21.1-5.7-22.8-16.7-1.7-10.9 5.8-21.2 16.7-22.9 2.3-0.4 58.3-8.7 132.9 15.9 43.4 14.4 84.4 37 121.8 67.4 46.4 37.6 87.3 87 121.7 147 118.9 207.5 268.8 262.2 471.6 172.2 10.1-4.5 21.9 0.1 26.4 10.2s-0.1 21.9-10.2 26.4c-68.8 30.5-131.6 45.7-189.9 45.7z" p-id="6003" fill="#ffffff"></path><path d="M785 809c-5.1 0-10.2-2-14.1-5.9-7.8-7.8-7.8-20.5 0-28.3l153.5-153.5c7.8-7.8 20.5-7.8 28.3 0s7.8 20.5 0 28.3L799.2 803.2c-3.9 3.9-9.1 5.8-14.2 5.8zM575.4 425.2c-6 0-12-2.7-15.9-7.9-6.7-8.8-5-21.3 3.8-28 106.7-81.3 232.1-88.2 383.4-21 10.1 4.5 14.6 16.3 10.2 26.4-4.5 10.1-16.3 14.6-26.4 10.2-138.6-61.5-247.6-56.4-342.9 16.3-3.7 2.7-8 4-12.2 4zM110.1 809c-16.8 0-26.9-1.5-27.7-1.7-10.9-1.7-18.4-12-16.7-22.9 1.7-10.9 11.9-18.3 22.8-16.7 0.8 0.1 38.3 5.4 90.8-7.6 70.6-17.5 133.5-58.1 187.1-120.5 7.2-8.4 19.8-9.4 28.2-2.2 8.4 7.2 9.4 19.8 2.2 28.2-32.7 38.2-69.4 69.4-109.1 92.8-31.9 18.8-65.9 32.7-100.8 41.1-31.5 7.6-58.3 9.5-76.8 9.5z" p-id="6004" fill="#ffffff"></path><path d="M938.5 408.5c-5.1 0-10.2-2-14.1-5.9L770.9 249.1c-7.8-7.8-7.8-20.5 0-28.3 7.8-7.8 20.5-7.8 28.3 0l153.5 153.5c7.8 7.8 7.8 20.5 0 28.3-3.9 3.9-9.1 5.9-14.2 5.9z" p-id="6005" fill="#ffffff"></path></svg>
          </div>
          <div class="playersMid">
            <span class="left" @click="prev"
              ><svg
                t="1610420037487"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="8049"
                width="200"
                height="200"
              >
                <path
                  d="M752.4 172.6L413 512l339.4 339.4-70.7 70.7L271.6 512l410.1-410.1 70.7 70.7z"
                  fill="#dbdbdb"
                  p-id="8050"
                ></path></svg
            ></span>
            <span
              class="mid"
              @click.prevent="togglePlay"
              v-show="$root.playingMusic.isPlay"
              ><svg
                t="1610544085167"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2570"
                width="200"
                height="200"
              >
                <path
                  d="M716.805 780.798V243.2c0-21.205-17.197-38.404-38.404-38.404S640 221.993 640 243.2v537.598c0 21.205 17.197 38.393 38.402 38.393s38.404-17.188 38.404-38.393z m-332.804 0V243.2c0-21.205-17.188-38.404-38.391-38.404-21.216 0-38.404 17.197-38.404 38.404v537.598c0 21.205 17.188 38.393 38.404 38.393 21.203 0 38.39-17.188 38.39-38.393z"
                  fill="#707070"
                  p-id="2571"
                ></path></svg
            ></span>
            <span
              class="mid"
              @click.prevent="togglePlay"
              v-show="!$root.playingMusic.isPlay"
              ><svg
                t="1610545854699"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3799"
                width="200"
                height="200"
              >
                <path
                  d="M246.21875 905.22265625c-13.271484375 0-26.54296875-3.515625-38.583984375-10.458984375-24.2578125-13.974609375-38.671875-39.0234375-38.671875-66.97265625V376.6484375c0-9.228515625 7.470703125-16.69921875 16.69921875-16.69921875s16.69921875 7.470703125 16.69921875 16.69921875v451.14257812499994c0 15.8203125 8.26171875 30.05859375 21.97265625 37.96875 13.7109375 7.998046875 30.146484375 7.91015625 43.857421875 0l545.625-316.0546875c14.23828125-8.26171875 22.412109375-22.939453125 21.884765625-39.287109375-0.52734375-16.435546875-9.580078125-30.5859375-24.2578125-37.880859375L163.337890625 149.36328125c-8.26171875-4.130859375-11.6015625-14.150390625000002-7.470703125-22.412109375 4.130859375-8.26171875 14.23828125-11.6015625 22.412109375-7.470703125L826.384765625 442.56640625c25.83984375 12.919921875 41.8359375 37.880859375 42.802734375 66.796875 0.87890625 28.916015625-13.53515625 54.755859375-38.49609375 69.2578125L284.978515625 894.67578125c-12.12890625 7.03125-25.400390625 10.546875-38.759765625 10.546875z"
                  p-id="3800"
                  fill="#707070"
                ></path></svg
            ></span>
            <span class="right" @click="next"
              ><svg
                t="1610420037487"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="8049"
                width="200"
                height="200"
              >
                <path
                  d="M752.4 172.6L413 512l339.4 339.4-70.7 70.7L271.6 512l410.1-410.1 70.7 70.7z"
                  fill="#dbdbdb"
                  p-id="8050"
                ></path></svg
            ></span>
          </div>
          <div class="payerList" @click="isPopup = !isPopup">
            <svg
              t="1614999022337"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3814"
              width="81"
              height="81"
            >
              <path
                d="M419.037 287.953h413.124c17.673 0 32-14.327 32-32s-14.327-32-32-32H419.037c-17.673 0-32 14.327-32 32s14.327 32 32 32zM419.028 543.17h411.608c17.673 0 32-14.327 32-32s-14.327-32-32-32H419.028c-17.673 0-32 14.327-32 32s14.327 32 32 32zM832.161 735.802H419.037c-17.673 0-32 14.327-32 32s14.327 32 32 32h413.124c17.673 0 32-14.327 32-32s-14.327-32-32-32z"
                fill="#ffffff"
                p-id="3815"
              ></path>
              <path
                d="M256.037 255.953m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"
                fill="#ffffff"
                p-id="3816"
              ></path>
              <path
                d="M256.037 510.787m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"
                fill="#ffffff"
                p-id="3817"
              ></path>
              <path
                d="M256.037 767.621m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"
                fill="#ffffff"
                p-id="3818"
              ></path>
            </svg>
            <div class="popup" v-show="isPopup">
              <div class="popupHeader">播放列表</div>
              <MusicItem :newMusicList="newMusicList"></MusicItem>
            </div>
          </div>
        </div>
      </div>
      <div class="voice" @click="isVoice=!isVoice">
        <svg
          t="1615013964042"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4947"
          width="81"
          height="81"
        >
          <path
            d="M797.463273 400.709818c-5.329455 0-10.821818-0.186182-16.500364-0.581818l3.281455-46.429091c66.653091 4.840727 97.954909-26.554182 99.234909-27.880727l33.861818 31.930182c-1.745455 1.861818-41.006545 42.961455-119.877818 42.961454zM888.366545 791.994182c-1.117091-1.163636-32.465455-32.232727-99.048727-27.671273l-3.281454-46.405818c90.065455-6.423273 134.516364 40.378182 136.354909 42.356364l-34.024728 31.720727zM782.592 535.761455h117.713455v46.545454h-117.713455z"
            p-id="4948"
            fill="#ffffff"
          ></path>
          <path
            d="M676.491636 998.795636l-330.402909-230.539636H99.723636V381.765818h245.480728L676.491636 115.246545v883.549091zM146.269091 721.710545H360.727273l269.218909 187.857455V212.433455l-268.334546 215.877818H146.269091v293.399272z"
            p-id="4949"
            fill="#ffffff"
          ></path>
        </svg>
        <div class="voiceBar" v-show="isVoice">
            <div class="voiceBarBox" @touchstart="jumpVoice" ref="voiceBarBox">
            </div>
            <div class="voiceBall" ref="voiceBall"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MusicItem from "../components/MusicItem";

export default {
  props: ["musicID"],
  components: {
    MusicItem,
  },
  data() {
    return {
      
      song: {
        al: {
          picUrl: "",
        },
        name: "听你想听的歌曲",
        ar: [{ name: "懂你音乐" }],
      },
      lyr: [], //歌词数组
      currentIndex: 0,
      currentTime: 0, //歌曲播放时间
      durationTime: 0, //总时间
      newMusicList: [], //播放音乐列表
      isPopup: false, // 是否显示播放列表
      isVoice:false, //是否显示音量
      playmMethodIndex:0, //0代表顺序播放 1代表循环播放 2代表随机播放
    };
  },
  filters: {
    changeMinutes(val) {
      let m = parseInt(val / 60);
      m = m < 10 ? "0" + m : m;
      let s = (val % 60).toFixed(0);
      s = s < 10 ? "0" + s : s;
      return m + ":" + s;
    },
  },

  methods: {
    //   切换播放方式
      switchPlayMethod(){
          this.playmMethodIndex++;
          if(this.playmMethodIndex>=3){
              this.playmMethodIndex=0
          }
      },
    //   跳转音量
      jumpVoice(e){
       
        // console.log(e.changedTouches[0].pageY-385);
        this.$refs.voiceBall.style.top=e.changedTouches[0].pageY-385+"px";
        let voice=1-(e.changedTouches[0].pageY-385)/100;
        if(voice>=1){
            voice=1;
        }
        this.$refs.musicplayer.volume=voice;
        // console.log(1-(e.changedTouches[0].pageY-385)/100);
        let self=this;
         e.target.addEventListener("touchmove",function(el){
            let y= el.changedTouches[0].pageY-385;
            if(y>=100){
                y=94;
            }else if(y<=0){
                y=-6;
            }
            self.$refs.voiceBall.style.top=y+"px";
            self.$refs.musicplayer.volume=1-(y/100);
        })
      },

    // 获取播放音乐列表
    getPayerList() {
      let datas = this.$root.playingMusic.playList;
      // console.log("datas==>",datas);
      let url = "/song/detail?ids=";
      for (let i = 0; i < datas.length; i++) {
        url += datas[i] + ",";
      }
      // console.log("url", url);
      //拼接id
      url = url.slice(0, url.length - 1);
      this.$axios.get(url).then((datas) => {
        //请求可乐8的接口获取多个歌曲id和其他歌曲的信息
        // console.log(datas);
        let returnData = datas.data.songs;
        this.newMusicList = [];
        for (let i = 0; i < returnData.length; i++) {
          let singer = returnData[i].name; //歌手
          let songId = returnData[i].id; //歌的id
          this.newMusicList.push({
            name: singer,
            id: songId,
            song: {
              artists: [{ name: returnData[i].ar[0].name }], //歌名
              privilege: { maxbr: datas.data.privileges[i].maxbr },
            },
            num: i + 1,
          });
        }
        // console.log("this.payerList===>",this.payerList);
        // this.payerList= this.payerList.map((v)=>{
        //     return v;
        // })
      });
    },
    prev() {
      // 上一首歌
      this.$root.playingMusic.playCount--;
      // console.log(this.$root.playingMusic.playCount);
      if (this.$root.playingMusic.playCount < 0) {
        this.$root.playingMusic.playCount =
          this.$root.playingMusic.playList.length - 1;
      }

      this.$root.playingMusic.musicID = this.$root.playingMusic.playList[
        this.$root.playingMusic.playCount
      ];
      // console.log(this.$root.playingMusic.playList);
    },
    next() {
      // 下一首歌
      this.$root.playingMusic.playCount++;
      // console.log(this.$root.playingMusic.playCount);
      if (this.$root.playingMusic.playCount >this.$root.playingMusic.playList.length - 1) {
        this.$root.playingMusic.playCount = 1;
      }
      // 把下一首的音乐id赋值给现在的全局音乐id
      this.$root.playingMusic.musicID = this.$root.playingMusic.playList[
        this.$root.playingMusic.playCount
      ];
    },
    // 随机播放音乐
    randomMusic(){
      this.$root.playingMusic.playCount=Math.floor(Math.random()*this.$root.playingMusic.playList.length);

      // 把下一首的音乐id赋值给现在的全局音乐id
      this.$root.playingMusic.musicID = this.$root.playingMusic.playList[
        this.$root.playingMusic.playCount
      ];
    },
    jumpProgress(e) {
      //跳转歌
      let progressBar = this.$refs.progressBar;
      let progressBarLeft = progressBar.offsetLeft;
      let progressBarWidth = progressBar.offsetWidth;
      let clickPersent =
        (e.touches[0].clientX - progressBarLeft) / progressBarWidth; //点击的坐标占总的条条的百分比
      let jumpTime = clickPersent * this.durationTime; //应该跳的时间
      this.$refs.musicplayer.currentTime = jumpTime;
      e.target.addEventListener("touchmove", (e) => {
        let movePersent =
          (e.touches[0].clientX - progressBarLeft) / progressBarWidth;
        let moveTime = movePersent * this.durationTime;
        this.$refs.musicplayer.currentTime = moveTime;
      });
    },
    togglePlay() {
      //切换暂停和播放歌
      if(!this.$root.playingMusic.musicID){
        return ;
      }
      if (this.$root.playingMusic.isPlay) {
        this.$root.playingMusic.isPlay = !this.$root.playingMusic.isPlay;
        this.$refs.musicplayer.pause();
      } else {
        this.$root.playingMusic.isPlay = !this.$root.playingMusic.isPlay;
        this.$refs.musicplayer.play();
      }
    },
    showFull() {
      // 是否变全屏
      this.$root.playingMusic.isFullLrc = true;
    },
    timeupdate(event) {
      //同步进度条
      let audio = event.target;
      let currentTime = audio.currentTime;
      let durationTime = audio.duration;
      this.currentTime = currentTime;
      this.durationTime = durationTime;
      this.drawCircle(currentTime, durationTime);
      this.updateProgress(currentTime, durationTime);
      for (let i = 0; i < this.lyr.length; i++) {
        if (i >= this.lyr.length - 1) {
          this.currentIndex = i;
          break;
        }
        if (
          this.lyr[i].time <= currentTime &&
          currentTime < this.lyr[i + 1].time
        ) {
          this.currentIndex = i;
          // console.log("总的:",this.lyr.length);
          // console.log(i);
          break;
        }
      }
      if (this.currentTime == this.durationTime) {
          if(this.playmMethodIndex==0){
              this.next();
          }else if(this.playmMethodIndex==1){
              audio.currentTime=0;
              audio.play();
          }else if(this.playmMethodIndex==2){
              this.randomMusic();
          }
        
      }
    },
    updateProgress(c, d) {
      //圆圈进度条
      let persent = (c / d) * 100;
      this.$refs.progressBarLine.style.width = persent + "%";
      this.$refs.progressBall.style.left = persent + "%";
    },
    drawCircle(c, d) {
      //圆圈进度条
      let canvas = this.$refs.canvas;
      let cxt = canvas.getContext("2d"); //上下文
      cxt.beginPath();
      cxt.strokeStyle = "skyblue";
      cxt.arc(25, 25, 20, 0, Math.PI * 2);
      cxt.stroke();
      cxt.closePath();
      cxt.beginPath();
      cxt.strokeStyle = "pink";
      cxt.arc(25, 25, 20, 0, Math.PI * 2 * (c / d));
      cxt.stroke();
      cxt.closePath();
    },
  },
  watch: {
    musicID(val) {
      //全局id改变触发
       this.getPayerList();
      //  console.log("val==>",val);
      this.$root.playingMusic.isPlay = true;
      this.$axios.get("/song/detail?ids=" + val).then((data) => {
        // console.log("data==>", data);
        this.song = data.data.songs[0];
      });

      this.$axios.get("/lyric?id=" + val).then((lrcdata) => {
        let datas = lrcdata.data;
        // console.log(datas.lrc);
        if (!datas.lrc) {
          //    console.log("触发");
          datas = {
            lrc: {
              lyric: "[00:00.000] 无歌词\n",
            },
          };
        }

        let musicLyr = datas.lrc.lyric.split(/\n/);
        // console.log(musicLyr);
        musicLyr = musicLyr.slice(0, musicLyr.length - 1);
        let reg = /\[(\d+):(\d+\.\d+)\](.+)/;
        this.lyr = musicLyr.map((val) => {
          reg.test(val);
          return {
            time: parseFloat(RegExp.$1 * 60) + parseFloat(RegExp.$2),
            lyric: RegExp.$3,
          };
        });
        // console.log(this.lyr);
      });

      return val;
    },
  },
};
</script>
<style lang="less" scoped>
.play {
  box-shadow: 10px 0 100px 20px white;
  border-top: 1px solid #eee;
  width: 100%;
  position: fixed;
  height: 60px;
  align-content: center;

  background-size: cover;
  bottom: 0;
  z-index: 999;

  audio {
    height: 20px;
  }
  .playerBar {
    display: flex;
    height: 100%;
    align-items: center;
    background-size: contain !important;
    i {
      display: inline-block;
      &:first-of-type {
        margin-left: 10px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        //   animation: roll 2s linear 0s infinite;
        border: 2px solid skyblue;
      }
      &:nth-of-type(2) {
        line-height: 50px;
        flex: 1;
        color: white;
        text-shadow: 0 0 5px #eee;
      }
      &:last-of-type {
        width: 50px;
        height: 50px;
        position: relative;
        .playIcon {
          position: absolute;
          width: 30px;
          height: 30px;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          svg {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  .fullLrc {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: white;
    background-size: 100% auto !important;
    display: flex;
    align-items: center;
    flex-direction: column;
    .voice{
          position: fixed;
          bottom: 150px;
          right: 20px;
          width: 20px;
          height: 20px;
          svg{
              width: 100%;
              height: 100%;
          }
          .voiceBar{
              top: -110px;
              position: absolute;
              width: 10px;
              left: 5px;
              height: 100px;
              background: transparent;
              border:1px solid #eee;
              .voiceBarBox{
                  width: 100%;
                  height: 100%;
                  background: pink;
              }
              .voiceBall{
                  position: absolute;
                  width: 20px;
                  left: 50%;
                  transform: translateX(-50%);
                  height: 6px;
                  background: skyblue;
                  cursor: pointer;
                  top:-6px;
              }
          }
    }
    .back {
      position: fixed;
      left: 10px;
      top: 10px;
      width: 30px;
      height: 30px;
      svg {
        width: 100%;
        height: 100%;
      }
    }
    .fullLrcHeader {
      h1 {
        color: pink;
        font-size: 25px;
        font-weight: bolder;
        text-shadow: 0 0 3px white;
      }
      h3 {
        color: pink;
        text-shadow: 0 0 3px white;
      }
      width: 100%;
      margin-bottom: 30px;
    }
    .lrc {
      width: 100%;
      height: 480px;
      overflow: hidden;
      ul {
        transition: transform 1s linear;

        li {
          text-shadow: 0 0 3px #888;
          //   padding: 10px 0;
          height: 30px;
          line-height: 30px;
          overflow: hidden;
          width: 100%;
          color: white;
          font-size: 18px;
          &.active {
            font-size: 20px;
            font-weight: bolder;
            color: skyblue;
          }
        }
      }
    }
    .lrcBottom {
      box-shadow: 10px 0px 100px 2px #111;
      display: flex;
      flex-direction: column;
      position: fixed;
      bottom: 0;
      height: 80px;
      width: 100%;
      background: rgba(0, 0, 0, 0.1);
      .lrcTime {
        width: 100%;
        height: 30px;
        position: absolute;
        top: -30px;
        span {
          color: snow;
          text-shadow: 0 0 10px #eee;
          float: left;
          margin: 0 5px;
          &:last-child {
            float: right;
          }
        }
      }
      .progressBar {
        position: relative;
        flex-flow: 0;
        height: 3px;
        width: 350px;
        background: white;
        margin: 0 auto;
        .mask {
          top: -10px;
          position: absolute;
          height: 20px;
          width: 100%;
          //   background: rgba(0, 0, 0, .1);
        }
        .progressBarLine {
          width: 0%;
          height: 100%;
          background: skyblue;
        }
        .progressBall {
          position: absolute;
          width: 15px;
          height: 15px;
          background: skyblue;
          left: 0;
          top: -7.5px;
          border-radius: 50%;
          animation: light 2s linear infinite;
          transform: translateX(-50%);
        }
      }
      .players {
        flex-flow: 1;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .playMethod {
          width: 40px;
          height: 40px;
          svg {
            width: 100%;
            height: 100%;
          }
        }
        .payerList {
          position: relative;
          svg {
            width: 100%;
            height: 100%;
          }
          width: 40px;
          height: 40px;
          .popup {
            overflow-y: auto;
            position: absolute;
            right: 0;
            bottom: 50px;
            width: 280px;
            height: 390px;
            background: #fff;
            border-radius: 10px;
            .popupHeader {
              width: 100%;
              height: 30px;
              border-bottom: 1px solid #eee;
            }
          }
        }
        .playersMid {
          width: 150px;
          height: 50px;
          display: flex;
          span {
            border-radius: 50%;
            flex: 1;
            height: 100%;
            svg {
              width: 100%;
              height: 100%;
            }
            &.left {
              border: 1px solid #eee;
            }
            &.right {
              transform: scaleX(-1);
              border: 1px solid #eee;
            }
          }
        }
      }
      
    }

  }
}
.roll {
  animation: rollball 2s linear 0s infinite;
  height: 100px;
}
@keyframes rollball {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes light {
  0% {
    box-shadow: 0 0 0px 0px skyblue;
  }
  50% {
    box-shadow: 0 0 15px 5px skyblue;
  }
  100% {
    box-shadow: 0 0 0px 0px skyblue;
  }
}
</style>