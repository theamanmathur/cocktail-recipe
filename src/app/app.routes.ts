import { provideRouter, Routes } from '@angular/router';
import { CocktailDetailComponent } from './components/cocktail-detail/cocktail-detail.component';
import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';

export const routes: Routes = [
  { path: 'cocktails', component: CocktailListComponent },
  {
    path: 'cocktails/:id',
    loadComponent: () =>
      import('./components/cocktail-detail/cocktail-detail.component').then(
        (m) => m.CocktailDetailComponent
      ),
  },
  { path: '', redirectTo: '/cocktails', pathMatch: 'full' },
  { path: '**', redirectTo: '/cocktails' }, // Fallback route
];
