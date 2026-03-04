import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/home/about/about';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: About,
        pathMatch: 'full'
    }
];
