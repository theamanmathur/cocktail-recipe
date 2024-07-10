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
  imports: [CommonModule, RouterModule, MaterialModule]
})
export class CocktailItemComponent {
  @Input() cocktail!: Cocktail;

  constructor(private router: Router) {}

  showDetails() {
    this.router.navigate(['/cocktails', this.cocktail.id]);
  }
}