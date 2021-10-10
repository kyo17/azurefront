import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import {
  AnimalCreateComponent,
} from './components/animal-create/animal-create.component';
import {
  AnimalDetailsComponent,
} from './components/animal-details/animal-details.component';
import {
  AnimalEditComponent,
} from './components/animal-edit/animal-edit.component';
import { AnimalComponent } from './components/animal/animal.component';

const routes: Routes = [
  {path: 'animales', component: AnimalComponent},
  {path: 'animal/create', component: AnimalCreateComponent},
  {path: 'animal/edit/:id', component: AnimalEditComponent},
  {path: 'animal/details/:id', component: AnimalDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
