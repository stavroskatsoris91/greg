import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  template : '<router-outlet></router-outlet>'
})
export class LanguageComponent implements OnInit {

  constructor( private activatedRoute : ActivatedRoute, private translate: TranslateService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( (params : Params) => {
      // this.translate.use( params['lang'] );
    });    
  }
}