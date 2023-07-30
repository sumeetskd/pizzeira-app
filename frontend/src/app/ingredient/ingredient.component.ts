import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
  checked=false;

  cost:number = 0;
  ingredient_data: any = [];
  buildIngredientId:any=[];
  
  constructor(private ingredientService: IngredientService) {
    this.ingredientService.getIngredientData().subscribe((data) => {
      this.ingredient_data = data;
    }, (err) => {
      console.log('Error!!')
      console.log(err);
    }, () => {
      console.log('Details Retrieved');
    });
  }

  findCost(item:MatCheckboxChange){
    let item_id=item.source.id;
    let find_item = this.ingredient_data.find((product:any)=>product.id==item_id);
    if(item.checked){
    
      console.log(find_item.price);
      this.cost += <number>find_item.price;
      this.buildIngredientId.push(find_item);
    
    }else{
      
      this.cost -= <number>find_item.price;
      //find item to remove using splice
      let index = this.buildIngredientId.findIndex((item:any)=>item.id==find_item.id);
      this.buildIngredientId.splice(index,1);
      
    }
    console.log(this.buildIngredientId);
  }

  checkPresence(item:any){
    let k = this.buildIngredientId.findIndex((data:any)=>data.id==item.value);

    if(k!=-1){
      return true;
    }
    return false;
  }

  onChange(ob:MatCheckboxChange){
    // console.log('Checked',ob.checked);
    // console.log('Name',ob.name);
    // console.log(ob.source.id);
  }
  onclickSubmit(item:any){
    // console.log(item.value);
  }
  ngOnInit(): void {
    this.buildIngredientId = this.ingredientService.getCartIngredient();

    for(let i of this.buildIngredientId){
      this.cost+=i.price;
    }
  }
  ngOnDestroy(){
    this.ingredientService.setCartIngredient(this.buildIngredientId);
    console.log('ngDestroy:IngredientComponent')
  }

}
