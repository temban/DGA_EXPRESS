import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue } from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import EventBus from './EventBus'
import VueSweetalert2 from 'vue-sweetalert2';



// Custom Css
import "@/assets/scss/main.scss"
import 'sweetalert2/dist/sweetalert2.min.css';
import Flutterwave from 'vue-flutterwave'
import CustomGoogleAutocomplete from 'vue-custom-google-autocomplete'
import VuePlaceAutocomplete from 'vue-place-autocomplete';
import VueMeta from 'vue-meta'
import VueSSE from 'vue-sse';

// using defaults
Vue.use(VueSSE);

// OR specify custom defaults (described below)
Vue.use(VueSSE, {
  format: 'json',
  polyfill: true,
  url: '/my-events-server',
  withCredentials: true,
});
Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})
Vue.use(VuePlaceAutocomplete);
Vue.use(CustomGoogleAutocomplete)
Vue.use(Flutterwave, { publicKey: 'FLWPUBK_TEST-a0a00e37f20612d7f45cee01bede0579-X' })


Vue.use(VueSweetalert2);
Vue.use(BootstrapVue)
Vue.use(Vuelidate)

Vue.config.productionTip = false


Vue.prototype.$bus = EventBus

  
// Filter
// Capitilazes the first chars in words
Vue.filter("capitalize", (val) => {
  if(!val) {
    return "";
  }
  return val.toString().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
})

// Capitilazes the first chars in words
Vue.filter("prefix", (val) => {
  if(!val) {
    return "";
  }
  return `Mr. ${val}`;
})

// Parse date into local string
Vue.filter("parseDate", (val) => {
  if(!val) {
    return "";
  }
  return val.toLocaleString("en-US", { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' });
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
