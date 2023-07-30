import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Pizzeria';
  public count:number = 0;
  public getCount:boolean = this.count!=0?true:false;
  public getCartCount(event:any){
    this.count = event;
    console.log('Count:',this.count);
  }
}
