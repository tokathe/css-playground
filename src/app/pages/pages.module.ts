import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreeDimensionalCssModule } from './three-dimensional-css/three-dimensional-css.module';
import { TypewriterModule } from './typewriter/typewriter.module';
import { NeonButtonModule } from './neon-button/neon-button.module';

const MODULES = [
  ThreeDimensionalCssModule,
  TypewriterModule,
  NeonButtonModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports: [
    ...MODULES
  ]
})
export class PagesModule { }
