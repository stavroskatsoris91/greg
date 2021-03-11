import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { InstructorsComponent } from './components/instructors/instructors.component';
import { HorsesComponent } from './components/horses/horses.component';
import { SafetyComponent } from './components/safety/safety.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
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
    path: 'safety',
    component: SafetyComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'activities',
    loadChildren: () => import('./modules/activities/activities.module').then(m_ => m_.ActivitiesModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/contact/contact.module').then(m_ => m_.ContactModule)
  },
  {
    path: 'thankyou',
    component: ThankyouComponent,
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