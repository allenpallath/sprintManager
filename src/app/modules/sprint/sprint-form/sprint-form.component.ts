import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonServiceService } from '../../../core/shared-services/common-service.service';
import { StoryModel } from '../../../core/models/all-models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sprint-form',
  standalone: false,
  templateUrl: './sprint-form.component.html',
  styleUrl: './sprint-form.component.scss',
})
export class SprintFormComponent {
  sprintForm!: FormGroup;

  constructor(
    public sharedService: CommonServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.sprintForm = new FormGroup({
      sprintName: new FormControl(null, [Validators.required]),
      maxStoryPoints: new FormControl(null, [Validators.required]),
      selectedStories: new FormControl(false),
    });
  }

  addStory() {
    this.sharedService.sprints.push(this.sprintForm.value);
  }

  autoSelectStories() {
    const availableStories = this.sharedService.stories.filter(
      (el: StoryModel) => !el.isInSprint
    );

    if (!availableStories.length) {
      alert('No more available stories to add to sprint');
      return;
    }

    const sortedStories = availableStories.sort(
      (a, b) => Number(a.storyPoints) - Number(b.storyPoints)
    );

    const selectedStories: StoryModel[] = [];
    let totalPoints = 0;

    for (const story of sortedStories) {
      if (
        totalPoints + Number(story.storyPoints) <=
        Number(this.sprintForm.value.maxStoryPoints)
      ) {
        selectedStories.push(story);
        totalPoints += Number(story.storyPoints);
      }
    }

    const selectedStoriesSet = new Set(selectedStories);
    this.sharedService.stories.forEach((allStoriesEl) => {
      if (selectedStoriesSet.has(allStoriesEl)) {
        allStoriesEl.isInSprint = true;
      }
    });

    if (!selectedStories.length) {
      alert('No stories available for the specified story points');
      return;
    }

    this.sprintForm.get('selectedStories')?.patchValue(selectedStories);
  }

  clearAllStories() {
    alert(
      'This actions will delete all stories created so far, All sprints with those stories will also get deleted'
    );
    this.sharedService.stories = [];
    this.sharedService.sprints = [];
    this.sprintForm.get('selectedStories')?.patchValue([]);
  }

  clearSelectedStories() {
    const selectedStories: StoryModel[] =
      this.sprintForm.get('selectedStories')?.value || [];

    const selectedStoriesSet = new Set(selectedStories);
    this.sharedService.stories.forEach((allStoriesEl) => {
      if (selectedStoriesSet.has(allStoriesEl)) {
        allStoriesEl.isInSprint = false;
      }
    });
    this.sprintForm.get('selectedStories')?.patchValue([]);
  }

  saveSprint() {
    this.sharedService.sprints.push(this.sprintForm.value);
    this.router.navigate(['/main']);
  }
}
