<template>
  <div id="app">
      <h1>{{ msg }}</h1>
      <input type="text" v-model="query">
      <ul>
          <li v-for="(post, index) in computedObjectString" v-bind:key="index">
              <h3>{{ post.title | capitalize }} </h3>
              <p>{{ post.body | snippet }} </p>
          </li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Blogs',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      arrayPosts: [],
      query: null
    }
  },

  created(){
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
          console.log(response)
          this.arrayPosts = response.data
      })
  },
  computed:{
      computedObjectString(){
          return this.arrayPosts.filter(post => {
              if(post.title.length < 20){
                  return post
              }
              //return post.title.match(this.query)
          })
      }
  }
}
</script>

<style>
    ul{
        list-style-type: none;
    }
</style>