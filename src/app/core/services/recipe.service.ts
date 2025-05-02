import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface Recipe {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  strSource: string;
  // Tu peux ajouter aussi strIngredient1 à strIngredient20 si tu veux tout mapper
}

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  // Recherche de recettes par nom
  searchRecipes(query: string): Observable<Recipe[]> {
    return this.http
      .get<{ meals: Recipe[] }>(`${this.apiUrl}/search.php?s=${query}`)
      .pipe(map(response => response.meals || []));
  }

  // Obtenir les détails d'une recette par ID
  getRecipeById(id: string): Observable<Recipe | undefined> {
    return this.http
      .get<{ meals: Recipe[] }>(`${this.apiUrl}/lookup.php?i=${id}`)
      .pipe(map(res => res.meals?.[0]));
  }
}

