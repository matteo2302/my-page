/*import './assets/main.css'*/
/*importo bootstrap min css per usarlo*/
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import App from './App.vue'
/*metto un listener alle tende */
let CurtainLeft = document.getElementById("curtain-1");

CurtainLeft.addEventListener("click", function(){ alert("Hello World!"); });














createApp(App).mount('#app')
