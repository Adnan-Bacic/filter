import Vue from 'vue'
import App from './App.vue'

//slice a part of the text away
Vue.filter('snippet', val => {
  if(!val || typeof val != 'string'){
    return ''
  } else {
    val = val.slice(0,50)
    return val
}
})

//change the first letter in the title to a capital letter
Vue.filter('capitalize', val => {
  if(!val || typeof val != 'string'){
    return ''
  } else {
    val = val.toString()
    return val.charAt(0).toUpperCase() + val.slice(1)
}
})

new Vue({
  el: '#app',
  render: h => h(App)
})
