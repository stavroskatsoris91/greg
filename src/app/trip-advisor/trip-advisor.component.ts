import { Component, HostListener, OnInit } from "@angular/core";
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
      this.loadTripAdvisor();
    }
  }
  wasMobile:boolean = this.isMobile;
  constructor(private readonly scriptLoader: ScriptLoader) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.loadTripAdvisor();
  }
  loadTripAdvisor() {
    this.scriptLoader
      .loadScript(this.tripAdvisorScript)
      .then((res: IScriptResponse) => {
        if (res.loaded) {
          document.head.getElementsByTagName('script')[0].onload = ()=>{this.taValidate()}
          this.taValidate();
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
      ? ScriptTags.TripAdvisorMobile
      : ScriptTags.TripAdvisorDesktop;
  }
}
