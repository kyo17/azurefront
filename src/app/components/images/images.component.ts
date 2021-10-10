import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { toBase64 } from 'src/app/material/Funciones';
import swal from 'sweetalert2';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
})
export class ImagesComponent implements OnInit {
  constructor() {}
  img64: string;
  @Output()
  archivo: EventEmitter<File> = new EventEmitter<File>();
  @Input()
  imgActual: string;

  ngOnInit(): void {}

  OnChange(event): void {
    if (event.target.files.length > 0) {
      const file: File = event.target.files[0];
      if (file.type.indexOf('image') == 0) { // Validación de tipo imagen
        if (file.size < (1024 * 1024) * 17) { // Validación del tamaño de la imagen
          toBase64(file).then((value: string) => (this.img64 = value));
          this.imgActual = null;
        this.archivo.emit(file);
        }else{
          swal.fire('Error', 'La imagen ' + file.name.toUpperCase() +
          ' sobrepasa '+ Math.round(file.size / (1024 * 1024)) +
          ' megabytes' + ' el tamaño permitido', 'error');
        }
      } else {
        swal.fire('Error', 'Selecciona únicamente imagenes', 'error');
      }
    }
  }
}
