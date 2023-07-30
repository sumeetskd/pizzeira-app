import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  totalIngredientCost:number = 0;
  countItems:number = 0;

  orderCartItem:any = [];
  ingredientCartItem:any = [];

  countOrderItems: any = [];
  
  constructor() {

  }
  time:number = 0;

  getTime(){
    return this.time;
  }
  setTime(time:number){
    this.time = time;
  }
  getTotalCostIngredient(){
    let sum = 0;
    for(let i of this.ingredientCartItem){
      sum+=Number(i.totalPrice);
    }
    this.totalIngredientCost = sum;
  }
  
  getOrderCart(){
    return this.orderCartItem;  
  }

  getIngredientCart(){
    return this.ingredientCartItem;
  }

  getCountItem(){
    let lengthOrder = this.orderCartItem.length;
    // let lengthIngredient = this.ingredientCartItem.length;
    this.countItems = lengthOrder;
    console.log('Inside: cart.service.getCountItem(): ',this.countItems);
    return this.countItems;
  }

  setOrderCartItem(item:Array<any>){
    this.orderCartItem = item;
    console.log('Inside cart.service.setOrderCartItem(), No of Items: ',this.orderCartItem.length);
    for (let item of this.orderCartItem) {
      // let price = item.price*;
      let k = { item, 'quantity': 1, 'totalPrice': item.price };
      this.countOrderItems.push(k);
    }
    console.log('Inside cart.service.setOrderCartItem():CountOrderItems, ',this.countOrderItems);

  }
  setIngredientCartItem(item:Array<any>){
    this.ingredientCartItem = item;
    console.log('Inside cart.service.setIngredientCartItem(), No of Items: ',this.ingredientCartItem.length);

  }

  setcountOrderItems(item:Array<any>){
    this.countOrderItems = item;
    console.log('Inside cart.service.setcountOrderItems:',this.countOrderItems);

  }
  getcountOrderItems(){
    return this.countOrderItems;
  }
}
