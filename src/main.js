// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
Vue.config.productionTip = false
Vue.use(Firebase)
Vue.use(VueFire)

// let config = {
//   apiKey: 'AIzaSyBaUOGr9svStH1RUWXuIeccds3S7-HUwsQ',
//   authDomain: 'roulette-001.firebaseapp.com',
//   databaseURL: 'https://roulette-001.firebaseio.com',
//   projectId: 'roulette-001',
//   storageBucket: 'roulette-001.appspot.com',
//   messagingSenderId: '901892413519'
// }

// let app = Firebase.initializeApp(config)
// let db = app.database()
// let userRef = db.ref('user')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
