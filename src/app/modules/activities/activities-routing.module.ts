import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarriageComponent } from './components/carriage/carriage.component';
import { LessonsComponent } from './components/lessons/lessons.component';
import { PhotoshootsComponent } from './components/photoshoots/photoshoots.component';
import { TreksComponent } from './components/treks/treks.component';




const routes: Routes = [
  {
    path:'treks',
    component: TreksComponent
  },
  {
    path:'lessons',
    component: LessonsComponent
  },
  {
    path:'photoshoots',
    component: PhotoshootsComponent
  },
  {
    path:'carriage',
    component: CarriageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule { }