import { cellInterface } from './../../interface/cell-interface';
import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent {

  constructor(private apiService: ApiService, private router: Router) { }
  
  onSave(cellForm: NgForm):void{
    
    if(cellForm.value.cellId == null){
      this.apiService.newCellphone(cellForm.value)
      .subscribe(cell => location.reload());
    }else{
      this.apiService.updateCellphone(cellForm.value)
      .subscribe(cell => location.reload());     
    }
  }

}
