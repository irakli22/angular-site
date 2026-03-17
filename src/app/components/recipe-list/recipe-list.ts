import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MOCK_RECIPES } from '../../mock-recipes';
import { RecipeModel } from '../../models';
import { RecipeDetail } from '../recipe-detail/recipe-detail'

@Component({
  standalone: true,
  selector: 'app-recipe-list',
  imports: [RecipeDetail, FormsModule],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  protected readonly recipe = signal<RecipeModel>(MOCK_RECIPES[0]);
  protected readonly recipes = signal<RecipeModel[]>(MOCK_RECIPES);

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
