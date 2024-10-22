import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculoService } from './services/vehiculo.service';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';

const routes: Routes = [
  {path: 'vehicles', component: VehiculoComponent},
  {path : 'people' , component : PeopleListComponent},
  {path : '' , redirectTo : '/vehicles', pathMatch : 'full'},
  {path : '**' , component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
