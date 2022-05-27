import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reactive_forms';
  reactiveForm:any
  constructor(){
    
  }

  ngOnInit(){
    this.reactiveForm = new FormGroup({
      'firstName': new FormControl("", [Validators.required, Validators.minLength(5)]),
      'lastName': new FormControl("", [Validators.required, Validators.maxLength(15)]),
      'email': new FormControl("", [Validators.required, Validators.email]),
      'phone': new FormControl("", [Validators.required, Validators.pattern('^[7-9][0-9]{9}$')]),
      'password': new FormControl("", [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]),
      'confirmPassword': new FormControl("", [Validators.required]),
      'address': new FormControl("", [Validators.required]),



    })
    
  }
  Submitform(){
      console.log(this.reactiveForm)
      console.log(this.reactiveForm.get('confirmPassword').value)
      console.log(this.reactiveForm.get('password').value)

  }

}
