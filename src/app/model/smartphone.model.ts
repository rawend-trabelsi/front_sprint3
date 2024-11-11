import { Typesmartphone} from '../model/type.model';
import { Image} from './image.model';

export class Smartphone {
  [x: string]: any; 
  idSmartphone! : number; 
    nomSmartphone! : string; 
    prixSmartphone! : number; 
    datecreation! : Date ; 
    couleur!: string ;
    type! : Typesmartphone;
    image! : Image;
    imageStr!:string;
    images!: Image[];


    } 