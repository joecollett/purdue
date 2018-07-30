import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { AdminLog } from '../../models/adminLogin';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private api: ApiService) { }

  data: any;
  form: AdminLog;

  ngOnInit() {
    this.api.getConfig().subscribe(
      response => {
        this.data = response;
        this.form = new AdminLog('', '', this.data.uid, this.data.url);
      }
    );
  }

  login() {
    this.api.isLoggedIn(this.form).subscribe(
      response => console.log(response),
      err => console.log(err)
    );
  }
  
}
