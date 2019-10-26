import { Component, OnInit } from '@angular/core';
import { Scrumuser } from '../scrumuser';
import { ScrumdataService } from '../scrumdata.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _scrumdataService: ScrumdataService) { }

  ngOnInit() {
  }

  userTypes = ['regular user', 'project owner'];

  scrumUserModel = new Scrumuser('', '', '', '', 'Bearded guys');
  emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  feedBk = ''
  
  onSubmit() {
    console.log(this.scrumUserModel);
    this._scrumdataService.signup(this.scrumUserModel).subscribe(
      data => {
        console.log('SUCCESS!', data);
        this.feedBk = 'Account created successfully';
      },
      error => {
        console.log('ERROR'!, error);
        this.feedBk = 'Signup failed';
      }
    )
  }
}
