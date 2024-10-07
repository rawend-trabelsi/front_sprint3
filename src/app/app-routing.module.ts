import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmartphonesComponent } from './smartphones/smartphones.component';
import { AddSmartphoneComponent } from './add-smartphone/add-smartphone.component'; 
import { UpdateSmartphoneComponent } from './update-smartphone/update-smartphone.component';
import { RechercheParTypeComponent } from './recherche-par-type/recherche-par-type.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListesTypesComponent } from './listes-types/listes-types.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { SmartphoneGuard } from './smartphone.guard';


const routes: Routes = [
  {path: "smartphones", component : SmartphonesComponent

  } ,
  {path: "add-smartphone", component : AddSmartphoneComponent,canActivate:[SmartphoneGuard],

  } ,
  
  {path: "", redirectTo :"smartphones" , pathMatch:"full"
  },
 {path: "updateSmartphone/:id",  component: UpdateSmartphoneComponent} ,
 {path: "rechercheParType" ,component:RechercheParTypeComponent},

  {path: "rechercheParNom" ,component:RechercheParNomComponent},
  {path: "listeTypes", component : ListesTypesComponent}, 
  {path: 'login', component: LoginComponent},
  {path:  'app-forbidden', component: ForbiddenComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
