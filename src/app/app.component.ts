import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  onLogout(){
    this.authService.logout();
  }
  title = 'MesSmartphones';

  constructor (public authService: AuthService, private router:Router) {}
  ngOnInit(): void {
    let isloggedin: string | null; 
    let loggedUser:string | null; 
    isloggedin = localStorage.getItem('isloggedIn'); 
    loggedUser = localStorage.getItem('loggedUser'); 
    if (isloggedin!="true" || !loggedUser) 
        this.router.navigate(['/login']); 
    else 
     this.authService.setLoggedUserFromLocalStorage(loggedUser); 
  }
}
