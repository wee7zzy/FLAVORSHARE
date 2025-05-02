import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RecipeListComponent } from './features/recipe-list/recipe-list.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'recipes', component: RecipeListComponent },
  { path: '**', redirectTo: '' }
];
