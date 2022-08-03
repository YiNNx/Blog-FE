import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import VueTypedJs from 'vue-typed-js/src/components/VueTypedJs.vue'

createApp(App).use(router,VueTypedJs).mount('#app')
