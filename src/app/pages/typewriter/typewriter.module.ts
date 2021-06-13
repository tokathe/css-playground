import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypewriterComponent } from './typewriter.component';



@NgModule({
  declarations: [
    TypewriterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TypewriterComponent
  ]
})
export class TypewriterModule { }
