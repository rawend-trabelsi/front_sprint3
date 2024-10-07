import { Component } from '@angular/core';
import { Typesmartphone } from '../model/type.model';
import { SmartphoneService } from '../services/smartphone.service';

@Component({
  selector: 'app-listes-types',
  templateUrl: './listes-types.component.html',
  styles: ``
})
export class ListesTypesComponent {
  types! : Typesmartphone[]; 
  updatedType:Typesmartphone = {"idType":0,"nomType":""};
  ajout:boolean=true;
  constructor(private smartphoneService: SmartphoneService) { } 
  ngOnInit(): void { 
  this.chargerTypes();
  }
  
  typeUpdated(typ:Typesmartphone){
    console.log("type recuuu",typ)
    this.smartphoneService.ajouterCategorie(typ).
 subscribe( ()=> this.chargerTypes());

  }
  chargerTypes(){
    {   
     this.smartphoneService.listeTypes(). 
     subscribe(typs => {this.types = typs._embedded.types; 
     console.log(typs); 
     }); }
    

    }
  
    updateTyp(typ:Typesmartphone){
      this.updatedType= typ;
      this.ajout=false;
    
     }
  
  }
