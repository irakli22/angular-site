import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'recipes',
    loadComponent: () => import('./components/recipe-list/recipe-list').then(m => m.RecipeList)
  },
  {
    path: 'recipes/:id',
    loadComponent: () => import('./components/recipe-detail/recipe-detail').then(m => m.RecipeDetail)
  }
];