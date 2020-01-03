import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAYv6U-oAY7nhOrjxu9qMPvV6z2SpqMCY8",
  authDomain: "learn-firebase-ee406.firebaseapp.com",
  databaseURL: "https://learn-firebase-ee406.firebaseio.com",
  projectId: "learn-firebase-ee406",
  storageBucket: "learn-firebase-ee406.appspot.com",
  messagingSenderId: "214166252242",
  appId: "1:214166252242:web:7636f140e0185ffcbb5b0b",
  measurementId: "G-EY5KE6TL8F"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

var db = firebase.firestore();

window.db = db

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.use(firebase)