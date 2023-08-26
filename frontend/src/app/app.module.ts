import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { OrderComponent } from './features/order/order.component';
import { IngredientComponent } from './features/ingredient/ingredient.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './features/navigation/navigation.component';
import { FooterComponent } from './features/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { OrderPlacedComponent } from './features/order-placed/order-placed.component';
import { LoginComponent } from './features/login/login.component';
import { MaterialModule } from './material/material.module';

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
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
