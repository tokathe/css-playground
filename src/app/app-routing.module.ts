import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThreeDimensionalCssComponent } from './pages/three-dimensional-css/three-dimensional-css.component';
import { TypewriterComponent } from './pages/typewriter/typewriter.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '3dcss'
  },
  {
    path: '3dcss',
    component: ThreeDimensionalCssComponent
  },
  {
    path: 'typewriter',
    component: TypewriterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
