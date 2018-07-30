import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/api.service';
import { Cat } from '../../../models/cat';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as _ from 'lodash';
import { ConfirmationModalComponent } from '../../../shared/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-edit-categories',
  templateUrl: './edit-categories.component.html',
  styleUrls: ['./edit-categories.component.scss']
})
export class EditCategoriesComponent implements OnInit {
  model: Array<Cat>;
  add: Cat;
  categories;
  toggle: boolean = false;


  constructor(private apiService: ApiService, public dialog: MatDialog) { }
  dialogRef: MatDialogRef<ConfirmationModalComponent>;

  openDialog(data, type, text): void {
    this.dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '500px',
      data: { text: text }
    });
    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        switch (type) {
          case 'add':
            this.toggle = !this.toggle;
            this.apiService.addCategory(data).subscribe(
              response => {
                this.add = new Cat('', '', '', '', null);
              },
              err => console.log(err)
            );
            break;
          case 'edit':
            let cat = this.model[data];
            this.categories.categories[data] = cat;
            this.apiService.updateCategory(this.model[data]).subscribe(
              response => console.log(response),
              err => console.log(err)
            );
            break;
          case 'remove':
            this.apiService.deleteCategory(data).subscribe(
              response => console.log(response),
              err => console.log(err)
            );
            break;
          case 'reset':
            this.model[data] = this.categories.categories[data];
            break
          default:
            this.toggle = !this.toggle;
        }
      }
      setTimeout(() => {
        this.getData()
      }, 200);

    });
  }
  ngOnInit() {
    this.getData()
  }
  onSubmit(index) {
    this.openDialog(index, 'edit', 'Are you sure you wish to edit this category?');
  }
  remove(index) {
    this.openDialog(index, 'remove', 'Are you sure you wish to remove this category?');
  }
  addCat() {
    this.openDialog(this.add, 'add', 'Are you sure you wish to add this category?');
  }
  toggleAddView() {
    this.toggle = !this.toggle;
  }
  cancel(i) {
    this.openDialog(i, 'cancel', 'Are you sure you wish to cancel adding this category? Once confirmed these details will be lost.');
  }
  reset(i) {
    this.openDialog(i, 'reset', 'Are you sure you want to reset your changes?');
  }

  getData() {
    this.add = new Cat('', '', '', '', null);
    this.apiService.getConfig().subscribe(data => {
      this.categories = data;
      let model = [];
      _.forEach(this.categories.categories, function (value, index) {
        let row = new Cat(value.name, value.desc, value.img, value.color, value.ID);
        model.push(row);
      });
      this.model = model;
    });
  }
}
