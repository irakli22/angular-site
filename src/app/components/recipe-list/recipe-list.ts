import { Component, signal, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RecipeDataService } from '../../recipeData.service';
import { RecipeModel } from '../../models';
import { RecipeDetail } from '../recipe-detail/recipe-detail'

@Component({
  standalone: true,
  selector: 'app-recipe-list',
  imports: [RecipeDetail, FormsModule, RouterLink],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  protected readonly recipe = signal(inject(RecipeDataService).getRecipes()[0]);
  protected readonly recipes = signal(inject(RecipeDataService).getRecipes());

  protected search = signal("");

  protected readonly filteredRecipes = computed(() => {
    const term = this.search().toLowerCase();

    if(term === ''){
      return this.recipes();
    }
    return this.recipes().filter(recipe =>
      recipe.name.toLowerCase().includes(term)
    );
  });
  protected setRecipe(recipe: RecipeModel) {
          this.recipe.set(recipe);
        }

}
