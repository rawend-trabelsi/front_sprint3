import { Component } from '@angular/core';
import { Smartphone } from '../model/smartphone.model';
import { SmartphoneService } from '../services/smartphone.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: ``
})
export class RechercheParNomComponent {
  nomSmartphone!:string;
  smartphones!:Smartphone[];
  allSmartphones!: Smartphone[];
  searchTerm! :string;
  ngOnInit(): void { 
    this.smartphoneService.listeSmartphone().subscribe(smars => { 
      console.log(smars); 
      this.smartphones = smars; 
      }); 
  } 
  constructor(private smartphoneService :SmartphoneService){}
  rechercherSmars(){ 
    this.smartphoneService.rechercherParNom(this.nomSmartphone). 
    subscribe(smars => { 
    this.smartphones = smars;        
    console.log(smars)}); 
    } 
    onKeyUp(filterText : string){ 
      this.smartphones = this.allSmartphones.filter(item => 
   item.nomSmartphone.toLowerCase().includes(filterText));
}
}