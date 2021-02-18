import { Component, HostListener, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import {
  IScriptResponse,
  ScriptLoader,
} from "../services/script-loader.service";
import { ScriptTags } from "../store/scriptStore";

@Component({
  selector: "app-trip-advisor",
  templateUrl: "./trip-advisor.component.html",
  styleUrls: ["./trip-advisor.component.scss"],
})
export class TripAdvisorComponent implements OnInit {
  @HostListener("window:resize")
  onResize() {
    if(this.wasMobile!==this.isMobile){
      this.wasMobile = this.isMobile;
      this.loadTripAdvisor();
    }
  }
  wasMobile:boolean = this.isMobile;
  constructor(
    private readonly scriptLoader: ScriptLoader,
    private readonly translate: TranslateService
    ) {
      this.translate.onLangChange.subscribe((x)=>{
        this.loadTripAdvisor();
      })
    }

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.loadTripAdvisor();
  }
  loadTripAdvisor() {
    const scriptName = this.tripAdvisorScript;
    this.scriptLoader
      .loadScript(scriptName)
      .then((res: IScriptResponse) => {
        if (res.loaded) {
          if(res.status=='Already Loaded'){
            const call = this.scriptLoader.loadMethod(scriptName);
            if(call){
              call();
            }
          }else{
            document.head.getElementsByTagName('script')[0].onload = ()=>{
              this.scriptLoader.saveMethod(scriptName,this.taMethod);
              this.taMethod();
            }
          }
        }
      });
  }
  taValidate(){
    if(window.taValidate){
      window.taValidate();
    }
  }
  get isMobile(): boolean {
    return window.innerWidth < 468;
  }
  get tripAdvisorScript() {
    return this.isMobile
      ? this.isGreek?ScriptTags.TripAdvisorMobileGR:ScriptTags.TripAdvisorMobile
      : this.isGreek?ScriptTags.TripAdvisorDesktopGR:ScriptTags.TripAdvisorDesktop;
  }
  get isGreek(){
    return (this.translate.currentLang||this.translate.defaultLang)=='el';
  }
  get taMethod():()=>void{
    const {taValidate, taValList, taValIndex} = window;
    if(taValidate){
      return taValList[taValIndex-1];
    }
  }
}
