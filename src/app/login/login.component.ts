import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { Router } from '@angular/router';
import { AuthService } from '../services/AuthService';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]  // Include CommonModule here
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router, private authService: AuthService) {}

  onSubmit(loginForm: NgForm) {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/cart']);
    } else {
      console.log('Invalid username or password');
    }
  }
}
