import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrekMapComponent } from 'src/app/modules/activities/components/trek-map/trek-map.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActivitiesRoutingModule } from './activities-routing.module';
import { CarriageComponent } from './components/carriage/carriage.component';
import { LessonsComponent } from './components/lessons/lessons.component';
import { PhotoshootsComponent } from './components/photoshoots/photoshoots.component';
import { TreksComponent } from './components/treks/treks.component';


@NgModule({
  declarations: [
    CarriageComponent, LessonsComponent, PhotoshootsComponent, TreksComponent, TrekMapComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      extend: true,
    }),
    NgbModule,
    ActivitiesRoutingModule
  ]
})
export class ActivitiesModule { }
