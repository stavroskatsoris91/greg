import { Component, AfterViewInit, ViewChild, Input, Output, EventEmitter } from "@angular/core";
import { BrowserService } from "src/app/browser.service";
import {
  IScriptResponse,
  ScriptLoader,
} from "src/app/services/script-loader.service";
import { ScriptTags } from "src/app/store/scriptStore";

interface IMarker{
  title:string,
  lat:number,
  lng:number,
  icon: string
}
@Component({
  selector: "app-googlemaps",
  templateUrl: "./googlemaps.component.html",
  styleUrls: ["./googlemaps.component.scss"],
})
export class GooglemapsComponent implements AfterViewInit {

  @Input() markers: IMarker[];
  @Output() loaded: EventEmitter<boolean> = new EventEmitter();
  @ViewChild("googleMaps") gmapElement: any;

  infowindow: any;


  constructor(
    private readonly scriptLoader: ScriptLoader,
    private readonly browser: BrowserService
  ) {}

  ngAfterViewInit(): void {
    this.scriptLoader
      .loadScript(ScriptTags.GoogleMaps)
      .then((res: IScriptResponse) => {
        if (res.loaded) {
          this.initialize();
        }
      });
  }
  get google() {
    return this.browser.window.google;
  }
  get element() {
    return this.gmapElement.nativeElement;
  }

  initialize() {
    let mapProp = {
      zoom: 18,
      center: { lat: 37.239282, lng: 23.147472 },
      mapTypeId: this.google.maps.MapTypeId.SATELLITE,
    };

    const map = new this.google.maps.Map(this.element, mapProp);
    map.addListener('tilesloaded', () =>{ 
      this.loaded.emit(true);
    })
    this.infowindow = new this.google.maps.InfoWindow({
      content: "hello",
    });

    this.markers.forEach((mark) => {
      const marker = new this.google.maps.Marker({
        position: new this.google.maps.LatLng(mark.lat, mark.lng),
        map: map,
        icon: mark.icon,
        title: mark.title,
        // animation: google.maps.Animation.BOUNCE
      });

      const content =
        `<div><a href="https://maps.google.com/maps?saddr=37.2676649,23.1564344&daddr=
        ${mark.lat},${mark.lng}
        " target="_blank">Find us!</a></div>`; //'<a ng-click="this.markDetail(' + i + ')" class="btn btn-default">View details</a>';
      /* jshint loopfunc: true */
      // marker.addListener('click', ((content, scope)=> {
      //   return  () =>{
      //     scope.infowindow.setContent(content);
      //     scope.infowindow.open(scope.map, marker);
      //   };
      // })(marker));
      marker.addListener("click", () => {
        const infoWindow = new this.google.maps.InfoWindow({
          content: content,
        });
        infoWindow.open(marker.getMap(), marker);
      });
      marker.setMap(map);
    });
  }
  markDetail = (index) => {
    return index;
  };
}
