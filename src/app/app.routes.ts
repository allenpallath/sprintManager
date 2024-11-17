import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  {
    path: 'main',
    loadChildren: () =>
      import('./modules/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'story',
    loadChildren: () =>
      import('./modules/story/story.module').then((m) => m.StoryModule),
  },
  {
    path: 'sprint',
    loadChildren: () =>
      import('./modules/sprint/sprint.module').then((m) => m.SprintModule),
  },
];
