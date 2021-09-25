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

  ngOnInit(): void {
  }

  save(animal: AnimalWrite){
    /*
    this.service.save(animal).subscribe(() => {
      swal.fire('Animal', 'Animal agregado con éxito', 'success');
      this.router.navigate(['/animales']);
    });
    */
   console.log(animal);
  }
}
