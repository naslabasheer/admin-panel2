import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })



  signupUser: any[] = []
  signupObj: any = {
    userName: '',
    email: '',
    password: ''
  };
  loginObj: any = {
    userName: '',
    email: '',
    password: ''
  };

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    const localData = localStorage.getItem('signupUser')
    if (localData != null) {
      this.signupUser = JSON.parse(localData)
    }
    if(this.auth.isLoggedIn()){
      this.router.navigate(['admin'])
    }
  }
  onSignUp() {
    this.signupUser.push(this.signupObj)
    localStorage.setItem('signUpUser', JSON.stringify(this.signupUser))
    this.signupObj = {
      userName: '',
      email: '',
      password: ''
    };
  }
  onLogin() {

    const isUserExist = this.signupUser.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password)
    if (isUserExist != undefined) {
      alert('user login successfully')
    } else {
      alert('Wrong Credential')
    }
  }
  onSubmit() {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
(result)=>{
this.router.navigate(['admin']);
console.log('hello')
},
      (err: Error)=>{
        alert(err.message)
      }
      )
    }
  }

}