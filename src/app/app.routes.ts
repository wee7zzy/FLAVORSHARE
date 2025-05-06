import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RecipeListComponent } from './features/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './features/recipe-detai/recipe-detai.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'recipes', component: RecipeListComponent },
    { path: 'recipes/:id', loadComponent: () => import('./features/recipe-detai/recipe-detai.component').then(m => m.RecipeDetailComponent) },
    { path: '**', redirectTo: '' }
];
