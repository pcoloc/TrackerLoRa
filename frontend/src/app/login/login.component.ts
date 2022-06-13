import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { AuthService } from './../shared/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  signinForm: UntypedFormGroup;
  constructor(
    public fb: UntypedFormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.signinForm = this.fb.group({
      user_name: [''],
      password: [''],
    });
  }
  ngOnInit() {}
  loginUser() {
    this.authService.signIn(this.signinForm.value);
  }
}
