import { Component, AfterViewInit, ElementRef, ViewChild } from "@angular/core";
import {
  IScriptResponse,
  ScriptLoader,
} from "src/app/services/script-loader.service";
import { ScriptTags } from "src/app/store/scriptStore";

@Component({
  selector: "app-googlemaps",
  templateUrl: "./googlemaps.component.html",
  styleUrls: ["./googlemaps.component.scss"],
})
export class GooglemapsComponent implements AfterViewInit {
  map: any;
  cities = [
    {
      title: "Greg' Spetses Horses",
      lat: 37.239282,
      lng: 23.147472,
      icon: require("src/assets/images/googlemap/horse0.png").default,
    },
    {
      title: "Greg' Spetses Horses",
      lat: 37.239148,
      lng: 23.147901,
      icon: require("src/assets/images/googlemap/horse1.png").default,
    },
    {
      title: "Greg' Spetses Horses",
      lat: 37.239151,
      lng: 23.147985,
      icon: require("src/assets/images/googlemap/horse2.png").default,
    },
    {
      title: "Greg' Spetses Horses",
      lat: 37.239063,
      lng: 23.14797,
      icon: require("src/assets/images/googlemap/horse3.png").default,
    },
    {
      title: "Greg' Spetses Horses",
      lat: 37.239062,
      lng: 23.14787,
      icon: require("src/assets/images/googlemap/horse4.png").default,
    },
  ];
  infowindow: any;

  @ViewChild("googleMaps") gmapElement: any;

  constructor(
    private elementRef: ElementRef<any>,
    private readonly scriptLoader: ScriptLoader
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
    return window.google;
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

    this.map = new this.google.maps.Map(this.element, mapProp);

    this.infowindow = new this.google.maps.InfoWindow({
      content: "hello",
    });

    this.cities.forEach((city) => {
      const marker = new this.google.maps.Marker({
        position: new this.google.maps.LatLng(city.lat, city.lng),
        map: this.map,
        icon: city.icon,
        title: city.title,
        // animation: google.maps.Animation.BOUNCE
      });

      const content =
        '<div><a href="https://maps.google.com/maps?saddr=37.2676649,23.1564344&daddr=' +
        city.lat +
        "," +
        city.lng +
        '" target="_blank">Find us!</a></div>'; //'<a ng-click="this.cityDetail(' + i + ')" class="btn btn-default">View details</a>';
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
      marker.setMap(this.map);
    });
    setTimeout(() => {
      this.elementRef.nativeElement.previousElementSibling.remove();
    }, 1000);
  }
  cityDetail = (index) => {
    return index;
  };
}
