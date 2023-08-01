import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { OrderPlacedComponent } from './order-placed/order-placed.component';
import { OrderComponent } from './order/order.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'order',component:OrderComponent},
  {path:'buildpizza',component:IngredientComponent},
  {path:'cart',component:ShoppingCartComponent},
  {path:'order-placed',component:OrderPlacedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
