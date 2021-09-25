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
      if (file.type.indexOf('image') == 0) {
        if (file.size < (1024 * 1024) * 5) {
          toBase64(file).then((value: string) => (this.img64 = value));
        this.archivo.emit(file);
        this.imgActual = null;
        }else{
          swal.fire('Error', 'La imagen sobrepasa el tamaño permitido');
        }
      } else {
        swal.fire('Error', 'Selecciona únicamente imagenes', 'error');
      }
    }
  }
}
