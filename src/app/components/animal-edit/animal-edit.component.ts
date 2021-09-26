import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalWrite } from 'src/app/DTOs/Write/AnimalWrite';
import { AnimalService } from 'src/app/services/animal.service';
import { AnimalRead } from '../../DTOs/Read/AnimalRead';
import swal from 'sweetalert2';

@Component({
  selector: 'app-animal-edit',
  templateUrl: './animal-edit.component.html',
  styleUrls: ['./animal-edit.component.css']
})
export class AnimalEditComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private service: AnimalService) { }
  dto: AnimalRead;
  progress: number = 0;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.service.getById(params.id).subscribe( data => {
        this.dto = data;
      }, () => this.router.navigate(['/animales']));
    });
  }

  editChanges(animal: AnimalWrite){
    this.service.update(this.dto.id, animal).subscribe( e => {
      if (e.type === HttpEventType.UploadProgress) {
        this.progress = Math.round((e.loaded / e.total) * 100);
        if (this.progress == 100) {
          swal.fire('Animal', 'El animal '+ animal.nombre + ' ha sido agregado con éxito', 'success');
        this.router.navigate(['/animales']);
        }
      }
    })
  }
}
