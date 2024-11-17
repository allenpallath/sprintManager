import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing/listing.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ListingComponent },
  { path: 'listing', component: ListingComponent },
];

@NgModule({
  declarations: [ListingComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MainModule {}
