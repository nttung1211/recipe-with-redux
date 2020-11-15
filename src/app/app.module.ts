import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthEffects } from './auth/store/auth.effects';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [ 
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule, // this must only be imported once here, for other we import commonModule instead
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule, // this just provide services hence we only need to import here in the app module
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({logOnly: environment.production}),
    CoreModule,
    SharedModule,
    
    // AuthModule
    // RecipesModule, // when we load a module lazily we dont need to import the module here
    // ShoppingListModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

