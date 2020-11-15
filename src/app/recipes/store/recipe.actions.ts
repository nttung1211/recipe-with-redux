import { Action } from '@ngrx/store';
import { Recipe } from '../recipe.model';


export const SET_RECIPES = "[repipe]SET_RECIPES";
export const UPDATE_RECIPE = "[repipe]UPDATE_RECIPE";

export class SetRecipes implements Action {
  readonly type = SET_RECIPES;

  constructor(public payload: {recipes: Recipe[]}) {}
}

export class UpdateRecipe implements Action {
  readonly type = UPDATE_RECIPE;

  constructor(public payload: {recipe: Recipe}) {}
}

export type RecipeActions = SetRecipes
  | UpdateRecipe
;