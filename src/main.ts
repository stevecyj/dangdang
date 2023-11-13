import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { ImgUtil } from './utils/imgUtil'

// console.log('env', import.meta.env)
// console.log('env app title', import.meta.env.VITE_APP_TITLE)
// console.log('env user', import.meta.env.VITE_USER);
ImgUtil.loadAllImg()

createApp(App).mount('#app')
