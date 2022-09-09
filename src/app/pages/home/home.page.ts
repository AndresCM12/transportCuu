import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loginForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private router: Router) {}
  onSubmit() {
    this.router.navigate(['/landing']);
  }
}
