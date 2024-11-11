import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent implements OnInit {
  user = new User(); 
  err: number = 0; 
  message:string ="login ou mot de passe erronés..";
  ngOnInit(): void {
  
  }
  constructor(private authService : AuthService,
    private router: Router) { }
    onLoggedin()
{
this.authService.login(this.user).subscribe({
next: (data) => {
let jwToken = data.headers.get('Authorization')!;
this.authService.saveToken(jwToken);
this.router.navigate(['/']);
},
error: (err: any) => {
  console.log(err);  // Vérifie ici ce que contient err.error
  this.err = 1;
  if (err.error && err.error.errorCause === "disabled") {
    this.message = "Utilisateur désactivé, Veuillez contacter votre Administrateur";
  }
}

});
}
    }
