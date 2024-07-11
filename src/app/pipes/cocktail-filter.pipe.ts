import { Pipe, PipeTransform } from '@angular/core';
import { Cocktail } from '../models/cocktail';

@Pipe({
  name: 'cocktailFilter',
  standalone: true,
})
export class CocktailFilterPipe implements PipeTransform {
  transform(cocktails: Cocktail[], searchTerm: string): Cocktail[] {
    if (!cocktails || !searchTerm) {
      return cocktails;
    }
    return cocktails.filter((cocktail) =>
      cocktail.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
