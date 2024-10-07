import { Component } from '@angular/core';
import { Smartphone } from '../model/smartphone.model';
import { SmartphoneService } from '../services/smartphone.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-smartphones',
  templateUrl: './smartphones.component.html',
  styleUrl: './smartphones.component.css'
})
export class SmartphonesComponent {
 smartphones? : Smartphone[];
  constructor(private smartphoneService :SmartphoneService , public authService: AuthService) { 
//this.smartphones=[];

     } 
     ngOnInit(): void {
     this.chargerSmartphones();
    }
    chargerSmartphones(){
      this.smartphoneService.listeSmartphone().subscribe(smars => { 
        console.log(smars); 
        this.smartphones = smars; 
     // this.smartphones = this.smartphoneService.listeSmartphone();
    });
  }
  supprimerSmartphone(p: Smartphone) 
  { 
    let conf = confirm("Etes-vous sûr ?"); 
    if (conf) 
    this.smartphoneService.supprimerSmartphone(p.idSmartphone).subscribe(() => { 
      console.log("smartphone supprimé"); 
      this.chargerSmartphones(); 
         });
}}


