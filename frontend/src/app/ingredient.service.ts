import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartService } from './cart.service';
import { INGREDIENT_URL } from './shared/constants/url';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  cartIngredient:any = [];
  URL = INGREDIENT_URL;
  constructor(private httpClient:HttpClient, private cartService:CartService ) {

  }

  getIngredientData(){
    return this.httpClient.get(this.URL);
  }
  setCartIngredient(item:any){
    this.cartIngredient = item;
    console.log('Inside IngredientService.setCartIngredient(), No. of Items:',this.cartIngredient.length);
    this.cartService.setIngredientCartItem(this.cartIngredient);

  }
  getCartIngredient(){
    return this.cartIngredient;
  }
}
