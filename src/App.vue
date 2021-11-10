<template>
  <div id="app">
    <init-tab/>
    <my-form/>
  </div>
</template>

<script>
import MyForm from './components/myForm.vue'
import InitTab from './components/initTab.vue'
export default {
  name: 'App',
  components: {
    InitTab,
    MyForm
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
