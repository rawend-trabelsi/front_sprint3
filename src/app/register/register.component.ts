import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit {

public user = new User();

confirmPassword?:string;

myForm!: FormGroup;

err!:any;
loading : boolean = false;

constructor(private formBuilder: FormBuilder,  private authService : AuthService, 
  private router:Router, private toastr: ToastrService) { }

ngOnInit(): void {
  this.myForm = this.formBuilder.group({

  username : ['', [Validators.required]],
  email : ['', [Validators.required, Validators.email]],
  password : ['', [Validators.required, Validators.minLength(6)]],
  confirmPassword : ['', [Validators.required]]
  } );

}

onRegister() {
  // Assurez-vous que `this.user` contient les bonnes valeurs avant de l'envoyer
  this.user.username = this.myForm.value.username;
  this.user.email = this.myForm.value.email;
  this.user.password = this.myForm.value.password;
 

  this.loading = true;
  this.authService.registerUser(this.user).subscribe({
    next: (res) => {
      this.authService.setRegistredUser(this.user);
      this.loading = false;
      this.toastr.success('Veillez confirmer votre email', 'Confirmation');
      this.router.navigate(['/verifEmail']);
    },
    error: (err: any) => {
      if (err.error.errorCode === 'USER_EMAIL_ALREADY_EXISTS') {
        this.err = 'Email already used';
      }
    }
  });
}


}