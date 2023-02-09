<template>
  <div id="app">
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{

    }
  },
  created(){
    console.log('app created');
  },
  beforeMount(){
    console.log('app beforeMount')
  },
  mounted(){
    console.log('app mounted')
  }
}
</script>

<style>
html,body{
  height: 100%;
  margin:0;
  overflow: auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: inherit;
}
</style>
