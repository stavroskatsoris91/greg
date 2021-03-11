import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { InstructorsComponent } from './components/instructors/instructors.component';
import { HorsesComponent } from './components/horses/horses.component';
import { SafetyComponent } from './components/safety/safety.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { TranslateService } from '@ngx-translate/core';

export function getLanguage() {
  return this.translate.currentLang||this.translate.default;
}
const routes: Routes = [
  {
    path: ':lang/about',
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
    path: 'thankyou',
    component: ThankyouComponent,
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
