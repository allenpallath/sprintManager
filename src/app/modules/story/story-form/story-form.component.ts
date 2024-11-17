import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonServiceService } from '../../../core/shared-services/common-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story-form',
  standalone: false,
  templateUrl: './story-form.component.html',
  styleUrl: './story-form.component.scss',
})
export class StoryFormComponent implements OnInit {
  storyForm!: FormGroup;

  constructor(
    private sharedService: CommonServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.storyForm = new FormGroup({
      storyName: new FormControl('', [Validators.required]), // Form control with validators
      storyPoints: new FormControl(null, [Validators.required]),
      isInSprint: new FormControl(false),
    });
  }

  addStory() {
    const isExist = this.sharedService.stories.filter((el) => {
      return (
        el.storyName.toLowerCase() ===
        this.storyForm.value.storyName.toLowerCase()
      );
    });

    if (isExist?.length) {
      alert('Story Already exist');
    } else {
      this.sharedService.stories.push(this.storyForm.value);
      this.router.navigate(['/story/story-listing']);
    }
  }
}
