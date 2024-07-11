import { Component } from '@angular/core';
import { Cocktail } from '../../models/cocktail';
import { CocktailService } from '../../services/cocktail.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CocktailItemComponent } from '../cocktail-item/cocktail-item.component';
import { MaterialModule } from '../../shared/material.module';
import { CocktailSearchComponent } from '../cocktail-search/cocktail-search.component';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss',
  imports: [
    CommonModule,
    FormsModule,
    CocktailItemComponent,
    MaterialModule,
    CocktailSearchComponent,
  ],
})
export class CocktailListComponent {
  cocktails: Cocktail[] = [];
  filteredCocktails: Cocktail[] = [];
  searchTerm: string = '';

  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.cocktailService.getCocktails().subscribe((data: Cocktail[]) => {
      this.cocktails = data;
      this.filteredCocktails = data;
      // console.log("cocktails: "+this.cocktails);
    });
  }

  onSearchTermChange(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.filterCocktails();
  }

  filterCocktails(): void {
    this.filteredCocktails = this.cocktails.filter((cocktail) =>
      cocktail.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  trackById(index: number, item: any): string {
    return item.id;
  }
}
