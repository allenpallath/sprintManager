import { Injectable } from '@angular/core';
import { SprintModel, StoryModel } from '../models/all-models';

@Injectable({
  providedIn: 'root',
})
export class CommonServiceService {
  stories: Array<StoryModel> = [];
  sprints: Array<SprintModel> = [];
  constructor() {}
}
