import { AuthenticateGuard } from './guards/authenticate.guard';
import { SaveComponent } from './components/save/save.component';
import { CellListComponent } from './components/cell-list/cell-list.component';
import { LoginComponent } from './components/user/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/user/register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'cell-list', component: CellListComponent , canActivate:[AuthenticateGuard] },
  {path: 'save', component: SaveComponent,canActivate:[AuthenticateGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
