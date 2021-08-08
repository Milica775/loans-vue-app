import Vue from 'vue'
import App from './App.vue'
import babelPolyfill from 'babel-polyfill';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import '@kouts/vue-modal/dist/vue-modal.css';
import VueModal from '@kouts/vue-modal';

Vue.component('Modal', VueModal);


// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router/router'
import 'bootstrap/dist/css/bootstrap.min.css'

import {store} from './vuex/store';
import {auth} from './firebase';


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

//new Vue({
//  el: '#app',
//  router,
//  render: h => h(App)
// })

Vue.config.productionTip = false;

let app
auth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }

  if (user) {
    store.state.authorized = true;
    store.dispatch('fetchUserProfile', user)
  }
})
