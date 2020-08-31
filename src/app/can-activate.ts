import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class CanActivateTeam implements CanActivate {
  constructor(private router: Router, private translate: TranslateService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    const path = route.params.lang;
    const routeChildren = route.routeConfig.children;
    const language = this.translate.currentLang || this.translate.defaultLang;
    if(routeChildren.map(x=>x.component&&x.path).filter(x=>x!=undefined).includes(path)){
      this.router.navigateByUrl(language+'/'+path);
      return false;
    }else if(['en','el'].includes(path)){
      return true;
    }else{
      return false;
    }
  }
}
@Injectable()
export class CanActivateHome implements CanActivate {
  constructor(private router: Router, private translate: TranslateService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    const language = this.translate.currentLang || this.translate.defaultLang;
    this.router.navigateByUrl(language+'/');
    return false;
  }
}