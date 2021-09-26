import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimalComponent } from './components/animal/animal.component';
import { AnimalFormComponent } from './components/animal-form/animal-form.component';
import { MaterialModule } from "./material/material/material.module";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { ImagesComponent } from './components/images/images.component';
import { AnimalCreateComponent } from './components/animal-create/animal-create.component';
import { AnimalEditComponent } from './components/animal-edit/animal-edit.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    AnimalFormComponent,
    ImagesComponent,
    AnimalCreateComponent,
    AnimalEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
