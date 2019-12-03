import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

//componentes
import { HomeComponent } from './components/home/home.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CellListComponent } from './components/cell-list/cell-list.component';
import { SaveComponent } from './components/save/save.component';
import { AppComponent } from './app.component';
//user
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
//servicios
import { ApiService } from './service/api.service';
import { UserService } from './service/user.service';
//modulos
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';//enrutador


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,    
    JumbotronComponent,
    RegisterComponent,
    NavBarComponent,
    CellListComponent,
    SaveComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule    
  ],
  providers: [ApiService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
