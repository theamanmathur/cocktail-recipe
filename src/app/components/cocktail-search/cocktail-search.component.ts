import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material.module';

@Component({
  selector: 'cocktail-search',
  standalone: true,
  imports: [CommonModule, FormsModule, MaterialModule],
  templateUrl: './cocktail-search.component.html',
  styleUrl: './cocktail-search.component.scss',
})
export class CocktailSearchComponent {
  @Output() searchTermChange = new EventEmitter<string>();
  searchTerm: string = '';

  onSearchTermChange(): void {
    this.searchTermChange.emit(this.searchTerm);
  }
}
