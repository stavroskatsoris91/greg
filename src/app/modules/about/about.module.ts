import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { StoryComponent } from './components/story/story.component';
import { HorsesComponent } from './components/horses/horses.component';
import { InstructorsComponent } from './components/instructors/instructors.component';
import { SafetyComponent } from './components/safety/safety.component';
import { CoinComponent } from './components/coin/coin.component';
import { AccommodationsComponent } from './components/accommodations/accommodations.component';



@NgModule({
  declarations: [StoryComponent, InstructorsComponent, HorsesComponent, SafetyComponent, CoinComponent, AccommodationsComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    TranslateModule.forChild({
      extend: true,
    }),
  ]
})
export class AboutModule { }
