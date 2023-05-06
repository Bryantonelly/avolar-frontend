import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPositionDirective } from './my-position-directive.directive';
import { MyPositionDirectiveTop } from './my-position-directive-top.directive';



@NgModule({
  declarations: [
    MyPositionDirective,
    MyPositionDirectiveTop
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MyPositionDirective,
    MyPositionDirectiveTop
  ]
})
export class DirectivesModule { }
