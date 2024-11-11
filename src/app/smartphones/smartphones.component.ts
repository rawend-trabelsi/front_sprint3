import { Component } from '@angular/core';
import { Smartphone } from '../model/smartphone.model';
import { SmartphoneService } from '../services/smartphone.service';
import { AuthService } from '../services/auth.service';
import { Image } from '../model/image.model';

@Component({
  selector: 'app-smartphones',
  templateUrl: './smartphones.component.html',
  styleUrls: ['./smartphones.component.css']
})
export class SmartphonesComponent {
  smartphones?: Smartphone[];
  apiurl:string='http://localhost:8083/smartphones/api'; 

  constructor(private smartphoneService: SmartphoneService, public authService: AuthService) { }

  ngOnInit(): void {
    this.chargerSmartphones();
  }

  supprimerSmartphone(p: Smartphone) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.smartphoneService.supprimerSmartphone(p.idSmartphone).subscribe(() => {
        console.log("smartphone supprimé");
        this.chargerSmartphones();
      });
    }
  }

  chargerSmartphones(){ 
    this.smartphoneService.listeSmartphone().subscribe(smars => { 
    this.smartphones = smars; 
    }); 
    } 
}  
