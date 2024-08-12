import { Component } from '@angular/core';
import { FormGroup, Validators,FormControl} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent{
  registerForm=new FormGroup({
      username:new FormControl('', [ Validators.required]),
      password:new FormControl('', [ Validators.required, Validators.minLength(3)]),
      email:new FormControl('', [ Validators.required, Validators.email])
    });
    constructor(private router: Router) {} 
  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      localStorage.setItem('user', JSON.stringify(this.registerForm.value));
      console.log(localStorage);
      this.router.navigate(['/login']);
    }
  }
}
