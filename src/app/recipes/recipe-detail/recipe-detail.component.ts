import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from 'src/app/shopping-list/store/shopping-list.actions';
import { AppState } from 'src/app/store/app.reducer';
import { map, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  
  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(
        (params: Params) => {
          this.id = +params['id'];
          return this.store.select('recipes');
        }
      ),
      map(
        recipeState => recipeState.recipes.find(recipe => recipe.id == this.id)
      )
    ).subscribe(
      recipe => {
        this.recipe = recipe;
      }
    );
  }
  
  onSendToSL() {
    this.store.dispatch(new ShoppingListActions.AddIngredients(this.recipe.ingredients));
  }

  onDelete() {
    this.recipeService.delete(this.recipe.id);
    this.router.navigate(['/recipes']);
  }

}