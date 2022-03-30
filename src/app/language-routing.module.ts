import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
// import { AboutComponent } from './components/about/about.component';
import { InstructorsComponent } from './modules/about/components/instructors/instructors.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TranslateService } from '@ngx-translate/core';
import { AccommodationsComponent } from './modules/about/components/accommodations/accommodations.component';
import { HorsesComponent } from './modules/about/components/horses/horses.component';
import { SafetyComponent } from './modules/about/components/safety/safety.component';

export function getLanguage() {
  return this.translate.currentLang||this.translate.default;
}
const routes: Routes = [
  // {
  //   path: ':lang/about',
  //   component: AboutComponent,
  // },
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
    path: 'accommodations',
    component: AccommodationsComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: '',
    redirectTo: 'en',
    pathMatch: 'full'
  },
  {
  path: ':lang',
  component: HomeComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollOffset: [0, 0],
    scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(public translate: TranslateService){
    console.log(this)
  }
}
