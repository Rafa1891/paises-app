import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PorPaisComponent } from '../paises/components/por-pais/por-pais.component';
import { PorRegionComponent } from '../paises/components/por-region/por-region.component';
import { PorCapitalComponent } from '../paises/components/por-capital/por-capital.component';
import { VerPaisComponent } from '../paises/components/ver-pais/ver-pais.component';

const routes:Routes=[
  {
    path:'',
    component:PorPaisComponent,
    pathMatch:'full'//home
  },
  {
    path:'region',
    component:PorRegionComponent,
  },
  {
    path:'capital',
    component:PorCapitalComponent,
  },
  {
    path:'pais/:id',
    component:VerPaisComponent,
  },
  {
    path:'*',
    redirectTo:'',//si entras en una ruta distinta te redirige
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
