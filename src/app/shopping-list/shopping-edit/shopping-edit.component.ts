import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('form') form: NgForm;
  @ViewChild('nameEle') nameEle: ElementRef;
  edittedIngredient: Ingredient;
  editMode: boolean;

  private stateSubscription: Subscription;

  constructor(
    private store: Store<AppState>
    ) { }

  ngOnInit(): void {
    this.stateSubscription = this.store.select('shoppingList').subscribe(
      stateData => {
        if (stateData.editedIngredientIndex > -1) {
          this.editMode = true;
          this.edittedIngredient = stateData.editedIngredient;
          this.form.form.patchValue({
            'name': this.edittedIngredient.name,
            'amount': this.edittedIngredient.amount
          });
        } else {
          this.editMode = false;
        }
      }
    );
  }

  onSubmit() {
    let newIngredient = new Ingredient(this.form.value.name, this.form.value.amount)
    if (this.form.invalid) return;
    if (this.editMode) {
      this.store.dispatch(new ShoppingListActions.UpdateIngredient(newIngredient));
    } else {
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
    }

    this.resetFields();
  }

  onDelete() {
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
    this.resetFields();
  }

  onClear() {
    this.resetFields();
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }
  
  resetFields() {
    this.form.resetForm({
      'amount': 1
    });
      
    this.nameEle.nativeElement.focus();
  }

  ngOnDestroy() {
    this.stateSubscription.unsubscribe();
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }
}
