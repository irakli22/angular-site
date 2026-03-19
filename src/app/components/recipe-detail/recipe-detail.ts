import { Component, input, signal, computed, inject } from '@angular/core';
import { RecipeModel } from '../../models';
import { RecipeDataService } from '../../recipeData.service';
import { ActivatedRoute, RouterLink } from '@angular/router';


@Component({
    standalone: true,
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.html',
    styleUrl: './recipe-detail.css',
    imports: [RouterLink]
})
export class RecipeDetail {
    // 3. Inject them here!
    private route = inject(ActivatedRoute);
    private recipeService = inject(RecipeDataService);

    // 4. Create a signal for the current recipe
    protected readonly recipe = signal<RecipeModel | undefined>(undefined);
    
    constructor() {
        // 5. When the component loads, get the ID from the URL
        const id = Number(this.route.snapshot.paramMap.get('id'));
        // 6. Use the service to find the recipe
        const foundRecipe = this.recipeService.getRecipeById(id);

        // 7. Update the signal
        this.recipe.set(foundRecipe);
        console.log(this.recipe())
    }
}



