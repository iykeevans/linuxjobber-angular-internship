import { Component, OnInit } from '@angular/core';
import { ScrumdataService } from '../scrumdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  scrumUserLoginData = {}

  constructor(
    private _scrumdataservice: ScrumdataService,
    private _router: Router
    ) {}

  ngOnInit() {
  }

  emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  onLoginSubmit() {
    this._scrumdataservice.login(this.scrumUserLoginData).subscribe(
      data => {
        console.log('SUCCESS', data);
        localStorage.setItem('token', data.token);
        this._router.navigate(['/scrumboard']);
      },
      error => console.log('ERROR', error)
    )
  }
}
