import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AnimalRead } from 'src/app/DTOs/Read/AnimalRead';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  constructor(private service: AnimalService) { }
  animales: AnimalRead[] = [];

  getData = new MatTableDataSource<AnimalRead>(this.animales);
  toShow: string[] = ['id', 'nombre', 'foto'];

  ngOnInit(): void {
    this.service.getAll().subscribe(data => {
      this.animales = data;
    });
  }

}
