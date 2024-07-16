import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const cocktailDetailGuard: CanActivateFn = (route, state) => {
  const cocktailId = route.paramMap.get('cocktailId');
  // Check if cocktailId is a number
  return !isNaN(Number(cocktailId)) || inject(Router).navigate(['/cocktails']);
};
