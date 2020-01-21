import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent implements OnInit {

  constructor(private user: UserService) { }

  ngOnInit() {
  }

  urlForm = new FormGroup({
    url: new FormControl('')
  })

  submitForm(){
    this.user.urlShortner(this.urlForm.value)
    .subscribe(response => {
      console.log(response);
      
    })
  }
  

}
