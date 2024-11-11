import { Component } from '@angular/core';
import { Smartphone } from '../model/smartphone.model';
import { SmartphoneService } from '../services/smartphone.service';
import { Typesmartphone } from '../model/type.model';
import { Router } from '@angular/router';
import { Image } from '../model/image.model';
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
  uploadedImage!: File;
imagePath: any;
constructor(private smartphoneService : SmartphoneService,
  private router : Router)
{

}  ngOnInit(): void {
  this.smartphoneService.listeTypes().subscribe((typs) => {
    this.types = typs._embedded?.types || typs;  // Adapte en fonction de la structure réelle
    console.log(this.types);
  });



}

/*addSmartphone(){
  this.newSmartphone.type = this.types.find(typ => typ.idType == this.newIdTyp)!; 
  this.smartphoneService.ajouterSmartphone(this.newSmartphone)
                    .subscribe(smar => {
                    console.log(smar);
                    this.router.navigate(['smartphones']);
                    }); 
  }*/
                    
  onImageUpload(event: any) {
    this.uploadedImage = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.uploadedImage);
    reader.onload = (_event) => { this.imagePath = reader.result; }
    }
    addSmartphone(){
      this.newSmartphone.type = this.types.find(typ => typ.idType
      == this.newIdTyp)!;
      this.smartphoneService
      .ajouterSmartphone(this.newSmartphone)
      .subscribe((smar) => {
      this.smartphoneService
      .uploadImageFS(this.uploadedImage,
      this.uploadedImage.name,smar.idSmartphone)
      .subscribe((response: any) => {}
      );
      this.router.navigate(['smartphones']);
      });
      }
      

}
