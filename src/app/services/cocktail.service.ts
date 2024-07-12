import { Injectable } from '@angular/core';
import { Cocktail } from '../models/cocktail';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  private apiUrl = '/cocktails';

  constructor(private http: HttpClient) {}

  getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>(this.apiUrl);
  }

  getCocktailById(id: string): Observable<Cocktail> {
    return this.http.get<Cocktail>(`${this.apiUrl}/${id}`);
  }
}
