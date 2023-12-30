import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { MetaDataService } from 'src/app/services/meta-data.service'
@Injectable()
export class CanActivateTeam  {
  constructor(private router: Router, private translate: TranslateService,
    private readonly metaData: MetaDataService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    const path = route.params.lang;
    const routeChildren = route.routeConfig.children;
    const languages = this.translate.getLangs();
    if(routeChildren.map(x=>x.component&&x.path).filter(x=>x!=undefined).includes(path)){
      const currentLang = this.translate.currentLang|| this.translate.defaultLang;
      const newPath = currentLang+'/'+path;
      this.metaData.redirectPage(newPath);
      this.router.navigateByUrl(newPath);
      return false;
    }else if(languages.includes(path)){
      return true;
    }else{
      this.router.navigateByUrl('')
      return false;
    }
  }
}
@Injectable()
export class CanActivateHome  {
  constructor(private router: Router,
    private translate: TranslateService,
    private readonly metaData: MetaDataService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    const currentLang = this.translate.currentLang || this.translate.defaultLang;
    const newPath = currentLang;
    this.metaData.redirectPage(newPath);
    this.router.navigateByUrl(newPath);
    return false;
  }
}