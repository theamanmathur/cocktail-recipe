import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Cocktail } from '../../models/cocktail';
import { CocktailService } from '../../services/cocktail.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/material.module';
import { FavouriteService } from '../../services/favourites.service';

@Component({
  selector: 'app-cocktail-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, MaterialModule],
  templateUrl: './cocktail-detail.component.html',
  styleUrl: './cocktail-detail.component.scss',
})
export class CocktailDetailComponent {
  cocktail!: Cocktail;
  @Input() cocktailId: string; //cocktailId is being set here by Router itself

  constructor(
    private route: ActivatedRoute,
    private cocktailService: CocktailService,
    private favouriteService: FavouriteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //not using the following commented code since route params are automatically bound by the Router as we are passing the withComponentInputBinding() config in the provideRouter method arguments.
    // this.route.paramMap.subscribe((paramMap) => {
    //   const id = paramMap.get('id');
    if (this.cocktailId) {
      this.cocktailService
        .getCocktailById(this.cocktailId)
        .subscribe((data: Cocktail) => {
          this.cocktail = data;
        });
    }
    // });
  }

  isCocktailFavourite(cocktailId: string) {
    return this.favouriteService.isFavourite(cocktailId);
  }

  toggleFavouriteCocktail(cocktailId: string) {
    return this.favouriteService.toggleFavourite(cocktailId);
  }

  goBack(): void {
    this.router.navigate(['/cocktails']);
  }
}
