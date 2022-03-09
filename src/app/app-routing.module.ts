import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliotecaComponent } from './components/biblioteca/biblioteca.component';
import { ComunidadComponent } from './components/comunidad/comunidad.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path: '', redirectTo: '/tienda', pathMatch: 'full'},
  {path: 'tienda', component: TiendaComponent},
  {path: 'biblioteca', component: BibliotecaComponent},
  {path: 'comunidad', component: ComunidadComponent},
  {path: 'user', component: UserComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  TiendaComponent, BibliotecaComponent, ComunidadComponent, UserComponent, PageNotFoundComponent
]
