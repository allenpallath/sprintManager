import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SprintFormComponent } from './sprint-form/sprint-form.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: SprintFormComponent },
  { path: 'create-sprint', component: SprintFormComponent },
];

@NgModule({
  declarations: [SprintFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SprintModule {}
