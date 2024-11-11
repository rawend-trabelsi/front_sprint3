import { Image } from './../model/image.model';

import { AuthService } from './auth.service';
import { Injectable, Type } from '@angular/core';
import { Smartphone } from '../model/smartphone.model';
import { Typesmartphone } from '../model/type.model';
 
import { Observable } from 'rxjs'; 
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { apiURL, apiURLtyp } from '../config';
import { TypeWrapper } from '../model/typeWrapped.model';
import id from '@angular/common/locales/id';
const httpOptions = {  headers: new HttpHeaders( {'Content-Type': 'application/json'} ) 
}; 
@Injectable({
  providedIn: 'root'
})
export class SmartphoneService {
  
  smartphones: Smartphone[] = [];
  smartphone!:Smartphone;


 //types: Typesmartphone[]; // Assurez-vous que cela correspond au type correct

  constructor(private http :HttpClient, 
    private authService :AuthService) { 
   
  /*   this.types = [
      {idType : 1,nomType:"android"},
      
      {idType : 2,nomType:"aws"}
    ]; */
    console.log("creation du service ");
    /*this.smartphones = [ 
      {idSmartphone : 1,  nomSmartphone : "PC Asus", prixSmartphone : 3000.600, datecreation : new Date("01/14/2011"), couleur :"gris",type: {idType : 1,nomType:"android"}}, 
     {idSmartphone : 2,  nomSmartphone : "iphone12", prixSmartphone : 3000.600, datecreation : new Date("03/14/2019"), couleur : "pink",type: {idType : 2,nomType:"aws"}}, 
      {idSmartphone  : 3,  nomSmartphone :"Samsung A15", prixSmartphone : 900.123, datecreation : new Date("02/20/2024"),couleur:"red",type: {idType : 1,nomType:"android"}} 
            ];*/  
  }
  listeSmartphone(): Observable<Smartphone[]>{ 

      return this.http.get<Smartphone[]>(apiURL+"/all"); 
      }
    
  
  
 
  ajouterSmartphone( smar: Smartphone):Observable<Smartphone>{ 
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<Smartphone>(apiURL+"/addsmar", smar, {headers:httpHeaders});
  } 
  listeTypes():Observable<TypeWrapper>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return  this.http.get<TypeWrapper>(apiURLtyp,{headers:httpHeaders});
    }  
    supprimerSmartphone(id : number) { 
      const url = `${apiURL}/delsmar/${id}`;
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.delete(url, {headers:httpHeaders});
           } 
    
           consulterSmartphone(id: number): Observable<Smartphone> { 
            const url = `${apiURL}/getbyid/${id}`;
            let jwt = this.authService.getToken();
            jwt = "Bearer "+jwt;
            let httpHeaders = new HttpHeaders({"Authorization":jwt})
            return this.http.get<Smartphone>(url,{headers:httpHeaders});
            }
      trierSmartphones(){ 
        this.smartphones = this.smartphones.sort((n1,n2) => { 
          if (n1.idSmartphone! > n2.idSmartphone!) { 
              return 1; 
          } 
         if (n1.idSmartphone! < n2.idSmartphone!) { 
              return -1; 
          } 
        return 0; 
      }); }
      updateSmartphone(s:Smartphone) 
      { 
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt})
        return this.http.put<Smartphone>(apiURL+"/updatesmar", s, {headers:httpHeaders});
      }
     
     
  rechercherParType(idType: number): Observable<Smartphone[]> {
    const url = `${apiURL}/smartyp/${idType}`;
    return this.http.get<Smartphone[]>(url);
  } 
  rechercherParNom(nom: string):Observable< Smartphone[]> { 
    const url = `${apiURL}/smarsByName/${nom}`; 
    return this.http.get<Smartphone[]>(url); 
  
   

  }
  ajouterCategorie( typ: Typesmartphone):Observable<Typesmartphone>{
    return this.http.post<Typesmartphone>(apiURLtyp, typ, httpOptions);
    }
    uploadImage(file: File, filename: string): Observable<Image>{
      const imageFormData = new FormData();
      imageFormData.append('image', file, filename);
      const url = `${apiURL + '/image/upload'}`;
      return this.http.post<Image>(url, imageFormData);
      }
      loadImage(id: number): Observable<Image> {
      const url = `${apiURL + '/image/get/info'}/${id}`;
      return this.http.get<Image>(url);
      }
      uploadImageSmar(file: File, filename: string, idSmar:number): Observable<any>{
        const imageFormData = new FormData();
        imageFormData.append('image', file, filename);
        const url = `${apiURL + '/image/uploadImageSmar'}/${idSmar}`;
        return this.http.post(url, imageFormData);
     }
     supprimerImage(id : number) {
      const url = `${apiURL}/image/delete/${id}`;
      return this.http.delete(url, httpOptions);
      }
    uploadImageFS(file: File, filename: string, idSmar : number): Observable<any>{
      const imageFormData = new FormData();
      imageFormData.append('image', file, filename);
      const url = `${apiURL + '/image/uploadFS'}/${idSmar}`;
      return this.http.post(url, imageFormData);
      }
      
        
    }

