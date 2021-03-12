<template>
  <div id="app">
    <!-- {{$root.playingMusic.musicID}} -->
    <!-- <Loading></Loading> -->
    <TopNav v-show="$route.meta.showNav"></TopNav>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <Play :musicID="$root.playingMusic.musicID" ></Play>
    <div class="space"></div>
  </div>
 
</template>

<script>
// import Loading from "./components/Loading"
import TopNav from "./components/TopNav"
import Play from "./components/Play"
export default {
  components: { TopNav ,Play},
  
}
</script>
<style lang="less">
html,body{
  width: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.space{
  width: 100%;
  height: 80px;
}

</style>
