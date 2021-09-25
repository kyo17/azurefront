import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalCreateComponent } from './components/animal-create/animal-create.component';
import { AnimalComponent } from './components/animal/animal.component';

const routes: Routes = [
  {path: 'animales', component: AnimalComponent},
  {path: 'animal/form', component: AnimalCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
