import {  NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf,],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  // registerForm: FormGroup;
  // constructor(private fb: FormGroup) {
  //   this.registerForm = new FormGroup({
  //     name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //     email: new FormControl('', [Validators.required, Validators.pattern("^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$")]),
  //     username: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //     password: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //     confirmpassword: new FormControl('',[Validators.required]),
  
  //   });
  // }
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[\\w-.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
      // confirmpassword: new FormControl('', [Validators.required, Validators.pattern(`${this.password}`)]),
      confirmpassword: new FormControl('', [Validators.required, this.confirmPasswordValidator() ]),
      // https://blog.bitsrc.io/implementing-confirm-password-validation-in-angular-with-custom-validators-6acd01cb0288
  
    
    });
  }
  // confirmPasswordValidator: ValidatorFn = (
  //   control: AbstractControl
  // ): ValidationErrors | null => {
  //   const password = control.get('password')?.value;
  //   const confirmpassword = control.get('confirmpassword')?.value;
  //   return password === confirmpassword ? null : { passwordMismatch: true };
  // };
  confirmPasswordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (!this.registerForm) return null;
      const password = this.registerForm.get('password')?.value;
      const confirmPassword = control.value;
      return password === confirmPassword ? null : { 'passwordMismatch': true };
    };
  }

  get name(){
    return this.registerForm.get('name')
  }

  get email(){
    return this.registerForm.get('email')
  }

  get username(){
    return this.registerForm.get('username')
  }

  get password(){
    return this.registerForm.get('password')
  }

  get confirmpassword(){
    return this.registerForm.get('confirmpassword')
  }


  handleFormSubmit(){
    console.log(this.registerForm);
    console.log(this.registerForm.value);
    alert('registered');
  }
}
