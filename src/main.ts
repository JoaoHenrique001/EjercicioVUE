//import './assets/main.css'
//
//import { createApp } from 'vue'
//import App from './App.vue'
//
//createApp(App).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.ts' // Importar el router que creamos

createApp(App)
  .use(router) // Usar el router en la aplicación
  .mount('#app') // Montar la aplicación
