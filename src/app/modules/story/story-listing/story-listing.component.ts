import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CommonServiceService } from '../../../core/shared-services/common-service.service';
import { StoryModel } from '../../../core/models/all-models';

@Component({
  selector: 'app-story-listing',
  standalone: false,
  templateUrl: './story-listing.component.html',
  styleUrl: './story-listing.component.scss',
})
export class StoryListingComponent {
  storiesList: Array<StoryModel> = [];
  constructor(private sharedService: CommonServiceService) {
    this.storiesList = sharedService.stories;
  }

  deleteStory(storyIndex: number) {
    if (this.storiesList[storyIndex].isInSprint) {
      alert('Cannot Delete as the story is already added to a sprint');
    } else {
      this.storiesList.splice(storyIndex, 1);
    }
  }
}
