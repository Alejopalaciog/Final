import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
//https://getbootstrap.com/docs/3.4/examples/theme/
//<button class="btn btn-primary" value="enviar" onClick="window.location = 'http://www.google.com.ar';">Boton primario</button>
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cellphone Shop';
  constructor(){

  }

}

