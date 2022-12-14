import { createApp } from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router'
 import router from './router/router.js';

 // import Swiper styles
 import 'swiper/css';

createApp(App).use(router).mount('#app')
