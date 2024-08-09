import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando o CSS do Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importando ícones do Bootstrap
import './styles/global.css'; // Importando os estilos globais personalizados

const app = createApp(App);

app.use(router);
app.mount('#app');
