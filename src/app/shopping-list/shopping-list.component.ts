import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as shoppingListActions from './store/shopping-list.actions';
import { AppState } from '../store/app.reducer';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ingredients: Ingredient[]}>;

  constructor(
    private store: Store<AppState>
    ) { }

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList');
  }

  onEditIngredient(index: number) {
    this.store.dispatch(new shoppingListActions.StartEdit(index));
  }

  ngOnDestroy() {
  }
}
