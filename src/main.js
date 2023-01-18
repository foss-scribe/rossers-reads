import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from 'primevue/config';


import "./assets/main.css";
import "primeflex/primeflex.css";
import 'primevue/resources/primevue.min.css'                 
import 'primeicons/primeicons.css'   
              

import Button from 'primevue/button';
import Rating from 'primevue/rating';
import ProgressBar from 'primevue/progressbar';

const app = createApp(App);

app.use(router);
app.use(PrimeVue);

app.component('Button', Button);
app.component('Rating', Rating);
app.component('ProgressBar', ProgressBar);

app.mount("#app");
