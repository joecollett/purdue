import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/api.service';
import { Story } from '../../../models/story';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as _ from 'lodash';
import { ConfirmationModalComponent } from '../../../shared/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-edit-stories',
  templateUrl: './edit-stories.component.html',
  styleUrls: ['./edit-stories.component.scss']
})
export class EditStoriesComponent implements OnInit {
  model: Array<Story>;
  add: Story;
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
          case "add":
            this.toggle = !this.toggle;
            this.apiService.addStory(data).subscribe(
              response => {
                this.add = new Story('', '', '', '', null);
              },
              err => console.log(err)
            );
            break;
          case "edit":
            this.apiService.updateStory(this.model[data]).subscribe(
              response => console.log(response),
              err => console.log(err)
            );
            break;
          case "reset":
            this.model[data] = this.categories.stories[data];
            break;
          case "remove":
            this.apiService.deleteStory(data).subscribe(
              response => console.log(response),
              err => console.log(err)
            );
            break;
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
    this.add = new Story('', '', '', '', null);
    this.getData();
  }

  onSubmit(index) {
    this.openDialog(index, 'edit', 'Are you sure you wish to edit this story?');
  }
  remove(index) {
    this.openDialog(index, 'remove', 'Are you sure you wish to remove this story?');
  }
  addCat() {
    this.openDialog(this.add, 'add', 'Are you sure you wish to remove this story?');
  }
  toggleAddView() {
    this.toggle = !this.toggle;
  }
  reset(i) {
    this.openDialog(i, 'reset', 'Are you sure you want to reset your changes?');
  }
  getData() {
    this.apiService.getConfig().subscribe(data => {
      this.categories = data;
      let model = [];
      _.forEach(this.categories.stories, function (value, index) {
        let row = new Story(value.title, value.Name, value.image, value.URL, value.ID);
        model.push(row);
      });
      this.model = model;
    });
  }

}
