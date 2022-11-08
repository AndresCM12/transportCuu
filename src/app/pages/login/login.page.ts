import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  loginForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private router: Router) {}
  onSubmit() {
    this.router.navigate(['/landing']);
  }
}
