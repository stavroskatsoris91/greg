import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gregs-app';
  constructor(private translate: TranslateService) {
    const userLang = navigator.language;
    const defaultLang = userLang.slice(0,2)=='el'?'el':'en';
    this.translate.setDefaultLang(defaultLang);
  }
}
