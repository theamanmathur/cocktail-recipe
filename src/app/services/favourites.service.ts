import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavouriteService {
  private favouriteCocktails: string[] = [];

  constructor() {
    this.loadFavourites();
  }

  private loadFavourites(): void {
    const storedFavourites = localStorage.getItem('favouriteCocktails');
    this.favouriteCocktails = storedFavourites
      ? JSON.parse(storedFavourites)
      : [];
  }

  isFavourite(cocktailId: string): boolean {
    return this.favouriteCocktails.includes(cocktailId);
  }

  toggleFavourite(cocktailId: string): void {
    if (this.isFavourite(cocktailId)) {
      this.favouriteCocktails = this.favouriteCocktails.filter(
        (id) => id !== cocktailId
      );
      // this.updateStarElement(cocktailId, false);
    } else {
      this.favouriteCocktails.push(cocktailId);
      // this.updateStarElement(cocktailId, true);
    }
    localStorage.setItem(
      'favouriteCocktails',
      JSON.stringify(this.favouriteCocktails)
    );
  }

  // private updateStarElement(cocktailId: string, isActive: boolean): void {
  //   const starElement = document.getElementById('star-' + cocktailId);
  //   if (starElement) {
  //     starElement.classList.toggle('active', isActive);
  //   }
  // }
}
