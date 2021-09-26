import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AnimalRead } from '../DTOs/Read/AnimalRead';
import { AnimalWrite } from '../DTOs/Write/AnimalWrite';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) { }

  private url = environment.urlApi + 'animal';

  getAll() : Observable<AnimalRead[]> {
    return this.http.get<AnimalRead[]>(this.url).pipe(
      map(resp => resp as AnimalRead[])
    );
  }

  save(animal: AnimalWrite): Observable<HttpEvent<{}>> {
    const data = this.sendPic(animal);
    const req = new HttpRequest('POST', this.url, data, {
      reportProgress: true
    });
    return this.http.request(req);
    //return this.http.post(this.url, data);
  }

  private sendPic(animal: AnimalWrite): FormData {
    const formData = new FormData();
    formData.append('nombre', animal.nombre);
    formData.append('foto', animal.foto);
    return formData;
  }
}
