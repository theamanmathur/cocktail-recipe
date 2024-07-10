import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Cocktail } from '../../models/cocktail';
import { CocktailService } from '../../services/cocktail.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/material.module';

@Component({
  selector: 'app-cocktail-detail',
  standalone: true,
  imports: [CommonModule, RouterModule,MaterialModule],
  templateUrl: './cocktail-detail.component.html',
  styleUrl: './cocktail-detail.component.scss',
})
export class CocktailDetailComponent {
  cocktail: Cocktail | undefined;
  constructor(
    private route: ActivatedRoute,
    private cocktailService: CocktailService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cocktailService.getCocktailById(id).subscribe((data: Cocktail) => {
        this.cocktail = data;
      });
    }
  }

}
