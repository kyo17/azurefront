import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalWrite } from 'src/app/DTOs/Write/AnimalWrite';
import { AnimalService } from 'src/app/services/animal.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-animal-create',
  templateUrl: './animal-create.component.html',
  styleUrls: ['./animal-create.component.css']
})
export class AnimalCreateComponent implements OnInit {

  constructor(private service: AnimalService, private router: Router) { }
  progress: number = 0;

  ngOnInit(): void {
  }

  save(animal: AnimalWrite){
    this.service.save(animal).subscribe((e) => {
      if (e.type === HttpEventType.UploadProgress) {
        this.progress = Math.round((e.loaded / e.total) * 100);
        if (this.progress == 100) {
          swal.fire('Animal', 'El animal '+ animal.nombre + ' ha sido agregado con éxito', 'success');
        this.router.navigate(['/animales']);
        }
      }
    });
  }
}
