import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimalRead } from 'src/app/DTOs/Read/AnimalRead';
import { AnimalWrite } from 'src/app/DTOs/Write/AnimalWrite';
import { upperCap } from 'src/app/material/Funciones';


@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css'],
})
export class AnimalFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private nav: Router
  ) {}

  img64: string;
  @Output()
  archivo: EventEmitter<File> = new EventEmitter<File>();
  @Input()
  imgActual: string;
  @Input()
  dto: AnimalRead;
  form: FormGroup;
  @Output()
  submit: EventEmitter<AnimalWrite> = new EventEmitter<AnimalWrite>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: [
        '',
        {
          validators: [
            Validators.required,
            Validators.minLength(3),
            upperCap(),
          ],
        },
      ],
      foto: '',
    });
    if (this.dto !== undefined) {
      this.form.patchValue(this.dto);
    }
  }

  erroresV() {
    var error = this.form.get('nombre');
    if (error.hasError('required')) {
      return 'Este campo es de caracter obligatorio';
    }
    if (error.hasError('minlength')) {
      return 'El nombre debe tener tener minimo 3 caracteres';
    }
    if (error.hasError('upperL')) {
      return error.getError('upperL').msg;
    }
    return '';
  }
  onSubmit() {
    this.submit.emit(this.form.value);
  }
  getPic(file) {
    this.form.get('foto').setValue(file);
  }
  onCancel(): void {
    this.nav.navigate(['/animales']);
  }
}
