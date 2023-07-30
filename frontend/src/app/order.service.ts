import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartService } from './cart.service';
import { ORDER_URL } from './shared/constants/url';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  cartOrder:any = [];
  countOrder:number = 0;
  URL = ORDER_URL;
  constructor(private httpClient:HttpClient, private cartService:CartService) {

  }

  getOrderData(){
    return this.httpClient.get(this.URL);
  }
  getCountOrder(){
    return this.cartOrder.length;
  }

  getOrderCartItems(){
    return (this.cartOrder);
  }
  setCartData(item:Array<any>){

    this.cartOrder = item;
    console.log(this.cartOrder);
    console.log('Inside Order.service.setCartData(), No of Items: ',this.cartOrder.length);
    this.cartService.setOrderCartItem(this.cartOrder);
  }

}
