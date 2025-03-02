import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticasRoutingModule } from './practicas-routing.module';
import { BasesComponent } from './pages/bases/bases.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { CsharpComponent } from './pages/csharp/csharp.component';




@NgModule({
  declarations: [
    BasesComponent,
    CsharpComponent,

  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    PracticasRoutingModule,
  ]
})
export class PracticasModule { }
