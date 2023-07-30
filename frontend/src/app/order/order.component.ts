import { Component, OnInit, Output, Input, OnDestroy, EventEmitter } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  pizza: any = [];
  type1 = 'nonveg';
  type2 = 'veg';

  //initial item list
  initialItems: any = [];
  //to store the id and value
  cartItems: any = [];
  @Output() public emitCartCount:EventEmitter<number> = new EventEmitter<number>();
  countCartItems: number = this.cartItems.length;
  public onCartCountChange(){
    this.emitCartCount.emit(this.cartItems.length);
  }

  constructor(private orderServe: OrderService) {

    this.orderServe.getOrderData().subscribe((data) => {
      this.pizza = data;
      let jsonData = { id: this.pizza.id, value: false };
      this.initialItems.push(jsonData);
    })


  }
  addToCartClick(item: any) {
    let check_presence = this.cartItems.findIndex((data: any) => data.id == item.value);
    console.log('Inside:addToCartClick()', check_presence);
    if (check_presence != -1) {
      this.cartItems.splice(check_presence, 1);
      console.log(this.cartItems);
    } else {
      let findData = this.pizza.find((data: any) => data.id == item.value);
      this.cartItems.push(findData);
      console.log(this.cartItems);
    }
    // this.onCartCountChange();
    this.emitCartCount.emit(this.cartItems.length);
    
  }

  checkPresence(item: any): boolean {
    let check_presence = this.cartItems.findIndex((data: any) => data.id == item.value);

    if (check_presence != -1) {
      return true;
    }
    return false;
  }
  ngOnInit(): void {
    this.cartItems = this.orderServe.getOrderCartItems();
    console.log("ngOnInit:OrderComponent, No. of Items: ", this.cartItems.length);
    this.countCartItems = this.cartItems.length;
    for (let item of this.cartItems) {
      for (let i of this.initialItems) {
        if (i.id == item.value) {
          i.value = true;
        }
      }
    }
    // this.onCartCountChange();
    this.emitCartCount.emit(this.cartItems.length);
  }

  ngOnDestroy() {
    this.orderServe.setCartData(this.cartItems);
    console.log('ngDestroy:OrderComponent')
    // this.onCartCountChange();
    this.emitCartCount.emit(this.cartItems.length);
    console.log(this.cartItems.length)

  }
}
