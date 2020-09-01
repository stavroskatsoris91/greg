import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gregs-app';
  constructor(
    private translate: TranslateService){
    const path = window.location.pathname.split('/')[1];
    const userLang = translate.getBrowserLang();
    const defaultLang = (path||userLang)=='el'?'el':'en';

    this.translate.addLangs(['en', 'el']);
    this.translate.setDefaultLang(defaultLang);
    this.translate.use(defaultLang);
  }
}
