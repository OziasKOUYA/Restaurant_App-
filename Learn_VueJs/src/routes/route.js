import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Menu from '../components/Menu.vue';
import About from '../components/About.vue';
import Book from '../components/Book.vue';
import Ajout_Menu from '../components/Ajout_Menu.vue';

const routes = [

    {path: '/', component:Home},
    {path: '/menu', component:Menu},
    {path: '/about', component:About},
    {path: '/book', component:Book},
    {path: '/ajout',component:Ajout_Menu}


], router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;