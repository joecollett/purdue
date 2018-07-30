import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: {};
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getConfig().subscribe(data => {
      this.data = data;
    });
  }

}
