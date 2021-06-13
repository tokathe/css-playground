import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreeDimensionalCssModule } from './three-dimensional-css/three-dimensional-css.module';
import { TypewriterModule } from './typewriter/typewriter.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ThreeDimensionalCssModule,
    TypewriterModule
  ],
  exports: [
    ThreeDimensionalCssModule,
    TypewriterModule
  ]
})
export class PagesModule { }
