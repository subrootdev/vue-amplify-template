import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/style.css'
import App from './App.vue'
import router from './router'
//import { Amplify } from 'aws-amplify'
//import awsconfig from './aws-exports';

// Configure Amplify
// Amplify.configure({
//   // Your AWS Amplify configuration here
// })

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.mount('#app')