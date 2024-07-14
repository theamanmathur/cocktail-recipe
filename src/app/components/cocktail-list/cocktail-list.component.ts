import { Component } from '@angular/core';
import { Cocktail } from '../../models/cocktail';
import { CocktailService } from '../../services/cocktail.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CocktailItemComponent } from '../cocktail-item/cocktail-item.component';
import { MaterialModule } from '../../shared/material.module';
import { CocktailSearchComponent } from '../cocktail-search/cocktail-search.component';
import { CocktailFilterPipe } from '../../pipes/cocktail-filter.pipe';
import { Subscription } from 'rxjs';

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
    CocktailFilterPipe,
  ],
})
export class CocktailListComponent {
  cocktails: Cocktail[] = [];
  searchTerm: string = '';
  private cocktailDataSubscription!: Subscription;

  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.cocktailDataSubscription = this.cocktailService
      .getCocktails()
      .subscribe((data: Cocktail[]) => {
        this.cocktails = data;
      });
  }

  ngOnDestroy(): void {
    if (this.cocktailDataSubscription) {
      this.cocktailDataSubscription.unsubscribe();
    }
  }

  onSearchTermChange(searchTerm: string): void {
    this.searchTerm = searchTerm;
  }

  trackByCocktailId(index: number, item: Cocktail): string {
    return item.id;
  }
}
