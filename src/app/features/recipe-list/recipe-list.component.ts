import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Recipe, RecipeService } from '../../core/service/recipe.service';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  allRecipes: Recipe[] = [];
  filteredRecipes: Recipe[] = [];
  searchTerm: string = '';
  selectedCategory: string = '';

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getAllRecipes().subscribe(recipes => {
      this.allRecipes = recipes;
      this.filteredRecipes = recipes;
    });
  }

  onSearch(): void {
    this.filteredRecipes = this.allRecipes.filter(recipe =>
      recipe.strMeal.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onFilterCategory(): void {
    if (!this.selectedCategory) {
      this.filteredRecipes = this.allRecipes;
    } else {
      this.filteredRecipes = this.allRecipes.filter(recipe =>
        recipe.strCategory?.toLowerCase() === this.selectedCategory.toLowerCase()
      );
    }
  }
}
