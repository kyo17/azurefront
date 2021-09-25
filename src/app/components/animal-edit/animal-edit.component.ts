import { Component, OnInit } from '@angular/core';
import { AnimalWrite } from 'src/app/DTOs/Write/AnimalWrite';
import { AnimalRead } from '../../DTOs/Read/AnimalRead';

@Component({
  selector: 'app-animal-edit',
  templateUrl: './animal-edit.component.html',
  styleUrls: ['./animal-edit.component.css']
})
export class AnimalEditComponent implements OnInit {

  constructor() { }
  dto: AnimalRead;

  ngOnInit(): void {
  }

  editChanges(animal: AnimalWrite){
    console.log(animal);
  }
}
