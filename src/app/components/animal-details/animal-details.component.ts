import {
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AnimalRead } from 'src/app/DTOs/Read/AnimalRead';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent implements OnInit {

  constructor(
    private service: AnimalService,
    private activatedRoute: ActivatedRoute
  ) { }

  dto: AnimalRead;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.service.getById(params.id).subscribe((data) => {
        this.dto = data;
      });
    });
  }

}
