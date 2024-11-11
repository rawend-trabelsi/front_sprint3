import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmartphonesComponent } from './smartphones/smartphones.component';
import { AddSmartphoneComponent } from './add-smartphone/add-smartphone.component';
import { UpdateSmartphoneComponent } from './update-smartphone/update-smartphone.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RechercheParTypeComponent } from './recherche-par-type/recherche-par-type.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ListesTypesComponent } from './listes-types/listes-types.component';
import { UpdateTypeComponent } from './update-type/update-type.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { TokenInterceptor } from './services/token.interceptor';
import { RegisterComponent } from './register/register.component';
import { VerifEmailComponent } from './verif-email/verif-email.component'; 
import { ToastrModule } from 'ngx-toastr'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
@NgModule({
  declarations: [
    AppComponent,
    SmartphonesComponent,
    AddSmartphoneComponent,
    UpdateSmartphoneComponent,
    RechercheParTypeComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListesTypesComponent,
    UpdateTypeComponent,
    LoginComponent,
    ForbiddenComponent,
    RegisterComponent,
    VerifEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
ToastrModule.forRoot(), // ToastrModule added  
    
  ],
 
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
