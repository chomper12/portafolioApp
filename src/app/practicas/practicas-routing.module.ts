import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasesComponent } from './pages/bases/bases.component';
import { CsharpComponent } from './pages/csharp/csharp.component';

const routes: Routes = [
  {
    path:'',
    component:BasesComponent,
  }, 
  {
    path:'csharp',
    component:CsharpComponent,
  } ,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticasRoutingModule { }
