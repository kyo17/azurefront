import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AnimalRead } from 'src/app/DTOs/Read/AnimalRead';
import { AnimalService } from 'src/app/services/animal.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css'],
})
export class AnimalComponent implements OnInit {
  constructor(private service: AnimalService) {}
  animales: AnimalRead[] = [];

  getData = new MatTableDataSource<AnimalRead>(this.animales);
  toShow: string[] = ['id', 'nombre', 'foto'];

  ngOnInit(): void {
    this.getAll();
  }
  private getAll(): void {
    this.service.getAll().subscribe((data) => {
      this.animales = data;
    });
  }

  toDelete(id: string): void {
    this.service.delete(id).subscribe(() => {
      this.getAll();
    })
  }
}
