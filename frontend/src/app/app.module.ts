import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCheckboxModule} from '@angular/material/checkbox';
import { OrderPlacedComponent } from './order-placed/order-placed.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderComponent,
    IngredientComponent,
    ShoppingCartComponent,
    NavigationComponent,
    FooterComponent,
    OrderPlacedComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
