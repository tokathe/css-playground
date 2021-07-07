import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NeonButtonComponent } from './pages/neon-button/neon-button.component';
import { ThreeDimensionalCssComponent } from './pages/three-dimensional-css/three-dimensional-css.component';
import { TypewriterComponent } from './pages/typewriter/typewriter.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'animation',
    component: ThreeDimensionalCssComponent
  },
  {
    path: 'typewriter',
    component: TypewriterComponent
  },
  {
    path: 'neon',
    component: NeonButtonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
