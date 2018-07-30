import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../../service/api.service'
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Input('title') title;
  constructor() { }

  ngOnInit() {
  }  
}
