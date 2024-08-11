import { NgIf } from '@angular/common';
import { Component,  } from '@angular/core';
import { Form, FormsModule,  } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,NgIf ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  handleLogin(loginForm:any){
    console.log(loginForm);
    console.log(loginForm.value);
    
  }
}
