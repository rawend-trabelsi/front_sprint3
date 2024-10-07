import { Component } from '@angular/core';
import { Typesmartphone } from '../model/type.model';
import { Smartphone } from '../model/smartphone.model';
import { SmartphoneService } from '../services/smartphone.service';

@Component({
  selector: 'app-recherche-par-type',
  templateUrl: './recherche-par-type.component.html',
  styles: ``
})
export class RechercheParTypeComponent {
IdType! :number;
types!:Typesmartphone[];
smartphones! :Smartphone[];
onChange(){
  this.smartphoneService.rechercherParType(this.IdType). 
  subscribe(smars =>{this.smartphones=smars}); 
}
constructor(private smartphoneService: SmartphoneService){

}
ngOnInit(): void { 
  this.smartphoneService.listeTypes(). 
  subscribe(typs => {this.types = typs._embedded.types; 
    console.log(typs); 
}); 
}

}
