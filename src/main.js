import { createApp } from 'vue';
import App from './App'

/*Plugins*/
import Router from '@/router/router';
import {TroisJSVuePlugin} from 'troisjs';

const app = createApp(App);

app.use(Router);
app.use(TroisJSVuePlugin);

app.mount('#app');
