import { Component, OnInit } from '@angular/core';
import { RecipeList } from  './components/recipe-list/recipe-list'

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [RecipeList],
})
export class AppComponent {

}
