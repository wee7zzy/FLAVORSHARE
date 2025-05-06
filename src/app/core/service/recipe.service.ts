import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface Recipe {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strMealThumb: string;
  strInstructions: string;
  strTags?: string;
  strArea?: string;
  [key: string]: any;
}


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private baseUrl = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<{ meals: Recipe[] }>(`${this.baseUrl}/search.php?s=`)
      .pipe(map(res => res.meals));
  }

  getRecipeById(id: string): Observable<Recipe> {
    return this.http.get<{ meals: Recipe[] }>(`${this.baseUrl}/lookup.php?i=${id}`)
      .pipe(map(res => res.meals[0]));
  }

  getRecipesByCategory(category: string): Observable<Recipe[]> {
    return this.http.get<{ meals: Recipe[] }>(`${this.baseUrl}/filter.php?c=${category}`)
      .pipe(map(res => res.meals));
  }
}
