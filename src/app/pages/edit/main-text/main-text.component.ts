import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/api.service';
import { Title } from '../../../models/title';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as _ from 'lodash';
import { ConfirmationModalComponent } from '../../../shared/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-main-text',
  templateUrl: './main-text.component.html',
  styleUrls: ['./main-text.component.scss']
})
export class MainTextComponent implements OnInit {

  constructor(private apiService: ApiService, public dialog: MatDialog) {}
  dialogRef: MatDialogRef<ConfirmationModalComponent>;
  main:any;
  edit:Title;

  openDialog(data, type, text): void {
    
    this.dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '500px',
      data: {text: text}
    });

    this.dialogRef.afterClosed().subscribe(result => {
      if(result){
        if(type == 'submit'){
          this.main.title = this.edit;
          this.apiService.updateTitle(this.main['title']).subscribe(
            response => console.log(response),
            err => console.log(err)
          );              
        }
        if(type == 'reset'){
          this.edit = new Title(this.main.title['heading'], this.main.title['details'], this.main.title['buttonText'], this.main.title['heading'], this.main.title['ID'], this.main.title['buttonStyle'])
        }
      }
      setTimeout(()=>{
        this.getData();
      },200);
    });
  }    
  
  ngOnInit() {
    this.getData();
  }

  onSubmit(index){
    this.openDialog(index, 'submit', 'Are you sure you wish to these changes?');
  }  

  reset(){
    this.openDialog(0, 'reset', 'Are you sure you wish to reset these changes?');
  }

  getData(){
    this.apiService.getConfig().subscribe(data => {
      this.main = data;
      this.edit = new Title(this.main.title['heading'], this.main.title['details'], this.main.title['buttonText'], this.main.title['heading'], this.main.title['ID'], this.main.title['buttonStyle'])
    });    
  }

}
