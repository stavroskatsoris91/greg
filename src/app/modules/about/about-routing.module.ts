import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoryComponent } from './components/story/story.component';
import { HorsesComponent } from './components/horses/horses.component';
import { InstructorsComponent } from './components/instructors/instructors.component';
import { SafetyComponent } from './components/safety/safety.component';




const routes: Routes = [
  {
    path: 'story',
    component: StoryComponent,
  },
  {
    path: 'instructors',
    component: InstructorsComponent,
  },
  {
    path: 'horses',
    component: HorsesComponent,
  },
  {
    path: 'safety',
    component: SafetyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }