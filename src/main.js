import './assets/main.css'
import { apiServices } from './services/ApiServices'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.provide('ApiServices', apiServices)
app.use(createPinia())
app.use(router)

app.mount('#app')


// apiServices.test.get()
//     .then(r => console.log(r.data))
