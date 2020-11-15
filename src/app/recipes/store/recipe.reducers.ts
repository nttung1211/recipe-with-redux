import { Recipe } from '../recipe.model';
import * as RecipeActions from './recipe.actions';


export interface State {
  recipes: Recipe[]
}

export const initialState = {
  recipes: []
}

export function recipeReducer(state: State = initialState, action: RecipeActions.RecipeActions) {
  switch (action.type) {
    case RecipeActions.SET_RECIPES: 
      return {
        ...state,
        recipes: action.payload.recipes
      };

    case RecipeActions.UPDATE_RECIPE:
      const updatedRecipes = [...state.recipes];
      for (let i = 0; i < updatedRecipes.length; i++) {
        if (updatedRecipes[i].id === action.payload.recipe.id) {
          updatedRecipes[i] = action.payload.recipe;
        }
      }
      return {
        ...state,
        recipes: updatedRecipes
      };
    
    default:
      return {
        ...state
      };
  }
}