import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CustomerListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'customers', component: CustomerListComponent },
    ]),
    SharedModule
  ]
})
export class CustomerModule { }
