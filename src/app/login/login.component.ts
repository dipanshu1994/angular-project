import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { UserService } from '../services/user.service'
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private user: UserService) { }

  ngOnInit() {
  }

  userLoginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  submitForm() {
    this.user.login(this.userLoginForm.value)
      .subscribe(data => {
        console.log(data)
      })
  }
  getData() {
    this.user.getUserInfo()
      .subscribe(data => {
        console.log(data)
      })
  }

}
