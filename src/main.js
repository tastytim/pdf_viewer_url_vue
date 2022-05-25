import { createApp } from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
let pdf = document.querySelector('script[name="pdf"]').innerHTML.split('=').slice(1).join('=').slice(1,-1) ;
const app = createApp(App);
app.provide('pdfurl', pdf)
app.mount('#app')
