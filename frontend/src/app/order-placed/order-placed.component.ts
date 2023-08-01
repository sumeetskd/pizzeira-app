import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.css']
})
export class OrderPlacedComponent implements OnInit {

  time:number = 0;
  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
    this.time = this.cartService.getTime();
  }

  ngOnDestroy(){
    console.log('ngDestroy.order-placed-componenet');
    window.location.reload();
  }
}
