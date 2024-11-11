import { Component } from '@angular/core';
import { SmartphoneService } from '../services/smartphone.service';
import { ActivatedRoute ,Router} from '@angular/router'; 
import { Image } from '../model/image.model';
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
  myImage! : string;
  uploadedImage!: File;
isImageUpdated: Boolean=false;

  constructor(private activatedRoute: ActivatedRoute, 
    private router :Router,
    private smartphoneService: SmartphoneService) { } 

    ngOnInit(): void {
      this.smartphoneService.listeTypes().
      subscribe(typs => {this.types = typs._embedded.types;
      });
      this.smartphoneService.consulterSmartphone(this.activatedRoute.snapshot.params['id'])
      .subscribe( smar =>{ this.currentSmartphone = smar;
      this.updatedTypId = smar.type.idType;
      } ) ;
      }
      
      
      
    
    
    

/*updateSmartphonet()
{
  this.currentSmartphone.type = this.types. 
find(cat => cat.idType == this.updatedTypId)!; 
  this.smartphoneService.updateSmartphone(this.currentSmartphone).subscribe(smar => { 
    this.router.navigate(['smartphones']); }  
    ); 

   }*/
   /* updateSmartphonet() {
      // Vérifier si updatedTypId est défini
      if (!this.updatedTypId) {
        console.error('L\'ID du type sélectionné est invalide.');
        return;
      }
    
      // Vérifier que le type sélectionné existe dans la liste des types
      const selectedType = this.types.find(typ => typ.idType === this.updatedTypId);
      if (!selectedType) {
        console.error('Le type sélectionné n\'existe pas dans la liste des types');
        return;
      }
    
      // Mettre à jour le type du smartphone
      this.currentSmartphone.type = selectedType;
    
      // Vérifier si l'image a été modifiée
      if (this.isImageUpdated) {
        this.smartphoneService.uploadImage(this.uploadedImage, this.uploadedImage.name)
          .subscribe((img: Image) => {
            this.currentSmartphone.image = img;
            this.smartphoneService.updateSmartphone(this.currentSmartphone)
              .subscribe(() => {
                this.router.navigate(['smartphones']);
              }, (error) => {
                console.error('Erreur lors de la mise à jour du smartphone', error);
              });
          }, (error) => {
            console.error('Erreur lors du téléchargement de l\'image', error);
          });
      } else {
        this.smartphoneService.updateSmartphone(this.currentSmartphone)
          .subscribe(() => {
            this.router.navigate(['smartphones']);
          }, (error) => {
            console.error('Erreur lors de la mise à jour du smartphone', error);
          });
      }
    }*/
      updateSmartphonet() {
        this.currentSmartphone.type = this.types.find(typ => typ.idType ==
        this.updatedTypId)!;
        this.smartphoneService
        .updateSmartphone(this.currentSmartphone)
        .subscribe((smar) => {
        this.router.navigate(['smartphones']);
        });
        }
        
    

   onImageUpload(event: any) {
    if(event.target.files && event.target.files.length) {
    this.uploadedImage = event.target.files[0];
    this.isImageUpdated =true;
    const reader = new FileReader();
    reader.readAsDataURL(this.uploadedImage);
    reader.onload = () => { this.myImage = reader.result as string; };
    }
   }
   onAddImageSmartphone() {
      this.smartphoneService
      .uploadImageSmar(this.uploadedImage,
      this.uploadedImage.name,this.currentSmartphone.idSmartphone)
      .subscribe( (img : Image) => {
      this.currentSmartphone.images.push(img);
      });
      }
      supprimerImage(img: Image) {
        const conf = confirm("Etes-vous sûr ?");
        if (conf) {
          this.smartphoneService.supprimerImage(img.idImage).subscribe({
            next: () => {
              // Supprimer l'image du tableau `currentSmartphone.images` si la suppression réussit
              const index = this.currentSmartphone.images.indexOf(img, 0);
              if (index > -1) {
                this.currentSmartphone.images.splice(index, 1);
              }
            },
            error: (err) => {
              console.error("Erreur lors de la suppression de l'image :", err);
              alert(`Échec de la suppression de l'image. Erreur: ${err.message}`);
            }
            
          });
        }
      }
      
      }
      
  
