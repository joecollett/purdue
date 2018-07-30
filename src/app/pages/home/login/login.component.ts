import { Component, OnInit, Input } from '@angular/core';
import { AdminLog } from '../../../models/adminLogin';
import { ApiService } from '../../../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: AdminLog;
  @Input('data') data;
  constructor(private api: ApiService) { }
  ngOnInit() {
    this.form = new AdminLog('', '', this.data.uid, this.data.url);
  }

  login() {
    this.api.isLoggedIn(this.form).subscribe(
      response => console.log(response),
      err => console.log(err)
    );
  }

}
