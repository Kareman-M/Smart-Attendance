import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Encrypt } from 'src/app/Security/encrypt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private formBuilder: FormBuilder) { }
  loginForm!: FormGroup;
  private encrypt = new Encrypt()

  ngOnInit() {
    this.declareFormIntiites();
  }

  login() {
    console.log(this.loginForm.get('username')?.value)
    console.log(this.loginForm.get('password')?.value)
    console.log(this.encrypt.encryptedPassword(this.loginForm.get('password')?.value))
  }

  declareFormIntiites() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }
}
