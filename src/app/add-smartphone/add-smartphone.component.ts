import { Component } from '@angular/core';
import { Smartphone } from '../model/smartphone.model';
import { SmartphoneService } from '../services/smartphone.service';
import { Typesmartphone } from '../model/type.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-smartphone',
  templateUrl: './add-smartphone.component.html',
  styleUrls: ['./add-smartphone.component.css'] // Corrigé ici
})
export class AddSmartphoneComponent {
  newSmartphone = new Smartphone();
  message: string = '';
  types! :Typesmartphone[];
  newIdTyp!:number;
  newtype! :Typesmartphone;
constructor(private smartphoneService : SmartphoneService,
  private router : Router)
{

}  ngOnInit():void{
  this.smartphoneService.listeTypes(). 
   subscribe(typs => {this.types = typs._embedded.types; 
                      console.log(typs); 
  }); 

}

addSmartphone(){
  this.newSmartphone.type = this.types.find(typ => typ.idType == this.newIdTyp)!; 
  this.smartphoneService.ajouterSmartphone(this.newSmartphone)
                    .subscribe(smar => {
                    console.log(smar);
                    this.router.navigate(['smartphones']);
                    }); 
  }

}
