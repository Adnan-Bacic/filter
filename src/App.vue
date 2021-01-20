<template>
  <div id="app">
    <Blogs></Blogs>
  </div>
</template>

<script>
import Blogs from './Blogs'

export default {
  name: 'app',

  components:{
    Blogs: Blogs
  },

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
</style>