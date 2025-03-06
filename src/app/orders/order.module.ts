import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    OrderListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'orders', component: OrderListComponent },
    ]),
    SharedModule
  ]
})
export class OrderModule { }
