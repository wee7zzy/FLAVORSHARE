import { Component, OnInit } from '@angular/core';
import { Recipe, RecipeService } from '../../core/services/recipe.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    // On cherche "chicken" par défaut pour tester
    this.recipeService.searchRecipes('beef').subscribe(data => {
      this.recipes = data;
    });
  }
}
