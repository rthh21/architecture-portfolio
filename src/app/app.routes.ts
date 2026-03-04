import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './components/about/about';

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
