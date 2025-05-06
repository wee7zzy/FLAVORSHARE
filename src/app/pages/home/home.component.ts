import { Component, OnInit } from '@angular/core';
import { Recipe, RecipeService } from '../../core/service/recipe.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  trendingRecipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getAllRecipes().subscribe(recipes => {
      this.trendingRecipes = recipes.slice(0, 20); 
    });
  }
}
