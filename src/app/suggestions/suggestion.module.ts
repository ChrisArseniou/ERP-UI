import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuggestionListComponent } from './suggestion-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SuggestionListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'suggestions', component: SuggestionListComponent },
    ]),
    SharedModule
  ]
})
export class SuggestionModule { }
