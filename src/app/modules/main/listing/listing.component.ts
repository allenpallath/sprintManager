import { Component } from '@angular/core';
import { SprintModel } from '../../../core/models/all-models';
import { CommonServiceService } from '../../../core/shared-services/common-service.service';

@Component({
  selector: 'app-listing',
  standalone: false,
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss',
})
export class ListingComponent {
  sprintList: Array<SprintModel> = [];
  constructor(private sharedService: CommonServiceService) {
    this.sprintList = sharedService.sprints;
  }
}
