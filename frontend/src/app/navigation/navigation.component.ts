import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() public count:number = 0;
  getCount:boolean = this.count!=0?true:false;

  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
    console.log('Inside the NavComponenet.ngOnInit')
    this.count = this.orderService.getCountOrder();
  }
  ngOnChanges(){
    // console.log('Count: '+this.count);s
  }

}
