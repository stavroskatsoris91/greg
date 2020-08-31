import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { InstructorsComponent } from './components/instructors/instructors.component';
import { HorsesComponent } from './components/horses/horses.component';
import { TreksComponent } from './components/treks/treks.component';
import { LessonsComponent } from './components/lessons/lessons.component';
import { PhotoshootsComponent } from './components/photoshoots/photoshoots.component';
import { PicnicsComponent } from './components/picnics/picnics.component';
import { SafetyComponent } from './components/safety/safety.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { CarriageComponent } from './components/carriage/carriage.component';
import { LanguageComponent } from './components/language/language.component';
import { CanActivateTeam, CanActivateHome } from './can-activate';




const children: Routes = [
  {
    path: 'about',
    component: AboutComponent,
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
    path: 'treks',
    component: TreksComponent,
  },
  {
    path: 'lessons',
    component: LessonsComponent,
  },
  {
    path: 'photoshoots',
    component: PhotoshootsComponent,
  },
  {
    path: 'picnics',
    component: PicnicsComponent,
  },
  {
    path: 'safety',
    component: SafetyComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'thankyou',
    component: ThankyouComponent,
  },
  {
    path: 'carriage',
    component: CarriageComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
const routes: Routes = [
  {
    path: ':lang',
    canActivate: [CanActivateTeam],
    component: LanguageComponent,
    children: children
  },{
    path: '',
    canActivate:[CanActivateHome],
    component:LanguageComponent
  },{
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollOffset: [0, 0],
    scrollPositionRestoration: 'top'
  })],
  providers: [CanActivateTeam,CanActivateHome],
  exports: [RouterModule]
})
export class AppRoutingModule { }