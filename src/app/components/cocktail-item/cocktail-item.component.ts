import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Cocktail } from '../../models/cocktail';
import { MaterialModule } from '../../shared/material.module';

@Component({
  selector: 'app-cocktail-item',
  standalone: true,
  templateUrl: './cocktail-item.component.html',
  styleUrl: './cocktail-item.component.scss',
  imports: [CommonModule, RouterModule, MaterialModule],
})
export class CocktailItemComponent {
  @Input() cocktail!: Cocktail;
  storedFavourites?: string[];

  constructor(private router: Router) {}

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
