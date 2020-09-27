import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AngularFireModule } from '@angular/fire';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BackgroundComponent } from './components/background/background.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { GooglemapsComponent } from './components/googlemaps/googlemaps.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { InstructorsComponent } from './components/instructors/instructors.component';
import { TreksComponent } from './components/treks/treks.component';
import { LessonsComponent } from './components/lessons/lessons.component';
import { PhotoshootsComponent } from './components/photoshoots/photoshoots.component';
import { PicnicsComponent } from './components/picnics/picnics.component';
import { SafetyComponent } from './components/safety/safety.component';
import { HorsesComponent } from './components/horses/horses.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { CoinComponent } from './components/coin/coin.component';
import { ModalComponent } from './components/modal/modal.component';
import { InitalizeDirective } from './directives/initalize.directive';
import { ToggleAnimateDirective } from './directives/toggle.animate.directive';
import { MetaDataService } from './services/meta-data.service';
import { CarriageComponent } from './components/carriage/carriage.component';
import { LanguageComponent } from './components/language/language.component';
import { GalleryImageComponent } from './components/gallery-image/gallery-image.component';
import { NgxScrollLockModule } from 'ngx-scroll-lock';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BackgroundComponent,
    ClickOutsideDirective,
    GooglemapsComponent,
    HomeComponent,
    AboutComponent,
    InstructorsComponent,
    TreksComponent,
    LessonsComponent,
    PhotoshootsComponent,
    PicnicsComponent,
    SafetyComponent,
    HorsesComponent,
    GalleryComponent,
    ContactComponent,
    ThankyouComponent,
    CoinComponent,
    ModalComponent,
    InitalizeDirective,
    ToggleAnimateDirective,
    CarriageComponent,
    LanguageComponent,
    GalleryImageComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireFunctionsModule,
    NgxScrollLockModule,
  ],
  providers: [MetaDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}