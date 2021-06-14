import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeonButtonComponent } from './neon-button.component';



@NgModule({
  declarations: [
    NeonButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NeonButtonComponent
  ]
})
export class NeonButtonModule { }
