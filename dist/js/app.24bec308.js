(function(t){function i(i){for(var e,a,o=i[0],c=i[1],l=i[2],u=0,p=[];u<o.length;u++)a=o[u],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&p.push(n[a][0]),n[a]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);h&&h(i);while(p.length)p.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var t,i=0;i<r.length;i++){for(var s=r[i],e=!0,a=1;a<s.length;a++){var o=s[a];0!==n[o]&&(e=!1)}e&&(r.splice(i--,1),t=c(c.s=s[0]))}return t}var e={},a={app:0},n={app:0},r=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-29a3faeb":"9d9716aa","chunk-2a2475f4":"3d30af6b","chunk-37dfcec7":"05a11740","chunk-58187763":"e1bbbd23"}[t]+".js"}function c(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(t){var i=[],s={"chunk-29a3faeb":1,"chunk-2a2475f4":1,"chunk-37dfcec7":1,"chunk-58187763":1};a[t]?i.push(a[t]):0!==a[t]&&s[t]&&i.push(a[t]=new Promise((function(i,s){for(var e="css/"+({}[t]||t)+"."+{"chunk-29a3faeb":"47ee1c7c","chunk-2a2475f4":"b1062c03","chunk-37dfcec7":"55a161c3","chunk-58187763":"e57b3244"}[t]+".css",n=c.p+e,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var l=r[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===e||u===n))return i()}var p=document.getElementsByTagName("style");for(o=0;o<p.length;o++){l=p[o],u=l.getAttribute("data-href");if(u===e||u===n)return i()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=i,h.onerror=function(i){var e=i&&i.target&&i.target.src||n,r=new Error("Loading CSS chunk "+t+" failed.\n("+e+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=e,delete a[t],h.parentNode.removeChild(h),s(r)},h.href=n;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){a[t]=0})));var e=n[t];if(0!==e)if(e)i.push(e[2]);else{var r=new Promise((function(i,s){e=n[t]=[i,s]}));i.push(e[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var p=new Error;l=function(i){u.onerror=u.onload=null,clearTimeout(h);var s=n[t];if(0!==s){if(s){var e=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.src;p.message="Loading chunk "+t+" failed.\n("+e+": "+a+")",p.name="ChunkLoadError",p.type=e,p.request=a,s[1](p)}n[t]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(i)},c.m=t,c.c=e,c.d=function(t,i,s){c.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,i){if(1&i&&(t=c(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var e in t)c.d(s,e,function(i){return t[i]}.bind(null,e));return s},c.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(i,"a",i),i},c.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=i,l=l.slice();for(var p=0;p<l.length;p++)i(l[p]);var h=u;r.push([0,"chunk-vendors"]),s()})({0:function(t,i,s){t.exports=s("56d7")},"01f3":function(t,i,s){"use strict";var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("ul",{staticClass:"newMusicList"},[t._l(t.newMusicList,(function(i){return s("li",{key:i.id,on:{click:function(s){return s.stopPropagation(),t.playBigMusic(i.id||i.songId)}}},[i.num?s("div",{staticClass:"numSort"},[t._v(t._s(i.num))]):t._e(),s("div",{staticClass:"left"},[s("div",[t._v(t._s(i.name))]),s("p",[s("i",{directives:[{name:"show",rawName:"v-show",value:i.song.privilege.maxbr>32e4,expression:"v.song.privilege.maxbr>320000"}]}),t._v(t._s(i.song.artists[0].name)+" - "+t._s(i.name))])]),s("div",{staticClass:"right",on:{click:function(s){return s.stopPropagation(),s.target!==s.currentTarget?null:t.playMusic(i.id||i.songId)}}},[t._v(" "+t._s(i.id)+" ")])])})),s("Loading",{directives:[{name:"show",rawName:"v-show",value:0==t.newMusicList.length,expression:"newMusicList.length==0"}]})],2)},a=[],n=(s("d81d"),s("3a5e")),r={components:{Loading:n["a"]},name:"MusicItem",props:{newMusicList:{type:Array,default:function(){return[{}]}}},methods:{playMusic:function(t){this.$root.playingMusic.musicID=t,this.$root.playingMusic.playList=[],this.$root.playingMusic.playList=this.newMusicList.map((function(t){return t.id?t.id:t.songId}));for(var i=0;i<this.$root.playingMusic.playList.length;i++)if(this.$root.playingMusic.playList[i]==t){this.$root.playingMusic.playCount=i;break}},playBigMusic:function(t){this.$root.playingMusic.isFullLrc=!0,this.$root.playingMusic.musicID=t,this.$root.playingMusic.playList=this.newMusicList.map((function(t){return t.id}));for(var i=0;i<this.$root.playingMusic.playList.length;i++)if(this.$root.playingMusic.playList[i]==t){this.$root.playingMusic.playCount=i;break}}}},o=r,c=(s("3c9f"),s("2877")),l=Object(c["a"])(o,e,a,!1,null,"36e6be14",null);i["a"]=l.exports},2395:function(t,i,s){},"3a5e":function(t,i,s){"use strict";var e=function(){var t=this,i=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"loading"},[s("div",[s("i"),s("i"),s("i")])])}],n=(s("5e80"),s("2877")),r={},o=Object(n["a"])(r,e,a,!1,null,"dae40a04",null);i["a"]=o.exports},"3c9f":function(t,i,s){"use strict";s("8d48")},"56d7":function(t,i,s){"use strict";s.r(i);s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),a=(s("d3b7"),s("bc3a")),n=s.n(a),r={baseURL:"http://47.112.177.147:3000"},o=n.a.create(r);o.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),o.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t){t.axios=o,window.axios=o,Object.defineProperties(t.prototype,{axios:{get:function(){return o}},$axios:{get:function(){return o}}})},e["a"].use(Plugin);Plugin;var c=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"app"}},[s("TopNav",{directives:[{name:"show",rawName:"v-show",value:t.$route.meta.showNav,expression:"$route.meta.showNav"}]}),s("keep-alive",[s("router-view")],1),s("Play",{attrs:{musicID:t.$root.playingMusic.musicID}}),s("div",{staticClass:"space"})],1)},l=[],u=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("ul",{staticClass:"topnav"},[s("li",[s("router-link",{attrs:{to:"/"}},[t._v("推荐音乐")])],1),s("li",[s("router-link",{attrs:{to:"/hot"}},[t._v("热歌榜")])],1),s("li",[s("router-link",{attrs:{to:"/search"}},[t._v("搜索")])],1)])},p=[],h={},f=h,d=(s("ffa5"),s("2877")),g=Object(d["a"])(f,u,p,!1,null,"983f84ee",null),v=g.exports,m=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"play"},[s("audio",{ref:"musicplayer",attrs:{autoplay:"",src:"https://music.163.com/song/media/outer/url?id="+t.$root.playingMusic.musicID+".mp3"},on:{timeupdate:t.timeupdate}}),s("div",{staticClass:"playerBar",style:{background:"white url("+t.song.al.picUrl+") no-repeat !important"}},[s("i",{class:t.$root.playingMusic.isPlay?"roll":""},[s("img",{attrs:{src:t.song.al.picUrl,alt:""}})]),s("i",{style:{color:t.song.al.picUrl?"#fff":"pink"},on:{click:t.showFull}},[t._v(t._s(t.song.name)+"-"+t._s(t.song.ar[0].name))]),s("i",{class:t.$root.playingMusic.isPlay?"roll":"",on:{click:t.togglePlay}},[s("i",{directives:[{name:"show",rawName:"v-show",value:t.$root.playingMusic.isPlay,expression:"$root.playingMusic.isPlay"}],staticClass:"playIcon"},[s("svg",{staticClass:"icon",attrs:{t:"1610536658945",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"26681","data-spm-anchor-id":"a313x.7781069.0.i7",width:"200",height:"200"}},[s("path",{attrs:{d:"M970.624 756.89984a218.84416 218.84416 0 1 0-218.84416 218.84416 218.84416 218.84416 0 0 0 218.84416-218.84416z",fill:"#F4CA1C","p-id":"26682"}}),s("path",{staticClass:"selected",attrs:{d:"M512 957.44a445.44 445.44 0 1 1 445.44-445.44 445.952 445.952 0 0 1-445.44 445.44z m0-819.03104A373.59616 373.59616 0 1 0 885.59616 512 374.016 374.016 0 0 0 512 138.40896z m-102.62016 576.512a35.92192 35.92192 0 0 1-35.92192-35.92192V372.46976a35.92192 35.92192 0 1 1 71.84384 0v306.5344a35.92192 35.92192 0 0 1-35.92192 35.92192z m205.952 0a35.92192 35.92192 0 0 1-35.92192-35.92192V372.46976a35.92192 35.92192 0 1 1 71.84384 0v306.5344a35.92192 35.92192 0 0 1-35.92192 35.92192z",fill:"#e5b8e6","p-id":"26683","data-spm-anchor-id":"a313x.7781069.0.i8"}})])]),s("i",{directives:[{name:"show",rawName:"v-show",value:!t.$root.playingMusic.isPlay,expression:"!$root.playingMusic.isPlay"}],staticClass:"playIcon"},[s("svg",{staticClass:"icon",attrs:{t:"1615126127672",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2161",width:"81",height:"81"}},[s("path",{attrs:{d:"M507.456 64C262.528 64 64 262.752 64 507.904c0 245.12 198.528 443.872 443.456 443.872 244.896 0 443.456-198.752 443.456-443.872C950.912 262.752 752.352 64 507.456 64z m0 843.408c-220.432 0-399.136-178.88-399.136-399.504C108.32 287.2 287.04 108.368 507.456 108.368c220.432 0 399.136 178.88 399.136 399.536 0 220.624-178.704 399.504-399.136 399.504z m201.28-430.96C639.76 429.44 514.656 359.072 443.36 315.52c-29.232-18.496-53.776-11.088-56.144 21.504-1.728 87.248 0 255.52 0 344.32 1.44 33.04 30.592 37.408 55.92 24.08L708.16 544.736c-0.496-0.272 54.272-30.464 0.592-68.288z","p-id":"2162",fill:"#FFC0CB"}})])]),s("canvas",{ref:"canvas",attrs:{width:"50",height:"50"}})])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.$root.playingMusic.isFullLrc,expression:"$root.playingMusic.isFullLrc"}],staticClass:"fullLrc",style:{background:" url("+(t.song.al.picUrl||"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fd-paper.i4.cn%2Fmax%2F2017%2F03%2F09%2F15%2F1489045175442_906184.jpg&refer=http%3A%2F%2Fd-paper.i4.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617588336&t=f4fac4392c1a5f2cb917a3a9be7e0407")+")white no-repeat","-webkit-filter":"grayscale(70%)"}},[s("div",{staticClass:"back",on:{click:function(i){t.$root.playingMusic.isFullLrc=!1}}},[s("svg",{staticClass:"icon",attrs:{t:"1610418695875",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2510",width:"200",height:"200"}},[s("path",{attrs:{d:"M820.976419 105.561423L414.688386 511.879565l406.197706 406.197706-105.62164 105.65175L309.036636 617.501206l-0.120435 0.150543-105.651749-105.651749 0.150544-0.120435-0.421523-0.421523 105.62164-105.65175 0.421523 0.421523L715.354778-0.060218l105.621641 105.621641z","p-id":"2511",fill:"#696969"}})])]),s("div",{staticClass:"fullLrcHeader"},[s("h1",[t._v(t._s(t.song.name))]),s("h3",[t._v(t._s(t.song.ar[0].name))])]),s("div",{staticClass:"lrc"},[s("ul",{style:{transform:"translateY(-"+30*(t.currentIndex-6)+"px)"}},t._l(t.lyr,(function(i,e){return s("li",{key:e,class:{active:t.currentIndex==e}},[t._v(" "+t._s(i.lyric)+" ")])})),0)]),s("div",{staticClass:"lrcBottom"},[s("div",{staticClass:"lrcTime"},[s("span",{staticClass:"left"},[t._v(t._s(t._f("changeMinutes")(t.currentTime)))]),s("span",{staticClass:"right"},[t._v(t._s(t._f("changeMinutes")(t.durationTime)))])]),s("div",{ref:"progressBar",staticClass:"progressBar"},[s("div",{ref:"progressBarLine",staticClass:"progressBarLine"}),s("span",{ref:"progressBall",staticClass:"progressBall"}),s("div",{staticClass:"mask",on:{touchstart:t.jumpProgress}})]),s("div",{staticClass:"players"},[s("div",{staticClass:"playMethod",on:{click:t.switchPlayMethod}},[s("svg",{directives:[{name:"show",rawName:"v-show",value:0==t.playmMethodIndex,expression:"playmMethodIndex==0"}],staticClass:"icon",attrs:{t:"1615022434526",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5589",width:"81",height:"81"}},[s("path",{attrs:{d:"M941 414.6H83c-11 0-20-9-20-20s9-20 20-20h858c11 0 20 9 20 20s-8.9 20-20 20z","p-id":"5590",fill:"#ffffff"}}),s("path",{attrs:{d:"M937.2 405.4c-5.1 0-10.2-2-14.1-5.9L780.7 257.1c-7.8-7.8-7.8-20.5 0-28.3 7.8-7.8 20.5-7.8 28.3 0l142.4 142.4c7.8 7.8 7.8 20.5 0 28.3-4 3.9-9.1 5.9-14.2 5.9zM941 649.4H83c-11 0-20-9-20-20s9-20 20-20h858c11 0 20 9 20 20s-8.9 20-20 20z","p-id":"5591",fill:"#ffffff"}}),s("path",{attrs:{d:"M794.8 801c-5.1 0-10.2-2-14.1-5.9-7.8-7.8-7.8-20.5 0-28.3L923 624.5c7.8-7.8 20.5-7.8 28.3 0s7.8 20.5 0 28.3L808.9 795.1c-3.9 3.9-9 5.9-14.1 5.9z","p-id":"5592",fill:"#ffffff"}})]),s("svg",{directives:[{name:"show",rawName:"v-show",value:1==t.playmMethodIndex,expression:"playmMethodIndex==1"}],staticClass:"icon",attrs:{t:"1615022601919",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5792",width:"81",height:"81"}},[s("path",{attrs:{d:"M545.3 630.5c-11 0-20-9-20-20V405.9c0-11 9-20 20-20s20 9 20 20v204.6c0 11-9 20-20 20z","p-id":"5793",fill:"#ffffff"}}),s("path",{attrs:{d:"M478.5 491.2c-5.1 0-10.2-2-14.1-5.9-7.8-7.8-7.8-20.5 0-28.3l67.1-67.1c7.8-7.8 20.5-7.8 28.3 0s7.8 20.5 0 28.3l-67.1 67.1c-4 4-9.1 5.9-14.2 5.9z","p-id":"5794",fill:"#ffffff"}}),s("path",{attrs:{d:"M169.6 791c-5.7 0-11.4-2.4-15.3-7.1-27.4-32.6-48.8-69.2-63.5-109-15.3-41.1-23-84.4-23-128.7 0-49.9 9.8-98.3 29-143.8 18.6-44 45.2-83.5 79.2-117.4 33.9-33.9 73.4-60.6 117.4-79.2 45.6-19.3 93.9-29 143.8-29h274c11 0 20 9 20 20s-9 20-20 20h-274c-181.7 0-329.5 147.8-329.5 329.5 0 77.5 27.4 152.7 77.2 211.9 7.1 8.5 6 21.1-2.4 28.2-3.8 3-8.4 4.6-12.9 4.6z","p-id":"5795",fill:"#ffffff"}}),s("path",{attrs:{d:"M712.7 215.5c-5.1 0-10.2-2-14.1-5.9l-67.1-67.1c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l67.1 67.1c7.8 7.8 7.8 20.5 0 28.3-4 3.9-9.1 5.9-14.2 5.9z","p-id":"5796",fill:"#ffffff"}}),s("path",{attrs:{d:"M586.9 847.3h-274c-11 0-20-9-20-20s9-20 20-20h274c181.7 0 329.5-147.8 329.5-329.5 0-77.5-27.4-152.7-77.2-211.9-7.1-8.5-6-21.1 2.4-28.2 8.5-7.1 21.1-6 28.2 2.4 27.4 32.6 48.8 69.2 63.5 109 15.3 41.1 23 84.4 23 128.7 0 49.9-9.8 98.3-29 143.8-18.6 44-45.2 83.5-79.2 117.4s-73.4 60.6-117.4 79.2c-45.6 19.3-94 29.1-143.8 29.1z","p-id":"5797",fill:"#ffffff"}}),s("path",{attrs:{d:"M378.4 915.6c-5.1 0-10.2-2-14.1-5.9l-67.1-67.1c-7.8-7.8-7.8-20.5 0-28.3 7.8-7.8 20.5-7.8 28.3 0l67.1 67.1c7.8 7.8 7.8 20.5 0 28.3-3.9 4-9.1 5.9-14.2 5.9z","p-id":"5798",fill:"#ffffff"}})]),s("svg",{directives:[{name:"show",rawName:"v-show",value:2==t.playmMethodIndex,expression:"playmMethodIndex==2"}],staticClass:"icon",attrs:{t:"1615022628321",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6002",width:"81",height:"81"}},[s("path",{attrs:{d:"M756.8 701.4c-28.6 0-56.1-3.7-82.8-10.9-46.7-12.8-90.8-37.1-131.3-72.5C500 580.7 460 529.8 424 466.9c-57.2-100-131-165.8-219.2-195.7-65.9-22.2-115.7-15.1-116.2-15-10.9 1.7-21.1-5.7-22.8-16.7-1.7-10.9 5.8-21.2 16.7-22.9 2.3-0.4 58.3-8.7 132.9 15.9 43.4 14.4 84.4 37 121.8 67.4 46.4 37.6 87.3 87 121.7 147 118.9 207.5 268.8 262.2 471.6 172.2 10.1-4.5 21.9 0.1 26.4 10.2s-0.1 21.9-10.2 26.4c-68.8 30.5-131.6 45.7-189.9 45.7z","p-id":"6003",fill:"#ffffff"}}),s("path",{attrs:{d:"M785 809c-5.1 0-10.2-2-14.1-5.9-7.8-7.8-7.8-20.5 0-28.3l153.5-153.5c7.8-7.8 20.5-7.8 28.3 0s7.8 20.5 0 28.3L799.2 803.2c-3.9 3.9-9.1 5.8-14.2 5.8zM575.4 425.2c-6 0-12-2.7-15.9-7.9-6.7-8.8-5-21.3 3.8-28 106.7-81.3 232.1-88.2 383.4-21 10.1 4.5 14.6 16.3 10.2 26.4-4.5 10.1-16.3 14.6-26.4 10.2-138.6-61.5-247.6-56.4-342.9 16.3-3.7 2.7-8 4-12.2 4zM110.1 809c-16.8 0-26.9-1.5-27.7-1.7-10.9-1.7-18.4-12-16.7-22.9 1.7-10.9 11.9-18.3 22.8-16.7 0.8 0.1 38.3 5.4 90.8-7.6 70.6-17.5 133.5-58.1 187.1-120.5 7.2-8.4 19.8-9.4 28.2-2.2 8.4 7.2 9.4 19.8 2.2 28.2-32.7 38.2-69.4 69.4-109.1 92.8-31.9 18.8-65.9 32.7-100.8 41.1-31.5 7.6-58.3 9.5-76.8 9.5z","p-id":"6004",fill:"#ffffff"}}),s("path",{attrs:{d:"M938.5 408.5c-5.1 0-10.2-2-14.1-5.9L770.9 249.1c-7.8-7.8-7.8-20.5 0-28.3 7.8-7.8 20.5-7.8 28.3 0l153.5 153.5c7.8 7.8 7.8 20.5 0 28.3-3.9 3.9-9.1 5.9-14.2 5.9z","p-id":"6005",fill:"#ffffff"}})])]),s("div",{staticClass:"playersMid"},[s("span",{staticClass:"left",on:{click:t.prev}},[s("svg",{staticClass:"icon",attrs:{t:"1610420037487",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"8049",width:"200",height:"200"}},[s("path",{attrs:{d:"M752.4 172.6L413 512l339.4 339.4-70.7 70.7L271.6 512l410.1-410.1 70.7 70.7z",fill:"#dbdbdb","p-id":"8050"}})])]),s("span",{directives:[{name:"show",rawName:"v-show",value:t.$root.playingMusic.isPlay,expression:"$root.playingMusic.isPlay"}],staticClass:"mid",on:{click:function(i){return i.preventDefault(),t.togglePlay(i)}}},[s("svg",{staticClass:"icon",attrs:{t:"1610544085167",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2570",width:"200",height:"200"}},[s("path",{attrs:{d:"M716.805 780.798V243.2c0-21.205-17.197-38.404-38.404-38.404S640 221.993 640 243.2v537.598c0 21.205 17.197 38.393 38.402 38.393s38.404-17.188 38.404-38.393z m-332.804 0V243.2c0-21.205-17.188-38.404-38.391-38.404-21.216 0-38.404 17.197-38.404 38.404v537.598c0 21.205 17.188 38.393 38.404 38.393 21.203 0 38.39-17.188 38.39-38.393z",fill:"#707070","p-id":"2571"}})])]),s("span",{directives:[{name:"show",rawName:"v-show",value:!t.$root.playingMusic.isPlay,expression:"!$root.playingMusic.isPlay"}],staticClass:"mid",on:{click:function(i){return i.preventDefault(),t.togglePlay(i)}}},[s("svg",{staticClass:"icon",attrs:{t:"1610545854699",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3799",width:"200",height:"200"}},[s("path",{attrs:{d:"M246.21875 905.22265625c-13.271484375 0-26.54296875-3.515625-38.583984375-10.458984375-24.2578125-13.974609375-38.671875-39.0234375-38.671875-66.97265625V376.6484375c0-9.228515625 7.470703125-16.69921875 16.69921875-16.69921875s16.69921875 7.470703125 16.69921875 16.69921875v451.14257812499994c0 15.8203125 8.26171875 30.05859375 21.97265625 37.96875 13.7109375 7.998046875 30.146484375 7.91015625 43.857421875 0l545.625-316.0546875c14.23828125-8.26171875 22.412109375-22.939453125 21.884765625-39.287109375-0.52734375-16.435546875-9.580078125-30.5859375-24.2578125-37.880859375L163.337890625 149.36328125c-8.26171875-4.130859375-11.6015625-14.150390625000002-7.470703125-22.412109375 4.130859375-8.26171875 14.23828125-11.6015625 22.412109375-7.470703125L826.384765625 442.56640625c25.83984375 12.919921875 41.8359375 37.880859375 42.802734375 66.796875 0.87890625 28.916015625-13.53515625 54.755859375-38.49609375 69.2578125L284.978515625 894.67578125c-12.12890625 7.03125-25.400390625 10.546875-38.759765625 10.546875z","p-id":"3800",fill:"#707070"}})])]),s("span",{staticClass:"right",on:{click:t.next}},[s("svg",{staticClass:"icon",attrs:{t:"1610420037487",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"8049",width:"200",height:"200"}},[s("path",{attrs:{d:"M752.4 172.6L413 512l339.4 339.4-70.7 70.7L271.6 512l410.1-410.1 70.7 70.7z",fill:"#dbdbdb","p-id":"8050"}})])])]),s("div",{staticClass:"payerList",on:{click:function(i){t.isPopup=!t.isPopup}}},[s("svg",{staticClass:"icon",attrs:{t:"1614999022337",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3814",width:"81",height:"81"}},[s("path",{attrs:{d:"M419.037 287.953h413.124c17.673 0 32-14.327 32-32s-14.327-32-32-32H419.037c-17.673 0-32 14.327-32 32s14.327 32 32 32zM419.028 543.17h411.608c17.673 0 32-14.327 32-32s-14.327-32-32-32H419.028c-17.673 0-32 14.327-32 32s14.327 32 32 32zM832.161 735.802H419.037c-17.673 0-32 14.327-32 32s14.327 32 32 32h413.124c17.673 0 32-14.327 32-32s-14.327-32-32-32z",fill:"#ffffff","p-id":"3815"}}),s("path",{attrs:{d:"M256.037 255.953m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z",fill:"#ffffff","p-id":"3816"}}),s("path",{attrs:{d:"M256.037 510.787m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z",fill:"#ffffff","p-id":"3817"}}),s("path",{attrs:{d:"M256.037 767.621m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z",fill:"#ffffff","p-id":"3818"}})]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isPopup,expression:"isPopup"}],staticClass:"popup"},[s("div",{staticClass:"popupHeader"},[t._v("播放列表")]),s("MusicItem",{attrs:{newMusicList:t.newMusicList}})],1)])])]),s("div",{staticClass:"voice",on:{click:function(i){t.isVoice=!t.isVoice}}},[s("svg",{staticClass:"icon",attrs:{t:"1615013964042",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4947",width:"81",height:"81"}},[s("path",{attrs:{d:"M797.463273 400.709818c-5.329455 0-10.821818-0.186182-16.500364-0.581818l3.281455-46.429091c66.653091 4.840727 97.954909-26.554182 99.234909-27.880727l33.861818 31.930182c-1.745455 1.861818-41.006545 42.961455-119.877818 42.961454zM888.366545 791.994182c-1.117091-1.163636-32.465455-32.232727-99.048727-27.671273l-3.281454-46.405818c90.065455-6.423273 134.516364 40.378182 136.354909 42.356364l-34.024728 31.720727zM782.592 535.761455h117.713455v46.545454h-117.713455z","p-id":"4948",fill:"#ffffff"}}),s("path",{attrs:{d:"M676.491636 998.795636l-330.402909-230.539636H99.723636V381.765818h245.480728L676.491636 115.246545v883.549091zM146.269091 721.710545H360.727273l269.218909 187.857455V212.433455l-268.334546 215.877818H146.269091v293.399272z","p-id":"4949",fill:"#ffffff"}})]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isVoice,expression:"isVoice"}],staticClass:"voiceBar"},[s("div",{ref:"voiceBarBox",staticClass:"voiceBarBox",on:{touchstart:t.jumpVoice}}),s("div",{ref:"voiceBall",staticClass:"voiceBall"})])])])])},y=[],w=(s("d81d"),s("fb6a"),s("b0c0"),s("b680"),s("4d63"),s("ac1f"),s("25f0"),s("1276"),s("01f3")),M={props:["musicID"],components:{MusicItem:w["a"]},data:function(){return{song:{al:{picUrl:""},name:"听你想听的歌曲",ar:[{name:"懂你音乐"}]},lyr:[],currentIndex:0,currentTime:0,durationTime:0,newMusicList:[],isPopup:!1,isVoice:!1,playmMethodIndex:0}},filters:{changeMinutes:function(t){var i=parseInt(t/60);i=i<10?"0"+i:i;var s=(t%60).toFixed(0);return s=s<10?"0"+s:s,i+":"+s}},methods:{switchPlayMethod:function(){this.playmMethodIndex++,this.playmMethodIndex>=3&&(this.playmMethodIndex=0)},jumpVoice:function(t){this.$refs.voiceBall.style.top=t.changedTouches[0].pageY-385+"px";var i=1-(t.changedTouches[0].pageY-385)/100;i>=1&&(i=1),this.$refs.musicplayer.volume=i;var s=this;t.target.addEventListener("touchmove",(function(t){var i=t.changedTouches[0].pageY-385;i>=100?i=94:i<=0&&(i=-6),s.$refs.voiceBall.style.top=i+"px",s.$refs.musicplayer.volume=1-i/100}))},getPayerList:function(){for(var t=this,i=this.$root.playingMusic.playList,s="/song/detail?ids=",e=0;e<i.length;e++)s+=i[e]+",";s=s.slice(0,s.length-1),this.$axios.get(s).then((function(i){var s=i.data.songs;t.newMusicList=[];for(var e=0;e<s.length;e++){var a=s[e].name,n=s[e].id;t.newMusicList.push({name:a,id:n,song:{artists:[{name:s[e].ar[0].name}],privilege:{maxbr:i.data.privileges[e].maxbr}},num:e+1})}}))},prev:function(){this.$root.playingMusic.playCount--,this.$root.playingMusic.playCount<0&&(this.$root.playingMusic.playCount=this.$root.playingMusic.playList.length-1),this.$root.playingMusic.musicID=this.$root.playingMusic.playList[this.$root.playingMusic.playCount]},next:function(){this.$root.playingMusic.playCount++,this.$root.playingMusic.playCount>this.$root.playingMusic.playList.length-1&&(this.$root.playingMusic.playCount=1),this.$root.playingMusic.musicID=this.$root.playingMusic.playList[this.$root.playingMusic.playCount]},randomMusic:function(){this.$root.playingMusic.playCount=Math.floor(Math.random()*this.$root.playingMusic.playList.length),this.$root.playingMusic.musicID=this.$root.playingMusic.playList[this.$root.playingMusic.playCount]},jumpProgress:function(t){var i=this,s=this.$refs.progressBar,e=s.offsetLeft,a=s.offsetWidth,n=(t.touches[0].clientX-e)/a,r=n*this.durationTime;this.$refs.musicplayer.currentTime=r,t.target.addEventListener("touchmove",(function(t){var s=(t.touches[0].clientX-e)/a,n=s*i.durationTime;i.$refs.musicplayer.currentTime=n}))},togglePlay:function(){this.$root.playingMusic.musicID&&(this.$root.playingMusic.isPlay?(this.$root.playingMusic.isPlay=!this.$root.playingMusic.isPlay,this.$refs.musicplayer.pause()):(this.$root.playingMusic.isPlay=!this.$root.playingMusic.isPlay,this.$refs.musicplayer.play()))},showFull:function(){this.$root.playingMusic.isFullLrc=!0},timeupdate:function(t){var i=t.target,s=i.currentTime,e=i.duration;this.currentTime=s,this.durationTime=e,this.drawCircle(s,e),this.updateProgress(s,e);for(var a=0;a<this.lyr.length;a++){if(a>=this.lyr.length-1){this.currentIndex=a;break}if(this.lyr[a].time<=s&&s<this.lyr[a+1].time){this.currentIndex=a;break}}this.currentTime==this.durationTime&&(0==this.playmMethodIndex?this.next():1==this.playmMethodIndex?(i.currentTime=0,i.play()):2==this.playmMethodIndex&&this.randomMusic())},updateProgress:function(t,i){var s=t/i*100;this.$refs.progressBarLine.style.width=s+"%",this.$refs.progressBall.style.left=s+"%"},drawCircle:function(t,i){var s=this.$refs.canvas,e=s.getContext("2d");e.beginPath(),e.strokeStyle="skyblue",e.arc(25,25,20,0,2*Math.PI),e.stroke(),e.closePath(),e.beginPath(),e.strokeStyle="pink",e.arc(25,25,20,0,2*Math.PI*(t/i)),e.stroke(),e.closePath()}},watch:{musicID:function(t){var i=this;return this.getPayerList(),this.$root.playingMusic.isPlay=!0,this.$axios.get("/song/detail?ids="+t).then((function(t){i.song=t.data.songs[0]})),this.$axios.get("/lyric?id="+t).then((function(t){var s=t.data;s.lrc||(s={lrc:{lyric:"[00:00.000] 无歌词\n"}});var e=s.lrc.lyric.split(/\n/);e=e.slice(0,e.length-1);var a=/\[(\d+):(\d+\.\d+)\](.+)/;i.lyr=e.map((function(t){return a.test(t),{time:parseFloat(60*RegExp.$1)+parseFloat(RegExp.$2),lyric:RegExp.$3}}))})),t}}},x=M,$=(s("6dea"),Object(d["a"])(x,m,y,!1,null,"5d026a37",null)),C=$.exports,b={components:{TopNav:v,Play:C}},L=b,P=(s("7c55"),Object(d["a"])(L,c,l,!1,null,null,null)),k=P.exports,_=s("8c4f");e["a"].use(_["a"]);var I=[{path:"/",name:"Recommend",component:function(){return s.e("chunk-29a3faeb").then(s.bind(null,"4802"))},meta:{showNav:!0}},{path:"/hot",name:"Hot",component:function(){return s.e("chunk-58187763").then(s.bind(null,"0b70"))},meta:{showNav:!0}},{path:"/search",name:"Search",component:function(){return s.e("chunk-37dfcec7").then(s.bind(null,"2d3b"))},meta:{showNav:!0}},{path:"/songlist/:songListId",name:"SongList",props:!0,component:function(){return s.e("chunk-2a2475f4").then(s.bind(null,"4c86"))},meta:{showNav:!1}}],z=new _["a"]({mode:"hash",routes:I}),B=z;e["a"].config.productionTip=!1;var T={musicID:0,playingList:[],isPlay:!1,playHistoryList:[],isFullLrc:!1,playList:[],playCount:0};new e["a"]({router:B,data:{playingMusic:T},render:function(t){return t(k)}}).$mount("#app")},"5e80":function(t,i,s){"use strict";s("a5d8")},"6dea":function(t,i,s){"use strict";s("6df2")},"6df2":function(t,i,s){},"7c55":function(t,i,s){"use strict";s("2395")},"8d48":function(t,i,s){},a5d8:function(t,i,s){},bc1e:function(t,i,s){},ffa5:function(t,i,s){"use strict";s("bc1e")}});
//# sourceMappingURL=app.24bec308.js.map