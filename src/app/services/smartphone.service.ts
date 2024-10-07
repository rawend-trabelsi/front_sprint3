import { Injectable, Type } from '@angular/core';
import { Smartphone } from '../model/smartphone.model';
import { Typesmartphone } from '../model/type.model';
 
import { Observable } from 'rxjs'; 
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { apiURL, apiURLtyp } from '../config';
import { TypeWrapper } from '../model/typeWrapped.model';
const httpOptions = {  headers: new HttpHeaders( {'Content-Type': 'application/json'} ) 
}; 
@Injectable({
  providedIn: 'root'
})
export class SmartphoneService {
 
  smartphones: Smartphone[] = [];
  smartphone!:Smartphone;


 //types: Typesmartphone[]; // Assurez-vous que cela correspond au type correct

  constructor(private http :HttpClient) { 
   
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
    return this.http.get<Smartphone[]>(apiURL); 
  } 
  
 
  ajouterSmartphone( smar: Smartphone):Observable<Smartphone>{ 
    return this.http.post<Smartphone>(apiURL, smar, httpOptions); 
  } 
  
 
    supprimerSmartphone(id : number) { 
      const url = `${apiURL}/${id}`; 
       return this.http.delete(url, httpOptions); 
           } 
    
           consulterSmartphone(id: number): Observable<Smartphone> { 
            const url = `${apiURL}/${id}`; 
            return this.http.get<Smartphone>(url); 
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
      return this.http.put<Smartphone>(apiURL, s, httpOptions); 
      }
     
      listeTypes():Observable<TypeWrapper>{
        return this.http.get<TypeWrapper>(apiURLtyp);
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
           
    }

