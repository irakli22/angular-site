import { Injectable } from '@angular/core';
import { MOCK_RECIPES } from './mock-recipes';
import { RecipeModel } from './models';

@Injectable({ providedIn: 'root' })
export class RecipeDataService {
      getRecipes(): RecipeModel[] {
            return MOCK_RECIPES;
      }
      getRecipeById(id: number): RecipeModel | undefined {
            return MOCK_RECIPES.find(recipe => recipe.id === id);
      }

}