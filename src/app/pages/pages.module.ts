import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreeDimensionalCssModule } from './three-dimensional-css/three-dimensional-css.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ThreeDimensionalCssModule,
  ],
  exports: [
    ThreeDimensionalCssModule
  ]
})
export class PagesModule { }
