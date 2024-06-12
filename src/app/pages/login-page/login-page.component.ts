import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  authService = inject(AuthService);
  router = inject(Router);

  form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  isPasswordVisible = signal<boolean>(false);

  onSubmit() {
    if (!this.form.valid) return;

    //@ts-ignore
    this.authService.login(this.form.value).subscribe(() => {
      console.log('AUTH');

      this.router.navigate(['/']);
    });
  }
}
