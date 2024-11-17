export interface StoryModel {
  storyName: string;
  storyPoints: number;
  isInSprint: boolean;
}

export interface SprintModel {
  sprintName: string;
  maxStoryPoints: number;
  selectedStories: StoryModel[];
}
