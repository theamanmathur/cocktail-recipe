import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavouritesService {
  constructor() {}

  isFavourite(cocktailId: string): boolean {
    const storedFavourites = localStorage.getItem('favouriteCocktails');
    if (storedFavourites) {
      const favouriteCocktails: string[] = JSON.parse(storedFavourites);
      return favouriteCocktails.includes(cocktailId);
    }
    return false;
  }

  toggleFavourite(cocktailId: string): void {
    let favouriteCocktails: string[] = [];

    const storedFavourites = localStorage.getItem('favouriteCocktails');
    if (storedFavourites) {
      favouriteCocktails = JSON.parse(storedFavourites);
    }

    const starElement = document.getElementById('star-' + cocktailId);
    if (this.isFavourite(cocktailId)) {
      favouriteCocktails = favouriteCocktails.filter((id) => id !== cocktailId);
      if (starElement) {
        starElement.classList.remove('active');
      }
    } else {
      favouriteCocktails.push(cocktailId);
      if (starElement) {
        starElement.classList.add('active');
      }
    }
    localStorage.setItem(
      'favouriteCocktails',
      JSON.stringify(favouriteCocktails)
    );
  }
}
