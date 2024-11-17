import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryFormComponent } from './story-form/story-form.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoryListingComponent } from './story-listing/story-listing.component';

const routes: Routes = [
  { path: '', component: StoryFormComponent },
  { path: 'create-story', component: StoryFormComponent },
  { path: 'story-listing', component: StoryListingComponent },
];

@NgModule({
  declarations: [StoryFormComponent, StoryListingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class StoryModule {}
