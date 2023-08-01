import { Component, OnInit, OnDestroy } from '@angular/core';

import { CartService } from '../cart.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  timeDelivery:number = 10;
  totalCost:number = 0;
  defaultValue: number = 1;
  countItems: number = 0;
  totalIngredientCost:number = 0;
  totalCartPrice:number = 0;
  
  checkCount: boolean = this.countItems == 0 ? true : false;
  orderCartItem: any = [];
  ingredientCartItem: any = [];

  countOrderItems: any = [];

  constructor(private cartService: CartService) {

  }
  getTotalCartPrice(){
    this.totalCartPrice = this.totalCost + this.totalIngredientCost;
  }

  getTotalCostIngredient(){
    let sum = 0;
    for(let i of this.ingredientCartItem){
      sum+=Number(i.price);
    }
    this.totalIngredientCost = sum;
    console.log('Total Ingredient Cost: ',this.totalIngredientCost);
  }

  getTotalCost(){
    let sum = 0;
    for(let i of this.countOrderItems){
      sum+=Number(i.totalPrice);
    }
    this.totalCost = sum;
  }

  valueMinus(itemId: any) {
    let findOrder = this.countOrderItems.find((data: any) => data.item.id == itemId.id);
    let findIndex = this.countOrderItems.findIndex((data: any) => data.item.id == itemId.id);
    console.log(findOrder);
    if (findOrder.quantity == 0) {
      return;
    }

    findOrder.quantity -= 1;

    let itemPrice = <number>findOrder.item.price;
    let currentTotalPrice = <number>findOrder.totalPrice;
    let priceMinus = currentTotalPrice - itemPrice;
    findOrder.totalPrice = priceMinus;
    console.log('FindOrder: ', findOrder);

    this.countOrderItems[findIndex] = findOrder;
    console.log(this.countOrderItems[findIndex]);
    this.getTotalCost();
    this.getTotalCostIngredient();
    this.getTotalCartPrice();
  }

  valueAdd(itemId: any) {
    console.log('valueAdd', itemId.id);

    let findOrder = this.countOrderItems.find((data: any) => data.item.id == itemId.id);
    let findIndex = this.countOrderItems.findIndex((data: any) => data.item.id == itemId.id);

    console.log('findIndex:', findIndex);

    console.log('findOrder:', findOrder);

    findOrder.quantity += 1;
    let itemPrice: number = Number(findOrder.item.price);
    let currentTotalPrice: number = Number(findOrder.totalPrice);

    let priceSum: number = itemPrice + currentTotalPrice;

    console.log('findOrder.price:', findOrder.item.price);
    console.log(Number(findOrder.item.price));

    findOrder.totalPrice = priceSum;
    console.log(itemPrice);
    console.log('itemPrice: ', itemPrice);
    console.log('currentTotalPrice: ', currentTotalPrice);

    console.log('TotalPrice: ', priceSum);

    this.countOrderItems[findIndex] = findOrder;
    console.log(this.countOrderItems[findIndex]);

    // console.log('OrderCart: ',this.countOrderItems);
    this.getTotalCost();
    this.getTotalCostIngredient();
    this.getTotalCartPrice();

  }

  deleteOrder(item:any) {
    console.log('Inside cart.component.deleteOrder(): ');
    console.log(item.value);
    let delItemId = item.value;
    let findIndexCart = this.countOrderItems.findIndex((data: any) => data.item.id == delItemId);
    let findIndexOrder = this.orderCartItem.findIndex((data: any) => data.id == delItemId);
    
    console.log(findIndexCart);
    this.countOrderItems.splice(findIndexCart,1);
    this.orderCartItem.splice(findIndexOrder,1);
    console.log('Removed Item:');
    console.log('Cart:CartOrderItems: ',this.countOrderItems);
    console.log('Cart:OrderItems: ',this.orderCartItem);

    this.getTotalCost();
    this.getTotalCostIngredient();
    this.getTotalCartPrice();
  }

  getBooleanCount(): boolean {
    if (this.countItems == 0) {
      return true;
    }
    else {
      return false;
    }
  }
  changeBoolean(){
    window.location.reload();
  }

  deleteIngredient(item:any) {
    console.log('Inside cart.component.deleteIngredient(): ');
    console.log(item.value);
    let delItemId = item.value;
    let findIndexIngredient = this.ingredientCartItem.findIndex((data: any) => data.id == delItemId);
    // let findIndexOrder = this.orderCartItem.findIndex((data: any) => data.id == delItemId);
    
    console.log(findIndexIngredient);
    this.ingredientCartItem.splice(findIndexIngredient,1);
    // this.orderCartItem.splice(findIndexOrder,1);
    console.log('Removed Item:');
    console.log('Cart:CartIngredientItems: ',this.ingredientCartItem);

    this.getTotalCost();
    this.getTotalCostIngredient();
    this.getTotalCartPrice();
  }

  ngOnInit(): void {
    console.log('ngOnInit:cartComponent');
    this.orderCartItem = this.cartService.getOrderCart();
    this.ingredientCartItem = this.cartService.getIngredientCart();
    this.countItems = this.cartService.getCountItem();

    let tempCountOrderItems = this.cartService.getcountOrderItems();
    console.log('Temp count Length:', tempCountOrderItems.length);
    console.log(tempCountOrderItems);
    console.log('cart order length: ', this.orderCartItem.length);

    for (let item of this.orderCartItem) {
      let itemPrice = Number(item.price);
      let quantity = 1;
      let totalPrice = itemPrice * quantity;
      if (tempCountOrderItems.length != 0) {
        for (let tempItem of tempCountOrderItems) {
          if (tempItem.item.id == item.id) {
            quantity = tempItem.quantity;
            totalPrice = tempItem.totalPrice;
            break;
          }
        }
      }
      let k = { item, 'quantity': quantity, 'totalPrice': totalPrice };
      this.countOrderItems.push(k);
      

      // this.totalCartPrice = this.totalCost+this.totalCartPrice;
    }

    // this.countOrderItems = 
    console.log('shopping-cart.component:countOrderItems:', this.countOrderItems)
    console.log('Number of CartItems: ', this.countItems);
    console.log(this.countOrderItems);
    this.getTotalCost();
    this.getTotalCostIngredient();
    this.getTotalCartPrice();
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy:cartComponent');
    console.log(this.orderCartItem);
    console.log(this.ingredientCartItem);
    console.log('To save the quantity and total price:');
    this.cartService.setcountOrderItems(this.countOrderItems);
    this.cartService.setIngredientCartItem(this.ingredientCartItem);
    let totalTime = this.timeDelivery*this.countItems;
    this.cartService.setTime(totalTime);
  }
}
