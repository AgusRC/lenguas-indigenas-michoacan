import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  formRegister: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.formRegister = formBuilder.group({
      name : new FormControl('', Validators.compose([
        Validators.required
      ])),
      password : new FormControl('', Validators.compose([
          Validators.required
      ])),
      email : new FormControl('', Validators.compose([
          Validators.required
      ]))
    });
  }

  ngOnInit() {
  }

  registerUser(){
    const me = this;
    if(me.formRegister.valid){
      alert('form is valid');
    } else {
      alert('empty fields');
    }
  }

}
