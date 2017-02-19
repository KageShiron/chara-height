import Vue from 'vue'
import App from './App.vue'

  import VueMdl from 'vue-mdl'
  Vue.use(VueMdl);
new Vue({
  el: '#app',
  render: h => h(App)
})
