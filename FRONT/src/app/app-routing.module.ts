import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './General/home/home.component';
import { LoginComponent } from './General/login/login.component';
import { NavbarComponent } from './General/navbar/navbar.component';
import { RegistroComponent } from './General/registro/registro.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {path: 'home', component: HomeComponent},
  {path: 'registro', component: RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
