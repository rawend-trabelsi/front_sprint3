import { Component } from '@angular/core';
import { SmartphoneService } from '../services/smartphone.service';
import { ActivatedRoute ,Router} from '@angular/router'; 

import { Smartphone } from '../model/smartphone.model'; 
import { Typesmartphone } from '../model/type.model';
@Component({
  selector: 'app-update-smartphone',
  templateUrl: './update-smartphone.component.html',
  styles: ``
})
export class UpdateSmartphoneComponent {
  currentSmartphone = new Smartphone();
  types! :Typesmartphone[];
  updatedTypId! :number;
  constructor(private activatedRoute: ActivatedRoute, 
    private router :Router,
    private smartphoneService: SmartphoneService) { } 

ngOnInit() { 
  this.smartphoneService.listeTypes(). 
  subscribe(typs => {this.types = typs._embedded.types; 
                     console.log(typs); 
 }); 
this.smartphoneService.consulterSmartphone(this.activatedRoute.snapshot.params['id']). 
subscribe( smar =>{ this.currentSmartphone = smar;
  this.updatedTypId = 
  this.currentSmartphone.type.idType;
 } ) ;    
} 
updateSmartphonet()
{
  this.currentSmartphone.type = this.types. 
find(cat => cat.idType == this.updatedTypId)!; 
  this.smartphoneService.updateSmartphone(this.currentSmartphone).subscribe(smar => { 
    this.router.navigate(['smartphones']); }  
    ); 

   }} 
