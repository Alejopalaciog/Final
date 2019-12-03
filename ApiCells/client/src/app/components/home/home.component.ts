import { Observable } from 'rxjs/internal/Observable';
import { cellInterface } from './../../interface/cell-interface';
import { ApiService } from '../../service/api.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private dataApi: ApiService) { }
  private cells: cellInterface;
  ngOnInit(){
    this.getListCells();
  }
  getListCells(){
    this.dataApi.getAllCells().subscribe((cells: cellInterface) => (this.cells = cells));
    //this.dataApi.getAllCells().subscribe((cells) => (console.log(cells)));
  }
  
}
