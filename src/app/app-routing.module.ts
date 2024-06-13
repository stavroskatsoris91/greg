import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LanguageComponent } from './components/language/language.component';
import { CanActivateTeam, CanActivateHome } from './can-activate';




const children: Routes = [
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  { path: 'about',  redirectTo: 'about/story', pathMatch: 'full' },
  {
    path: 'about',
    loadChildren: () => import('./modules/about/about.module').then(m_ => m_.AboutModule)
  },
  {
    path: 'activities',
    loadChildren: () => import('./modules/activities/activities.module').then(m_ => m_.ActivitiesModule)
  },
  { path: 'contact',  redirectTo: 'contact/booking', pathMatch: 'full' },
  {
    path: 'contact',
    loadChildren: () => import('./modules/contact/contact.module').then(m_ => m_.ContactModule)
  },
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'instructors',  redirectTo: 'about/instructors', pathMatch: 'full' },
  { path: 'horses',  redirectTo: 'about/horses', pathMatch: 'full' },
  { path: 'safety',  redirectTo: 'about/safety', pathMatch: 'full' },
  { path: 'accommodations',  redirectTo: 'about/accommodations', pathMatch: 'full' },
  { path: 'treks',  redirectTo: 'activities/treks', pathMatch: 'full' },
  { path: 'lessons',  redirectTo: 'activities/lessons', pathMatch: 'full' },
  { path: 'photoshoots',  redirectTo: 'activities/photoshoots', pathMatch: 'full' },
  { path: 'carriage',  redirectTo: 'activities/carriage', pathMatch: 'full' },
  { path: 'picnics',  redirectTo: 'activities/picnics', pathMatch: 'full' },
  { path: 'thankyou',  redirectTo: 'contact/thankyou', pathMatch: 'full' },
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
