import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RecipeService } from '../../core/service/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './recipe-detai.component.html',
  styleUrls: ['./recipe-detai.component.css'] // Optionnel si tu veux styliser plus
})
export class RecipeDetailComponent implements OnInit {
  recipe: any;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.recipeService.getRecipeById(id).subscribe((res: any) => {
        this.recipe = res['meals']?.[0];
      });
    }
  }
}
