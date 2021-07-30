import Vue from 'vue'
import App from './App.vue'
// import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import vuetify from './plugins/vuetify'
import Element from 'element-ui'

Vue.config.productionTip = false
Vue.use(Element)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
