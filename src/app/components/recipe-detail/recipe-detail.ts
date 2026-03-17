import { Component, input, signal, computed, effect } from '@angular/core';
import { RecipeModel } from '../../models';


@Component({
    standalone: true,
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.html',
    styleUrl: './recipe-detail.css'
})
export class RecipeDetail {
    recipe = input.required<RecipeModel>();
    protected servedAmount = signal<number>(1);

    protected addServedAmount(amount: '+' | '-') {
        this.servedAmount.update(prev => amount === '+' ? prev + 1 : prev - 1);
    }

    protected readonly adjustedIngredients = computed(() => {
        // Access the current signals inside the function
        const currentRecipe = this.recipe();
        const servings = this.servedAmount();

        // Return the new list by mapping over the ingredients
        return currentRecipe.ingredients.map(ingredient => ({
            ...ingredient,
            quantity: ingredient.quantity * servings
        }));
    });
     constructor() {
    console.log("App is running!");
  }

}

