import { Routes } from '@angular/router';
import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';
import { cocktailDetailGuard } from './guards/cocktail-detail.guard';

export const routes: Routes = [
  { path: 'cocktails', component: CocktailListComponent },
  {
    path: 'cocktails/:cocktailId',
    loadComponent: () =>
      import('./components/cocktail-detail/cocktail-detail.component').then(
        (m) => m.CocktailDetailComponent
      ),
    canActivate: [cocktailDetailGuard],
  },
  { path: '', redirectTo: '/cocktails', pathMatch: 'full' },
  { path: '**', redirectTo: '/cocktails' }, // Fallback route
];
